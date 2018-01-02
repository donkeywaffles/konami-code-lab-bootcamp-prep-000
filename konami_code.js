const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  const body = document.querySelector('body');
  var isCode = true;
  while (isCode) {
    body.addEventListener('keydown', function(e) {
    const key = e.detail || e.which;
    if (key === code[index]) {
      console.log(key);
      index++;
      if (index === code.length) {
        alert('Konami CODE!');
        index = 0;
      }
    } else {
      index = 0;
    }  
  }

  });
}

