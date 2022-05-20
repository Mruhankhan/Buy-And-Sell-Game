let hondaDivSell = document.getElementById("honda-div-sell")
let hondaDivBuy = document.getElementById("honda-div-buy")
let yourMoneyChanging = document.getElementById("your-money-changing")
let money = 10000

hondaDivSell.addEventListener("click", () => {
  money = money + 20000
  yourMoneyChanging.innerHTML = money
})

hondaDivBuy.addEventListener("click", () => {
 money = money - 20000
 yourMoneyChanging.innerHTML = money
})
