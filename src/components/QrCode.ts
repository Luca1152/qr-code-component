import { html, LitElement } from 'lit';
import styles from './QrCode.styles';

class QrCode extends LitElement {
  static override styles = [styles];

  override render() {
    return html` <div class="QrCode-Root">
      <img class="QrCode-Image" src="/qr-code.png" alt="QR Code" />
      <p class="QrCode-Title">Improve your front-end skills by building projects</p>
      <p class="QrCode-Subtitle">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>`;
  }
}

export default QrCode;
