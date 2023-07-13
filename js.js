const firstName = prompt("Напишите первое имя"),
  secondName = prompt("Напишите второе имя");
const randomNumber = Math.floor(Math.random() * 100);

if (firstName === "Саша" && secondName === "Таня") {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен 100 % совместимы`
  );
} else if (randomNumber >= 33 && randomNumber < 66) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая но может быть и лучше`
  );
} else if (randomNumber >= 66) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг к другу`
  );
} else if (randomNumber < 33) {
  alert(
    `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вам нужно поискать человека с другим именем`
  );
} else {
  alert(`Упс... Какоето странное число получилось. Попробуте ещераз`);
}
