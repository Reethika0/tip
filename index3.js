function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById('output').textContent = 'Please enter valid numbers.';
        return;
    }

    var tipAmount = (subtotal * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (subtotal + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('output').textContent = `Tip: $${tipAmount} | Total Amount: $${totalAmount}`;
}