// console.log('login fun')
document.getElementById('login-btn')
.addEventListener('click' , function(){
    // console.log('login button clicked');
    //step 1: get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //step 2: get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    //step 3: match pin & mobile number
    if(contactNumber == '01234567890' && pin == '1234'){

        //step 3-1: true:::>> alert> homepage
        alert('login Successful')
    }else{
        //step 3-2: false:::>> alert> return
        alert('login Failed');
        return;
    }
})