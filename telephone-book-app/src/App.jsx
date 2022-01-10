/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import PhoneNumberList from './components/PhoneNumberList';
import { mainBackground, blackOut, yellowShadow } from './common/styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
    margin: 25px;
    width: 600px;
    height: auto;
    display: flex;
    justify-content: start;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border: 1px solid ${blackOut};
    text-shadow: 2px 2px ${yellowShadow};
  `,
};

function App() {
  return (
    <div
      className="telephone-app"
      css={styles.main}
    >
      <h1>Hello, Hello baby...</h1>
      <PhoneNumberList
      />
    </div>
  );
}

export default App;
