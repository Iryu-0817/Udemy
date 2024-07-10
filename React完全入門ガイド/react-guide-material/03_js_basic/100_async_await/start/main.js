// 非同期処理（Promise）

let a = 0;
    init();
    // asyncとawaitはセットで使う
   async function init() {
    try {
       const result = await  new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
            console.log(result); //resolveされた場合
     } catch(e) {
            console.log('catchが実行', e) //rejectされた場合
     }
    }