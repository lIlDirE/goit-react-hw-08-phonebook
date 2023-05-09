import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from 'redux/store/store';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
	<React.StrictMode>
    <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		<App />
		</PersistGate>
    </Provider>
	</React.StrictMode>
  </BrowserRouter>
);
