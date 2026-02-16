console.log("Start")

const reqTime = {
    "Idli": 3000,
    "Samber": 1000,
    "Wada": 2000
}

const hotel = (callback, orderItem) => {
    console.log(`${orderItem} is getting prepared!`)
    setTimeout(() => {
        callback(`Your Item is ready to server ${orderItem}`);
    }, reqTime[orderItem]);
}

let order = (msg) => {
    console.log(msg);
}

hotel(order, "Idli")
hotel(order, "Samber")
hotel(order, "Wada")

console.log("End")