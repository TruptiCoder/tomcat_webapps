// async function num1() {
//     return setTimeout(() => {
//         return 10;
//     }, 2000)
// }

async function num1() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return 10;
}


async function myFunction(a) {
    return await num1() + a
}

p = myFunction(+prompt("Enter a number"));

p.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});