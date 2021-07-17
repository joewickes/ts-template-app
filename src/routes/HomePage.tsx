// From npm
import { withRouter } from 'react-router-dom';

// Style(s)

// Context(s)
import Context from './../contexts/Context';

// Component(s)

const HomePageRoute = () => {
  return (
    <Context.Consumer>
      {value => {
        return (
          <div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default withRouter(HomePageRoute);