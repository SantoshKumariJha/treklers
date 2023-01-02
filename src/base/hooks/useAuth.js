import { useContext } from "react";
import { ClientContext, UserContext } from "../contexts/UserContext";
import { axiosInstance } from "../api/axios.util";
import { URLConstants } from "../api/url.constants";
import { AuthTokenHandler } from "../api/auth-token.util";

export const useAuth = () => {
  const { user, setUser } = useContext(UserContext);
  const { client, setClient } = useContext(ClientContext);

  const logout = () => {
    setUser(undefined);
    setClient(undefined);
    // StorageUtil.clearAll();
  };

  const login = (loginData) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(URLConstants.login(), loginData)
        .then((response) => {
          try {
            console.log(" Client Login Successful", response);
            const data = response;
            const user = data?.user;
            const client = data?.loginData;
            client.clientType = client.type;
            AuthTokenHandler.setAccessToken(data?.tokens?.access);
            AuthTokenHandler.setAuthToken(data?.tokens?.authToken);
            setUser(user);
            setClient(client);
          } catch (error) {
            console.error(error);
          }
          resolve({ user, client });
        })
        .catch((err) => {
          const errorMsg = err?.response?.data?.message;
          reject(errorMsg);
        });
    });
  };

  return {
    logout,
    login,
  };
};
