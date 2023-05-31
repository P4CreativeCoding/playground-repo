const math = require('./math.js');

if (math.add(2, 3) === 5) {
  console.log('All good')
  process.exit(0);
} else {
  console.log('Broken!')
  process.exit(1);
}

