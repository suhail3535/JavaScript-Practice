
let data = [
    {name:"suhail khan",mobile:998888888},
    {name:"sohan",mobile:998888888},
    {name:"aman",mobile:998888888}
]


let data2 = [
    { name: "suhail khan", mobile: 998888888 },
    { name: "sohan", mobile: 998888888 },
    { name: "aman", mobile: 998888888 }
]
function value (details,details2) {
    details.map((ele) => {
        console.log(ele);
    })
    details2.map((ele) => {
        console.log(ele);
    })
}
value(data,data2)
// value(data2)