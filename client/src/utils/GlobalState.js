import React, { createContext, useContext } from "react";
import { useCardReducer } from './reducers'

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCardReducer({
    decks: [],
    cards: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
