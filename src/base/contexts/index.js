import React,{ useState, useMemo, useCallback } from "react";
import AppStorage from "../utils/AppStorage";
import { UserContext,ClientContext } from "./UserContext";

export const ContextWrapper = ({ children }) => {
  const [user, setUserState] = useState(AppStorage.getUserData());
  const [client, setClientState] = useState(AppStorage.getClientData());

  const setUser = useCallback(
    (person) => {
      const tempUser = { ...person };
      AppStorage.setUserData(tempUser);
      setUserState(tempUser);
      // if (tempUser?._id) {
      //   Analytics.setIdentity(tempUser);
      // }
    },
    [setUserState]
  );

  const setClient = useCallback(
    (client) => {
      const tempClient = { ...client };
      AppStorage.setClientData(tempClient);
      setClientState(tempClient);
      // if (tempUser?._id) {
      //   Analytics.setIdentity(tempUser);
      // }
    },
    [setClientState]
  );

  const userProviderState = useMemo(() => ({ user, setUser }), [user, setUser]);
  const clientProviderState = useMemo(() => ({ client, setClient }), [client, setClient]);

  return (
    <ClientContext.Provider value={clientProviderState}>
      <UserContext.Provider value={userProviderState}>
        {children}
      </UserContext.Provider>
    </ClientContext.Provider>
  );
};
