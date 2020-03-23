import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import index CSS to override Bootstrap
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
