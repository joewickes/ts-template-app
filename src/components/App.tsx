// From npm
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// Style(s)

// Component(s)

const App : FC<{/* Props */}> = ({/* Destructured props */}) => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' /> {/*component={ () => <Component /> }*/} 
      </Switch>
    </div>
  );
}

export default App;