function isPrime(num) {
  if (num <= 1) return false; // 1 ומטה אינם מספרים ראשוניים
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // בדיקה עד שורש המספר
    if (num % i === 0) return false; // אם יש מחלק אחר מ-1 ומעצמו
  }
  return true; // אם לא מצאנו מחלקים, המספר ראשוני
}

function printPrimesUpTo(limit) {
  for (let num = 2; num < limit; num++) {
    // נתחיל מ-2 עד המספר הנתון
    if (isPrime(num)) {
      console.log(num); // מדפיסים את המספר אם הוא ראשוני
    }
  }
}

// הדפסת כל המספרים הראשוניים הקטנים מ-237
printPrimesUpTo(237);
