/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import PhoneNumberList from './components/PhoneNumberList';
import { mainBackground } from './common/styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
    margin: 25px;
    width: 580px;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    text-align: center;
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
