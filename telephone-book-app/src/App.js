/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; import React from 'react';
import './App.css';
import PhoneNumberList from './components/PhoneNumberList';
import { mainBackground } from './styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
  `,
};

function App() {
  return (
    <div
      className="App"
      css={styles.main}
    >
      <h1>Hello, Hello baby...</h1>
      <PhoneNumberList />
    </div>
  );
}

export default App;
