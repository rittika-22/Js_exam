const addPhoneButton = document.querySelector('.add-btn-phone');
const addCaseButton = document.querySelector('.add-btn-case');
const subPhoneButton = document.querySelector('.sub-btn-phone');
const subCaseButton = document.querySelector('.sub-btn-case');
const resetBtnIphone = document.querySelector('.reset-btn-phone');
const resetBtnCase = document.querySelector('.reset-btn-case');

const iphoneAmount = document.getElementById('iphone');
const caseAmount = document.getElementById('case');

const pricePhoneElement = document.getElementById('price-phone');
const priceCaseElement = document.getElementById('price-case');

// Initial price value
const phoneprice = 1219; 
const caseprice = 59;
let quantityphone = 1;
let quantitycase = 1;

// Function to update price based on quantity
function updatePhonePrice() {
    const newPhonePrice = phoneprice * quantityphone;
    pricePhoneElement.textContent = `$${newPhonePrice}`;
}
function updateCasePrice() {
    const newCasePrice = caseprice * quantitycase;
    priceCaseElement.textContent = `$${newCasePrice}`;
}


/// Function to update price based on quantity
function updatePrice(priceElement, quantity, pricePerItem) {
    const newPrice = pricePerItem * quantity;
    priceElement.textContent = `$${newPrice}`;
}

// Event listeners for adding items
addPhoneButton.addEventListener('click', function() {
    quantityphone++;
    iphoneAmount.value = quantityphone;
    updatePrice(pricePhoneElement, quantityphone, phoneprice);
});

addCaseButton.addEventListener('click', function() {
    quantitycase++;
    caseAmount.value = quantitycase;
    updatePrice(priceCaseElement, quantitycase, caseprice);
});

// Event listeners for subtracting items
subPhoneButton.addEventListener('click', function() {
    if (quantityphone > 1) {
        quantityphone--;
        iphoneAmount.value = quantityphone;
        updatePrice(pricePhoneElement, quantityphone, phoneprice);
    }
});

subCaseButton.addEventListener('click', function() {
    if (quantitycase > 1) {
        quantitycase--;
        caseAmount.value = quantitycase;
        updatePrice(priceCaseElement, quantitycase, caseprice);
    }
});

// Event listeners for reset buttons
resetBtnIphone.addEventListener('click', function() {
    quantityphone = 1; // Reset quantity to 1
    iphoneAmount.value = quantityphone;
    updatePrice(pricePhoneElement, quantityphone, phoneprice);
});

resetBtnCase.addEventListener('click', function() {
    quantitycase = 1; // Reset quantity to 1
    caseAmount.value = quantitycase;
    updatePrice(priceCaseElement, quantitycase, caseprice);
});

// Event listeners for Check-out button
document.querySelector('.check-out').addEventListener('click', function() {
    // Calculate subtotal
    const subtotal = (phoneprice * quantityphone) + (caseprice * quantitycase);
    
    // Calculate tax (15% of subtotal)
    const tax = 0.15 * subtotal;
    
    // Calculate total (subtotal + tax)
    const total = subtotal + tax;
    
    // Update the HTML elements with the calculated values
    document.querySelector('.status h5:nth-of-type(1)').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.status h5:nth-of-type(2)').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('.status h5:nth-of-type(3)').textContent = `$${total.toFixed(3)}`;
});