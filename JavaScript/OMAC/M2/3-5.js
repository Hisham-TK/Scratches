/*
 * programming quiz - checking your balance (3-5)
 * Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.

Flowchart for checking your balance at the ATM
Flowchart for checking your balance at the ATM (Click the image to enlarge the flowchart).

Use the following variables in your solution:

balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance
Hint: The variable balance could be a value less than, greater than, or equal to 0. The variables isActive and checkBalance are booleans that can be set to true or false.

TIP: To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.

TIP: Make sure to test your code with different values. For example,

If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.
 */

// change the values of `balance`, `checkbalance`, and `isactive` to test your code
var balance = 0;
var checkBalance = 1;
var isActive = 1;

// your code goes here
for (let index = 0; index < 100; index++) {

    console.log(balance, checkBalance, isActive);
    // if (checkBalance) {
    //     if (balance > 0 && isActive) {
    //         console.log(`Your balance is $${balance.toFixed(2)}.`);
    //     } else {
    //         if (isActive === false) {
    //             console.log('Your account is no longer active.');
    //         } else {
    //             if (balance === 0) {
    //                 console.log('Your account is empty.');
    //             } else {
    //                 console.log('Your balance is negative. Please contact bank.');
    //             }
    //         }
    //     }
    // } else {
    //     console.log('Thank you. Have a nice day!');
    // }
    if (checkBalance) {
        console.log(balance > 0 && isActive ? `Your balance is $${balance.toFixed(2)}.` : isActive ? (balance ? 'Your balance is negative. Please contact bank.' : 'Your account is empty.') : 'Your account is no longer active.');
    } else {
        console.log('Thank you. Have a nice day!');
    }
    console.log('');

    balance = Math.random() * 200 - 100;
    checkBalance = Math.round(Math.random());
    isActive = Math.round(Math.random());

}
