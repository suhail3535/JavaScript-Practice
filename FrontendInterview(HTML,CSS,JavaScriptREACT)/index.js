
// --------callback function------------
// function outerfunction (name, lastname, callback) {
//     let x = 10;
//     let details = `my is ${name} and lastname is ${lastname}.`
//     callback(x)
// }

// outerfunction("suhail", "khan" ,function (x) {
// console.log(x+10);
// })
// console.log()

// function hof (x, opp) {
//     return opp(x)
// }
// function multi (x) {
// return x*2
// }
// function sum (x) {
//     return x+2
// }
// console.log(hof(4,multi))
// console.log(hof(4,sum))
function userData () {
    return new Promise((resolve, rejected) => {

        setTimeout(() => {
            let number = Math.floor((Math.random() * 10))
        // console.log(number);
{number<1?resolve(number):rejected(new Error("higer number"))}
        }, 1000)

    })
}
userData().then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
})