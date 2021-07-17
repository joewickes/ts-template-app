// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import dotenv from 'dotenv';
// import dotenvExpand from 'dotenv-expand';

// Style(s)
import './index.css';

// Context(s)
import { ContextProvider } from './contexts/Context';

// Component(s)
import App from './components/App';

// Env
// const myEnv = dotenv.config();
// dotenvExpand(myEnv);

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);