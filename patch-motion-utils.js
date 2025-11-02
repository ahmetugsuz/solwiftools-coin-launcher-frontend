const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules/motion-utils/dist/es/window-config.mjs');
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, 'export default {};');
  console.log('✅ Patched motion-utils');
}
