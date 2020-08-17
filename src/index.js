import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Show from './Show';
import Second from "./Increase"
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Show />
      <Second />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
