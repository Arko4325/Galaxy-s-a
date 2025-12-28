// 1. Створюємо змінну-лічильник
let count = 0;


// 2. Знаходимо елемент на сторінці, де малюється цифра
const countElement = document.getElementById('cart-count');


// 3. Знаходимо всі кнопки "Купити"
const buttons = document.querySelectorAll('.buy-btn');


// 4. Кажемо кожній кнопці слухати натискання
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Збільшуємо число на 1
    count = count + 1;
   
    // Малюємо нове число на екрані
    countElement.innerText = count;
   
    // Додаємо ефект "підсвічування" (опціонально)
    countElement.style.color = "#7c3aed";
    setTimeout(() => { countElement.style.color = "white"; }, 300);
  });
});
