// From npm
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Context(s)
import { ContextProvider } from '../../contexts/Context';

// Component(s)
import App from '../../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});