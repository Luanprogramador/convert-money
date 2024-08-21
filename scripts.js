const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


const convertValues = async ()=> {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

const data =await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response=> Response.json())
  
  const dolar =data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high
  const libraToday = 0.15
  console.log(data)



  if (currencySelect.value == "Dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolar)
  }
  if (currencySelect.value == "Euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euro)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY"
    }).format(inputCurrencyValue / bitcoin)
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)

  }
  function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "Dolar") {
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "./assets/dolar.png"
    }


    if (currencySelect.value == "Euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"

    }
    if (currencySelect.value == "bitcoin") {
      currencyName.innerHTML = "bitcoin"
      currencyImage.src = "./assets/bitcoin 1.png"

    }

    if (currencySelect.value == "libra") {
      currencyName.innerHTML = "libra"
      currencyImage.src = "./assets/libra 1.png"

    }

    convertValues()
  }
  currencySelect.addEventListener("change", changeCurrency)
  convertButton.addEventListener("click", convertValues)
