// From npm
import React from 'react';

// Service(s)

const Context = React.createContext({});

export default Context;

export class ContextProvider extends React.Component {
  render() {
    return (
      <Context.Provider value={{}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}