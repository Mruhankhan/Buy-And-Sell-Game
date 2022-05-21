let hondaSell = document.getElementById("honda-div-sell")
let hondaBuy = document.getElementById("honda-div-buy")
let toyataSell = document.getElementById("toyata-div-sell")
let toyataBuy = document.getElementById("toyata-div-buy")
let newYorkTrainSell = document.getElementById("newyork-train-div-sell")
let newYorkTrainBuy = document.getElementById("newyork-train-div-buy")
let cruiseShipSell = document.getElementById("cruise-ship-div-sell")
let cruiseShipBuy = document.getElementById("cruise-ship-div-buy")
let MansionSell = document.getElementById("mansion-div-sell")
let MansionBuy = document.getElementById("mansion-div-buy")
let parkSell = document.getElementById("park-div-sell")
let parkBuy = document.getElementById("park-div-buy")
let appleSell = document.getElementById("apple-company-div-sell")
let appleBuy = document.getElementById("apple-company-div-buy")
let privateSell = document.getElementById("private-jet-div-sell")
let privateBuy = document.getElementById("private-jet-div-buy")
let yourMoneyChanging = document.getElementById("your-money-changing")

let money = 10000

hondaSell.addEventListener("click", () => {
  addMoney(20000)
})

hondaBuy.addEventListener("click", () => {
  buyStuff(20000)
})

toyataSell.addEventListener("click", () => {
  addMoney(40000)
})

toyataBuy.addEventListener("click", () => {
  buyStuff(40000)
})

newYorkTrainSell.addEventListener("click", () => {
  addMoney(400000)
})

newYorkTrainBuy.addEventListener("click", () => {
  buyStuff(400000)
})

cruiseShipSell.addEventListener("click", () => {
  addMoney(2000000)
})

cruiseShipBuy.addEventListener("click", () => {
  buyStuff(2000000)
})

MansionSell.addEventListener("click", () => {
  addMoney(20000000)
})

MansionBuy.addEventListener("click", () => {
  buyStuff(20000000)
})

parkSell.addEventListener("click", () => {
  addMoney(75000)
})

parkBuy.addEventListener("click", () => {
  buyStuff(75000)
})
appleSell.addEventListener("click", () => {
  addMoney(3000000000000)
})

appleBuy.addEventListener("click", () => {
  buyStuff(3000000000000)
})

privateSell.addEventListener("click", () => {
  addMoney(1000000)
})

privateBuy.addEventListener("click", () => {
  buyStuff(1000000)
})

function addMoney(amount) {
  money = money + amount
  yourMoneyChanging.innerHTML = money
}

function buyStuff(amount) {
  money = money - amount
  yourMoneyChanging.innerHTML = money
}
