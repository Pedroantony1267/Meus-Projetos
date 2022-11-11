const transactionsUl = document.querySelector(".transacoes ul");
const valueIncome = document.querySelector(".receitas h2");
const valueExpense = document.querySelector(".despesas h2");
const valueSaldo = document.querySelector(".saldo h1");
const btn = document.querySelector(".btn");
const inputName = document.querySelector(".name").value;
const inputValue = document.querySelector(".valor").value;
const translation = [
  { id: 1, name: "bolo de brigadeiro", amount: -20 },
  { id: 2, name: "salario", amount: 400 },
  { id: 3, name: "trota de frango", amount: -10 },
  { id: 4, name: "violão", amount: 150 },
];

const addTransaction = (transaction) => {
  const operator = transaction.amount < 0 ? "-" : "+";
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const withoutOperator = Math.abs(transaction.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
    <p>${transaction.name}</p>
    <p>${operator} R$ ${withoutOperator}</p>
    `;
  transactionsUl.append(li);
};

const updateValues = () => {
  const transactionAmounts = translation.map(
    (transaction) => transaction.amount
  );
  const total = transactionAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);
  const income = transactionAmounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
  const expense = transactionAmounts
    .filter((value) => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);

  valueSaldo.textContent = `R$ ${total}`;
  valueIncome.textContent = `R$ ${income}`;
  valueExpense.textContent = `R$ ${expense}`;
};

const init = () => {
  translation.forEach(addTransaction);
  updateValues();
};

init();

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputName == "" || inputValue.trim() == "") {
    alert(
      "Por favor, preencha o nome quanto o valor da transação quanto ao nome"
    );
    return;
  }

  const transaction = {
    id: 10,
    name: inputName,
    amount: inputValue,
  };

  translation.push(transaction);
  init();

  inputName.value = "";
  inputValue.value = "";
});
