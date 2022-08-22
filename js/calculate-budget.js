document.getElementById('btn-calculate').addEventListener('click',function(){
    const budgetPerPlayerElement = document.getElementById('budgetPerPlayer');
    const budgetPerPlayerString = budgetPerPlayerElement.value;
    const budgetPerPlayer = parseFloat(budgetPerPlayerString);


    const totalPlayerExpenses = budgetPerPlayer * 5;

    const playerExpensesElement = document.getElementById('total-expens');
    const playerExpenses = playerExpensesElement.innerText;
    
    playerExpensesElement.innerText = totalPlayerExpenses;


})

document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerAmountElement = document.getElementById('manager-field');
    const managerAmountString = managerAmountElement.value;
    const managerAmount = parseFloat(managerAmountString);

    const coachAmountElement = document.getElementById('manager-field');
    const coachAmountString = coachAmountElement.value;
    const coachAmount = parseFloat(coachAmountString);

    const finalTotalAmount =  managerAmount + coachAmount;

    const finalCalculationElement = document.getElementById('final-total');
    const finalTotal = finalCalculationElement.innerText;

    finalCalculationElement.innerText = finalTotalAmount;
})



// console.log('Hello From calculate JS');