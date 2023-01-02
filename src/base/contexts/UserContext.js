import React from "react";
export const UserContext = React.createContext({
  user: undefined,
  setUser: () => {},
});

export const ClientContext = React.createContext({
  client: undefined,
  setClient: () => {},
});

export const JobContext = React.createContext({
  job: undefined,
  setJob: () => {},
});
