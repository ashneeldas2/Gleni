import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import AntD
import 'antd/dist/antd.css';

// Import index CSS
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
