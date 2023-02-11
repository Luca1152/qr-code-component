import {createComponent} from "@lit-labs/react";
import {html, LitElement} from "lit";
import React from "react";

class HelloWorld extends LitElement {
    render() {
        return html`
            <p>Hello, world!</p>
        `;
    }
}

if (!customElements.get("lt-hello-world")) {
    customElements.define("lt-hello-world", HelloWorld)
}

export default createComponent({
    react: React,
    tagName: 'lt-hello-world',
    elementClass: HelloWorld,
});