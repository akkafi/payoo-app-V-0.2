document.getElementById('add-money-btn').addEventListener('click', function(){
    // console.log('add money btn clicked');
    // 1- Bank account get
    const bankAccount = getValueFromInput('add-money-bank');
    // console.log(bankAccount);
    if(bankAccount == 'Select a back'){
        alert('Please select a bank');
        return;
    }

    //2- get bank account number
    const accno = getValueFromInput('add-money-number');
    if(accno.length != 11){
        alert('Invalid Account Number')
    }

    // 3- get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    // 4- get pin
    const pin = getValueFromInput('add-money-pin');
    if(pin == '1234'){
        alert(`Add Money Success form 
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance)
    }else{
        alert('Invalid Pin');
        return;
}
})