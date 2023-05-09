// h1{ color: red};
// .parrafito {...};

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'pene loco';
h1.innerText = 'pene <br> poet';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

h1.classList.add ('rojo');
h1.classList.remove('z');
//h1.classList.toggle('quitapon');
//h1.classList.contains('boolean');

input.value = "123"

console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src','http://s3.amazonaws.com/gt7sp-prod/livery/41/68/69/4693318237056696841_23.jpg');
console.log(img);

pid.append(img);

