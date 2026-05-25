const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = walkSync('./src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix the invalid /50/50 typo and remove /50 opacity for solid dark mode colors
  content = content.replace(/dark:bg-slate-800\/50\/50/g, 'dark:bg-slate-800');
  content = content.replace(/dark:bg-slate-800\/50/g, 'dark:bg-slate-800');

  // Let's also make sure we don't have bg-gray-50 being ugly
  // dark:bg-slate-800 for bg-gray-50 is good.
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`\nSuccessfully fixed ${changedCount} component files.`);
