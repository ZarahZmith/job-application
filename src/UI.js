(function jobAppModule() {
  //tests
  console.log("hello!");
  document.querySelector('.btn-warning').addEventListener('click', function printHello(event) {
    console.log("JavaScript is challenging!");
    console.log(event);
  } );

  document.querySelector('#full-name').addEventListener('blur', function fullName(evt) {
    //test
    console.log(evt);
    
    console.log(evt.target.value);
    console.log(evt.target.value.length);
  });
})();
