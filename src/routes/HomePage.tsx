// From npm
import { withRouter } from 'react-router-dom';

// Style(s)
import './HomePageRoute.css';

// Context(s)
import Context from './../contexts/Context';

// Component(s)

const HomePageRoute = () => {
  return (
    <Context.Consumer>
      {value => {
        return (
          <>
          </>
        );
      }}
    </Context.Consumer>
  );
}

export default withRouter(HomePageRoute);