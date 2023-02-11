import { createComponent } from '@lit-labs/react';
import React from 'react';
import HelloWorld from '@/components/HelloWorld';

if (!customElements.get('lt-hello-world')) {
  customElements.define('lt-hello-world', HelloWorld);
}

export default createComponent({
  react: React,
  tagName: 'lt-hello-world',
  elementClass: HelloWorld,
});
