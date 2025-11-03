const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules/motion-utils/dist/es/globalThis-config.mjs');

const patchContent = `
export const MotionGlobalConfig = {};
export default MotionGlobalConfig;
`;

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, patchContent, 'utf8');
  console.log('✅ Patched motion-utils with globalThis-config.mjs');
} else {
  const current = fs.readFileSync(filePath, 'utf8');
  if (!current.includes('MotionGlobalConfig')) {
    fs.writeFileSync(filePath, patchContent, 'utf8');
    console.log('✅ Repatched motion-utils with globalThis-config.mjs');
  } else {
    console.log('ℹ️ globalThis-config.mjs already patched');
  }
}
