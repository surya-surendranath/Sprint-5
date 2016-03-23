//Looping Triangle

var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}

/*FizzBuzz*/
for (i=1; i<=100; i++) {
    if ( !(i%5) && !(i%3) ) {
        console.log('FizzBuzz');
    } else if ( !(i%5) && (i%3)) {
        console.log('Buzz');
    } else if ( !(i%3) ) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

//Chess Board

var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i%2) {
        if (y%2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y%2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}