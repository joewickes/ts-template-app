// From npm
import { createContext, FC } from 'react';

// Service(s)

const Context = createContext({});

export function ContextProvider(props: any) {
  return (
    <Context.Provider value={{}}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;