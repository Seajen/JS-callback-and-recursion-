

// function someFunc(n, cb) { //пример с колбеком
//     const res = n*10;
//     console.log(res);
//     cb();
// }
//
// someFunc(9, (someNumber)=>{
//     console.log(someNumber, "In cb");
// });
//
// someFunc(3242452, (num)=>{
//     console.log(num, 'In cb')
// });


// let arr = [2, 32, 1, 0, 'TEST', false];// перебор масива рекурсивно
//
// function recursator2000(arrToRecurse, i) {
//     if (i >= arrToRecurse.length) return;
//
//     console.log(arrToRecurse[i]);
//
//     recursator2000( arrToRecurse, ++i)
//
// }
//
// recursator2000(arr, 0);






function clearHouse(isClear) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (isClear) {
                resolve(2000);
            }else {
                reject('Clear House first')
            }
        },2000)
    })
}

function buyClothes(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 1000) {
                reject('I have not enough money')
            } else {
                console.log(`Buy jeans for ${money / 4}`);
                console.log(`Buy sweater for ${money / 2}`);
                resolve('GOOD !')
            }
        }, 500)
    })
}

clearHouse(true)
    .then(reward => {
        console.log(`CONGRATULATIONS`);

        return buyClothes(reward)
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log('ERROR: ' + reason);
    })
