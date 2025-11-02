const fs = require('fs');
const path = require('path');

const paths = [
  'node_modules/@trezor/blockchain-link/node_modules/@trezor/env-utils/lib/envUtils.js',
  'node_modules/@trezor/blockchain-link-utils/node_modules/@trezor/env-utils/lib/envUtils.js',
  'node_modules/@trezor/connect-common/node_modules/@trezor/env-utils/lib/envUtils.js',
  'node_modules/@trezor/connect/node_modules/@trezor/env-utils/lib/envUtils.js',
  'node_modules/@trezor/analytics/node_modules/@trezor/env-utils/lib/envUtils.js',
];

paths.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/const isWeb = \(\) => \{\}\.SUITE_TYPE === 'web';/, 'const isWeb = () => false;');
    content = content.replace(/const isDesktop = \(\) => \{\}\.SUITE_TYPE === 'desktop';/, 'const isDesktop = () => false;');
    fs.writeFileSync(filePath, content);
    console.log(`✅ Patched: ${filePath}`);
  }
});
