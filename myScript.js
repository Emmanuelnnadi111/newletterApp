const subscribeNew = document.getElementById('subscribe').addEventListener('click', toggle);
const newsContaier = document.querySelector('.newletter-container');
const dismiss = document.getElementById('dismiss').addEventListener('click', dismissPage);
const addEmail = document.getElementById('addEmailAddress');
const form = document.querySelector('.form');
const message = document.getElementById('message');
const succesPage = document.querySelector('.success-container');

addEmail.addEventListener('keyup', validateEmail)

function validateEmail() {
    const email = document.getElementById('addEmailAddress');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2, 5})$/;

    if(!re.test(email.value)) {
        console.log(email.value)
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = 'green';
    
    }
}



function toggle() {
     
    if (succesPage.style.display === 'none') {
        if(addEmail.value === '') {

          setMessage('Please Provide an Email Address');
                setTimeout(() => {
            setMessage().remove();
         }, 3000);
             
             
        } else {
            document.querySelector('.newletter-container').style.display = 'none';
             succesPage.style.display = 'block';
        }
        
       console.log(addEmail);
    } else {
        succesPage.style.display = 'none';
       
    }
}


function setMessage(msg) {
    message.textContent = msg;
    message.style.color = 'red';
    
}


function dismissPage() {
    if(succesPage.style.display === 'block') {
        succesPage.style.display = 'none'; 
        document.querySelector('.newletter-container').style.display = 'block';
    } 
}



