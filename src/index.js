import './index.css';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from 'redux/store/store';
import Loader from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
		<PersistGate loading={Loader} persistor={persistor}>
		<App />
		</PersistGate>

    </Provider>
  </BrowserRouter>
);
