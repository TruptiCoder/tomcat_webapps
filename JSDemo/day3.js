let myPromise = new Promise((resolve, reject) => {
    let key = 10;
    if(key == 10) {
        let y = 1 / 0;
        console.log(y)
        console.log(parseInt(1/"a"))
        // throw new Error("mar gaya")
        resolve("Promise was successfull");
    }
    else reject("Promise was rejected");
})

myPromise
.then((msg) => {
    console.log(msg)
})
.catch((msg) => {
    console.log("Error in promise is: ", msg.message)
})

console.log("end")