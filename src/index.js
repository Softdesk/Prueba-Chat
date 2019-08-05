import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/Header';
import Navigation from './componentes/Navigation';
import Chat from './componentes/Chat';
import Message from './componentes/Message';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Navigation/>, document.getElementById('navigation'));
ReactDOM.render(<Chat/>, document.getElementById('chat-user'));
ReactDOM.render(<Message/>, document.getElementById('message'));
serviceWorker.unregister();
