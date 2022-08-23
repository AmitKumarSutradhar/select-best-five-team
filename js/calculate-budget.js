document.getElementById('btn-calculate').addEventListener('click', function (selectedPlayerList){
    const budgetPerPlayerElement = document.getElementById('budgetPerPlayer');
    const budgetPerPlayerString = budgetPerPlayerElement.value;
    const budgetPerPlayer = parseFloat(budgetPerPlayerString);

    budgetPerPlayerElement.value = '';
    
    const playerNameNumber = selectedPlayer.length;

    const totalPlayerExpenses = budgetPerPlayer * playerNameNumber;

    const playerExpensesElement = document.getElementById('total-expens');
    const playerExpenses = playerExpensesElement.innerText;
    
    playerExpensesElement.innerText = totalPlayerExpenses;


})


document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const totalExpensAmountElement = document.getElementById('total-expens');
    const totalExpensAmountString = totalExpensAmountElement.innerText;
    const totalExpensAmount = parseFloat(totalExpensAmountString);

    const managerAmountElement = document.getElementById('manager-field');
    const managerAmountString = managerAmountElement.value;
    const managerAmount = parseFloat(managerAmountString);

    const coachAmountElement = document.getElementById('coach-field');
    const coachAmountString = coachAmountElement.value;
    const coachAmount = parseFloat(coachAmountString);

    const finalTotalAmount = managerAmount + coachAmount + totalExpensAmount;

    // Clear Input Field Value After Calculate 
    managerAmountElement.value = '';
    coachAmountElement.value = '';

    const finalCalculationElement = document.getElementById('final-total');
    const finalTotal = finalCalculationElement.innerText;

    finalCalculationElement.innerText = finalTotalAmount;
})



// console.log('Hello From calculate JS');