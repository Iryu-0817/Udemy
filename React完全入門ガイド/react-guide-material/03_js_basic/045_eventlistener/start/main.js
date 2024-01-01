const h1Element = document.querySelector('h1');

console.dir(h1Element);
console.log(h1Element.textContent);

h1Element.textContent = 'After edited tittle';

const btnEl = document.querySelector('button');

btnEl.addEventListener('click', (e) => {
    console.log('hello')
    h1Element.textContent = 'Hello World!!';
})