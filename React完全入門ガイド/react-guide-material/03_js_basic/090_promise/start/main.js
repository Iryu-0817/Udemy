// 非同期処理

let a = 0;

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 30);
} ).then((b) => {
    console.log(b);
}).catch((c) => {
    console.log('Catch is complemented', c);
})