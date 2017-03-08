(function jobAppModule() {
  window.applyApp = window.applyApp || {};

  //tests
  // console.log("hello!");
  // document.querySelector('.btn-warning').addEventListener('click', function printHello(evt) {
  //   console.log("JavaScript is challenging!");
  //   console.log(evt);
  // } );



  document.querySelector('#full-name').addEventListener('blur', function fullName(evt) {
    //tests
    // console.log(evt);
    // console.log(evt.target.value);

    if (evt.target.value.length) {
      evt.target.parentNode.parentNode.classList.remove('has-error');
    } else {
      evt.target.parentNode.parentNode.classList.add('has-error');
    }

  });

  document.querySelector('#exp').addEventListener('change', function updateExp(evt) {
    //tests
    // console.log(evt.target.value);
    //console.log(evt.target.parentNode.childNodes[3]);

    evt.target.parentNode.childNodes[3].innerText = evt.target.value + ' years';
  });

  let count = 0;

  Array.from(document.querySelectorAll('[name="languages"]'))
    .forEach(function addCheckClick(item) {
      item.addEventListener('change', function updateLangs(evt) {
        //test
        // console.log(evt.target.checked);
        if (evt.target.checked) {
          count++;
        } else {
          count--;
        }
        // console.log(evt.target.parentNode.parentNode.childNodes);
        evt.target.parentNode.parentNode.childNodes[7].innerText = count + ' languages';
      });
    });

  document.querySelector('form').addEventListener('submit', function applyFn(evt) {
    evt.preventDefault();
    console.log('ayyyyye', evt);
    window.applyApp.submitApp({
      fullName : document.querySelector('#full-name').value,
      experience: document.querySelector('#exp').value,
      languages: document.querySelector('[name="languages"]').value,
      prevWork: document.querySelector('[name="work-url"]').value
    });
  });

})();
