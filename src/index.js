// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Service Worker
import * as serviceWorker from './serviceWorker';

// Main component
import Resume from './resume';

// Removes body margin
import './styles.css';

ReactDOM.render(
	<React.StrictMode>
		<Resume />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();