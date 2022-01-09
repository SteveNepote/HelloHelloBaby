/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PhoneNumberList from './components/PhoneNumberList';
import { mainBackground } from './common/styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
    margin: -8px !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `,
};

function App() {
  return (
    <div
      className="App"
      css={styles.main}
    >
      <h1>Hello, Hello baby...</h1>
      <PhoneNumberList
      // css={styles.main}
      />
    </div>
  );
}

export default App;
