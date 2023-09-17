import { nameList } from "./constants";

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

export function findNthPrime(n) {
  if (n === 1) return 2;

  let count = 1; // Start with 1 as 2 is the first prime.
  let number = 3; // Start checking from 3.

  while (count < n) {
    if (isPrime(number)) {
      count++;
      if (count === n) {
        return number;
      }
    }
    number += 2; // Check only odd numbers, as even numbers greater than 2 are not prime.
  }

  return -1; // In case n is not a positive integer.
}
