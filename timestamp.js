'use strict';

function timestamp(str) {
  const format = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date = isNaN(str) ? new Date(str) : new Date(+str * 1000);

  return (date.getTime() > 0)
    ? {
      unix: date.getTime() / 1000,
      natural: date.toLocaleDateString('en-GB', format),
    }
    : {
      unix: null,
      natural: null,
    };
}

module.exports = timestamp;
