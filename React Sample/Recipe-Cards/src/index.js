import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipieApp from './RecipieApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipieApp />, document.getElementById('root'));
registerServiceWorker();
