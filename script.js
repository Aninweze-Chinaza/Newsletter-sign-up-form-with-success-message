const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('email-error');
const mainCard = document.querySelector('.card');
const successCard = document.querySelector('.success-message');
const userEmailSpan = document.getElementById('user-email');
const dismissButton = document.querySelector('.dismiss-button');

newsletterForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    //Validation check
    if(emailValue === ""){
        showError("Email address cannot be empty");
    }
    else if(!emailPattern.test(emailValue)){
        showError("Valid email required");
    }
    else{
        showSuccess(emailValue);
    }
});

function showError(message){
    errorMessage.textContent = message;
    emailInput.classList.add('input-error')
};

function showSuccess(email){
    userEmailSpan.textContent = email;
    mainCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    successCard.classList.add('show')
}

dismissButton.addEventListener('click', () =>{
    mainCard.classList.remove('hidden');
    successCard.classList.add('hidden');
    successCard.classList.remove('show');

    emailInput.value = '';
    emailInput.classList.remove('input-error');
    errorMessage.textContent = '';
});

emailInput.addEventListener('input', () => {
    emailInput.classList.remove('input-error');
    errorMessage.textContent = '';
})
