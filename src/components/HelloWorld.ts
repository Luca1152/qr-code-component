import { html, LitElement } from 'lit';

class HelloWorld extends LitElement {
  override render() {
    return html` <p>Hello, world!</p> `;
  }
}

export default HelloWorld;
