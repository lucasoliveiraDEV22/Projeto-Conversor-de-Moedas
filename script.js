const button = document.getElementById("converter-Button")
const select = document.getElementById ("select-currency")
//console.log (button)
/*const dolar = 5.2
const euro = 5.5
const bitcoin = 87468.5*/
const convertValues = async() => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
    const data = await fetch ("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log (data)
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'

    }).format(inputReais)
    if (select.value === 'US$ Dólar Americano') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD'
    }).format(inputReais/dolar)
}

if (select.value === '€ Euro') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' 
    }).format(inputReais/euro)
}
if (select.value === 'Bitcoin')
    currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP', { 
        style: 'currency', 
        currency: 'BTC' 
    }).format(inputReais/bitcoin)
    //realValueText.innerHTML = inputReais
    //currencyValueText.innerHTML = inputReais / dolar
    // console.log (inputReais)
    // console.log(inputReais/dolar)
    //console.log ('cliquei no botão')
}
const changeCurrency = () =>{
    const currencyName = document.getElementById("text-currency")
    const currencyImg = document.getElementById ("flag")
    if (select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/assets/Estados Unidos.png"
    }
    if (select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/assets/Euro.png"
    }

    if (select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/assets/Bitcoin.png"
    }

convertValues ()
    //console.log (select.value)
    // console.log ("fui chamada")
}
button.addEventListener('click', convertValues)
select.addEventListener ('change', changeCurrency)
