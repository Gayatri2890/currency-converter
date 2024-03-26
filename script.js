async function convert() {
    // Get user input: amount and selected currencies
    const amount = document.getElementById('amountInput').value;
    const fromCurrency = document.getElementById('fromCurrencySelect').value;
    const toCurrency = document.getElementById('toCurrencySelect').value;

    // Fetch exchange rates from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    // Calculate converted amount
    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    // Display result to user
    document.getElementById('resultDisplay').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
