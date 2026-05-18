#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, 'version.json');
const now = new Date().toISOString();

const versionData = {
  deployed: now
};

fs.writeFileSync(versionFile, JSON.stringify(versionData, null, 2) + '\n');
console.log(`✓ Version updated to: ${now}`);
