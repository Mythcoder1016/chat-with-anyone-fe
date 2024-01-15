import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatPage from './template/ChatPage';
import '@arco-design/mobile-react/esm/style';
import { basicCurrentUserInfo } from './util/init'

import setRootPixel from '@arco-design/mobile-react/tools/flexible';

window.context = basicCurrentUserInfo
setRootPixel();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChatPage />
  </React.StrictMode>
);
