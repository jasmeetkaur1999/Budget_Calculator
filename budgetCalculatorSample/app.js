let date = new Date();
const month = document.querySelector(".budget__title--month");
let a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month.textContent = a[date.getMonth()] + " " + date.getFullYear();

const addType = document.querySelector(".add__type ");
let submit = document.querySelector(".ion-ios-checkmark-outline");
const add = document.getElementsByClassName("add");
const description = document.getElementsByClassName("add__container");
const addValue = document.querySelector(".add__value");
let addDescription = document.querySelector(".add__description");
const incomeList = document.querySelector(".income__list");
let expenseList = document.querySelector(".expenses__list");
let budget_income = document.querySelector(".budget__income--value");
let budget_expense = document.querySelector(".budget__expenses--value");
let budget_value = document.querySelector(".budget__value");
let budget__expenses_percentage = document.querySelector(".budget__expenses--percentage");
let incomeArray = [];
let expenseArray = [];
let incomeCal = 0;
let expenseCal = 0;

class Transaction {
  static id = 0;
  constructor(amount, description) {
    this.amount = amount;
    this.description = description; 
    this.id = Transaction.id++;
  }
}
class Income extends Transaction {
  constructor(amount, description) {
    super(amount, description);
  }
}
class Expense extends Transaction {
  constructor(amount, description) {
    super(amount, description);
  }
}

submit.addEventListener("click", function() {
  if(addDescription.value !== "" && addType.selectedIndex === 0 && addValue.value !== "" && addValue.value > 0) {
    let income = new Income(addValue.value, addDescription.value);
    incomeArray.push(income);
    console.log(incomeArray);
    console.log(income.amount);
    console.log(income);
    let incomeList = document.querySelector(".income__list");
    incomeList.insertAdjacentHTML("beforeend", `<div class="item clearfix" data-id = ${income.id}>
      <div class="item__description">${income.description}</div>
      <div class="right clearfix">
        <div class="item__value">+ ${income.amount}</div>
        <div class="item__delete">
        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
      </div>
    </div>`);
    incomeCal = incomeCal + parseInt(income.amount);
    budget_income.textContent = `+ ${incomeCal}`;
  } else if(addDescription.value !== "" && addType.selectedIndex === 1 && addValue.value !== "") {
      let expense = new Expense(addValue.value, addDescription.value);
      expenseArray.push(expense);
      console.log(expenseArray);
      let expenseList = document.querySelector(".expenses__list");
      expenseList.insertAdjacentHTML("beforeend", `<div class="item clearfix" data-id = ${expense.id}>
        <div class="item__description">${expense.description}</div>
        <div class="right clearfix">
          <div class="item__value"> - ${expense.amount}</div>
          <div class="item__percentage">${parseFloat((expense.amount / incomeCal)*100).toFixed(1)}</div>
          <div class="item__delete">
          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div>
        </div>
      </div>`);
      expenseCal = expenseCal + parseInt(expense.amount);
      budget_expense.textContent = `- ${expenseCal}`;
      console.log(expense);
  } else if(addDescription.value === "") {
    alert("pls fill some description");
  } else if(addValue.value === "") {
    alert("fill the value");
  } 
  incomeList.innerHTML = "";
    incomeArray.forEach(function(inc) {
      incomeList.insertAdjacentHTML("beforeend", `<div class="item clearfix" data-id = ${inc.id}>
      <div class="item__description">${inc.description}</div>
      <div class="right clearfix">
        <div class="item__value"> + ${inc.amount}</div>
        <div class="item__delete">
        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
      </div>
    </div>`);
  })
  expenseList.innerHTML = "";
  expenseArray.forEach(function(exp) {
    expenseList.insertAdjacentHTML("beforeend", `<div class="item clearfix" data-id = ${exp.id}>
    <div class="item__description">${exp.description}</div>
    <div class="right clearfix">
      <div class="item__value"> - ${exp.amount}</div>
      <div class="item__percentage">${parseFloat((exp.amount / incomeCal)*100).toFixed(1)}%</div>
      <div class="item__delete">
      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
      </div>
    </div>
  </div>`);
  })

  budget_value.textContent = incomeCal - expenseCal;
  budget__expenses_percentage.textContent = `${parseFloat((expenseCal / incomeCal)*100).toFixed(1)} %`;
  addDescription.value = "";
  addValue.value = "";
  
  let item_delete = document.querySelector(".income");
  item_delete.addEventListener("click", function(e) {
  if(e.target.dataset.classList.contains("item__delete--btn")) {
    fo
  }
                  })

})




