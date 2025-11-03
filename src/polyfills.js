// src/polyfills.js
import { Buffer } from 'buffer';

// Basic globals some libs expect
window.Buffer = Buffer;
window.global = window;
window.globalThis = window;

// Browser already provides these — just ensure they're assigned
if (typeof window.Request === 'undefined' && typeof Request !== 'undefined') {
  window.Request = Request;
}

if (typeof window.Headers === 'undefined' && typeof Headers !== 'undefined') {
  window.Headers = Headers;
}

if (typeof window.Response === 'undefined' && typeof Response !== 'undefined') {
  window.Response = Response;
}
