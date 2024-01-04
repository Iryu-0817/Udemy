// 非同期処理（Promise）
let a = 0;

init();
// awaitを使う場合はasyncを関数名の先頭に持ってくる必要がある
async function init() {

    // 何らかのエラーが起きた際の処理
    try {
       const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
            console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }   
}




