'use strict';

(function timestamp() {
  const input = document.getElementById('date');
  const output = document.getElementById('output');

  input.addEventListener('keyup', () => {
    fetch(`/${encodeURIComponent(input.value)}`)
    .then(res => res.json())
    .then((res) => { output.value = JSON.stringify(res, null, 2); })
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
  });
}());
