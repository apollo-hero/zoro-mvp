import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
import 'assets/styles/index.scss';

import initializeLibraries from './initializeLibraries';

initializeLibraries();

ReactDOM.render(<App />, document.getElementById('root'));
