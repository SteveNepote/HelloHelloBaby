/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PhoneNumberList from './components/PhoneNumberList';
import { mainBackground } from './common/styles/colors';

const styles = {
  main: css`
    background: ${mainBackground};
    width: 100%;
    height: 100%;
    display: flex;
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
      <PhoneNumberList />
    </div>
  );
}

export default App;
