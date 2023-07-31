const stringChecker = function (s, p1, p2) {
  const isFormable = function (s, p1, p2, sIndex, p1Index, p2Index) {
    // Базовий випадок: якщо ми перевірили всі символи рядка S, то перевіряємо, чи залишилися незчитані символи в P1 і P2
    if (sIndex === s.length) {
      return p1Index === p1.length && p2Index === p2.length;
    }

    let formableWithP1 = false;
    let formableWithP2 = false;

    // Рекурсивно перевіряємо, чи можна сформувати рядок S, продовжуючи перевірку з рядка P1
    if (p1Index < p1.length && s[sIndex] === p1[p1Index]) {
      formableWithP1 = isFormable(s, p1, p2, sIndex + 1, p1Index + 1, p2Index);
    }

    // Рекурсивно перевіряємо, чи можна сформувати рядок S, продовжуючи перевірку з рядка P2
    if (p2Index < p2.length && s[sIndex] === p2[p2Index]) {
      formableWithP2 = isFormable(s, p1, p2, sIndex + 1, p1Index, p2Index + 1);
    }

    // Повертаємо true, якщо можна сформувати рядок S, починаючи з рядка P1 або P2
    return formableWithP1 || formableWithP2;
  };

  // Викликаємо рекурсивну функцію, починаючи з першого символа рядка S та порожніх рядків P1 і P2
  return isFormable(s, p1, p2, 0, 0, 0);
};

// Приклад використання:
console.log(stringChecker('w27y7', '27', 'w7y'));
