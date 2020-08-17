import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Show from './Show';
import Increase from "./Increase";
import Decrease from "./Decrease";
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Show />
      <div className="buttons">
        <Increase />
        <Decrease />
      </div>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
