'use strict';

var count = 0;

for (let j = 0; j < process.argv.length; j++) {
  for (j = 2; j <= process.argv.length; j++) {
    if (isNaN(process.argv[j]) || process.argv[j] < 0) {

    } else setTimeout(() => {
        process.stdout.write('\x07')
        }, count = process.argv[j] * 1000);
  }
};