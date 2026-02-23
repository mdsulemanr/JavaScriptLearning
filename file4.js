txt = '  This is a table  ';
console.log(txt);
txt = txt.trim();
console.log(txt);
console.log(txt.includes('table'));
console.log(txt.includes('chair'));
console.log(`This txt starts with 'This': ${txt.startsWith('This')}`);
console.log(txt.endsWith('table'));
console.log(txt.endsWith('chair')); 


