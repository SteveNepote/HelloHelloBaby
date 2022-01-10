import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { css } from '@emotion/react';
import { mainBackground } from './common/styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
    padding: 10px;
    margin: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `,
};

ReactDOM.render(
  <React.StrictMode
    css={styles.main}
  >
    <App
      css={styles.main}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


