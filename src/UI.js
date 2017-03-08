(function jobAppModule() {
  //tests
  console.log("hello!");
  document.querySelector('.btn-warning').addEventListener('click', function printHello(evt) {
    console.log("JavaScript is challenging!");
    console.log(evt);
  } );

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
    console.log(evt.target.value);
    console.log(evt.target.parentNode.childNodes[3]);
    evt.target.parentNode.childNodes[3].innerText = evt.target.value + ' years';
  });

})();
