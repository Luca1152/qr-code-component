import { css } from 'lit';

const styles = css`
  :host {
    border-radius: 16px;
    overflow: hidden;
  }

  .QrCode-Root {
    width: 320px;
    height: 500px;
    padding: 16px;
    background-color: white;
  }

  .QrCode-Image {
    display: block;
    border-radius: 8px;
    width: 100%;
    height: auto;
  }

  .QrCode-Title {
    margin-top: 24px;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: #272f47;
  }

  .QrCode-Subtitle {
    margin-top: 16px;
    font-family: sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
    text-align: center;
    color: #797c83;
  }
`;

export default styles;
