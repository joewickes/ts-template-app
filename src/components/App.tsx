// From npm
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// Style(s)
import './../styles/App.css';

// Route(s)
import HomePage from '../routes/HomePage';

// Component(s)

const App : FC<{/* Props */}> = ({/* Destructured props */}) => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' /> component={() => <HomePage /> }
      </Switch>
    </div>
  );
}

export default App;