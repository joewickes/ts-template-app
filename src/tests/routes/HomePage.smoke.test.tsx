// From npm
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Context(s)
import { ContextProvider } from '../../contexts/Context';

// Component(s)
import HomePage from '../../routes/HomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ContextProvider>
        <HomePage />
      </ContextProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});