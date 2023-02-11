import { createComponent } from '@lit-labs/react';
import React from 'react';
import QrCode from '@/components/QrCode';

if (!customElements.get('lt-qr-code')) {
  customElements.define('lt-qr-code', QrCode);
}

export default createComponent({
  react: React,
  tagName: 'lt-qr-code',
  elementClass: QrCode,
});
