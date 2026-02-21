
document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1- get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    // console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert('Invalid Number');
        return;
    }

    // 2- get the amount , validate , convert to number
    const cashoutAmount = getValueFromInput('cashout-amount')
    // console.log(cashoutAmount);

    // 3- get the Current balance , validate , convert to number

    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText ;   //! old upDate
    // console.log(balance)

    const currentBalance = getBalance() // new update
     // 4- Calculate new Balance
    //  const newBalance = Number(balance) - Number(cashoutAmount);
     const newBalance = currentBalance - Number(cashoutAmount); // new update
     console.log(newBalance);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    // 5- get the pin and verify
    const pin = getValueFromInput('cashout-pin');
    if(pin === '1234'){
        // 5-1 true :: show an alert > set Balance
        alert('CashOut Successful');
        // balanceElement.innerText = newBalance; // old version
        // document.getElementById('balance').innerText = newBalance;  //! new version  //! ata abr old version hoyche.

        setBalance(newBalance); // new version

    }else{
        // 5-2 false :: show an error alert > return
        alert('Invalid Pin');
        return;
    }
});



// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
//     // 1- get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//             alert('Invalid Agent Number');
//         return;
//     }
//     // 2- get the amount , validate , convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)
//     // 3- get the Current balance , validate , convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText ;
//     console.log(balance)
//     // 4- Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     // console.log('New Balance', newBalance)
    
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     // console.log('New Balance', newBalance)
//     // 5- get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         // 5-1 true :: show an alert > set Balance
//         alert('CashOut Successful');
//         console.log('New Balance', newBalance)
//         balanceElement.innerText = newBalance;
//     }else{
//         // 5-2 false :: show an error alert > return
//         alert('Invalid Pin')
//     }
// })

// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
//     // 1- get the agent number & validate
//     const cashOutAgentNumberInput = document.getElementById('cashout-number');
//     const cashOutAgentNumber = cashOutAgentNumberInput.value;
//     console.log(cashOutAgentNumber);
//     if(cashOutAgentNumber.length != 11){
//         alert('Invalid Agent Number Please Correct Number');
//         return;
//     }

//      // 2- get the amount , validate , convert to number
//      const cashOutAmountNumberInput = document.getElementById('cashout-amount');
//     const cashOutAmountNumber = cashOutAmountNumberInput.value;
//     console.log(cashOutAmountNumber);

//     // 3- get the Current balance , validate , convert to number
//     const maniCurrentBalance = document.getElementById('balance');
//     const currentBalance = maniCurrentBalance.innerText;
//     console.log(currentBalance)

//     // 4- Calculate new Balance
//     const newBalance = Number(currentBalance) - Number(cashOutAmountNumber);
//     // console.log('new balance', newBalance)
//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     console.log('new balance', newBalance)

//      // 5- get the pin and verify
//      const cashOutPinInput = document.getElementById('cashout-pin');
//      const cashOutPin = cashOutPinInput.value;
//      console.log(cashOutPin)
//      if(cashOutPin == '1234'){
//         // 5-1 true :: show an alert > set Balance
//         alert('Cash Out Successful');
//         maniCurrentBalance.innerText = newBalance;
//         return;
//      }
//      else{
//         // 5-2 false :: show an error alert > return
//         alert('Please Enter Your Correct Pin')
//      }
// })