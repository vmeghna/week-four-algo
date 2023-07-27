// 1. Given an array of integers, find the sum of all even and odd numbers separately.

// Test case:

// console.log(sumOfEvenAndOdd([5, 3, 9, 2, 7])); // Output: { evenSum: 2, oddSum: 24 }
// console.log(sumOfEvenAndOdd([10, -5, 0, 15, 20])); // Output: { evenSum: 30, oddSum: 10 }

function sumOfEvenAndOdd(arr) {
  let evenSum = 0;

  let oddSum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  return { evenSum, oddSum };
}
console.log("result:", sumOfEvenAndOdd([5, 3, 9, 2, 7]));
console.log("result:", sumOfEvenAndOdd([10, -5, 0, 15, 20]));

// 2. Write a function that takes a number n as input and returns the sum of the first n prime numbers.

// Test case:

// console.log(sumOfPrimes(5)); // Output: 28 (2 + 3 + 5 + 7 + 11)
// console.log(sumOfPrimes(10)); // Output: 129 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29)

const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const sumOfPrime = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};
console.log("final:", sumOfPrime(5));
console.log("final:", sumOfPrime(10));

// 3. Write a function that takes a number n as input and returns the sum of the squares of all positive integers up to n.
// Test case:
// console.log(sumOfSquares(3)); // Output: 14 (1^2 + 2^2 + 3^2)
// console.log(sumOfSquares(5)); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)

function squares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

console.log("result:", squares(3));
console.log("result:", squares(5));

// 4. Write a function that takes an array of two numbers as input and returns the smallest common multiple of the two numbers.

// Test case:
// console.log(smallestCommonMultiple([1, 5])); // Output: 60 (1*2*3*4*5)
// console.log(smallestCommonMultiple([3, 7])); // Output: 42 (3*2*7)

// function smallestCommonMultiple(arr) {
//   const [num1, num2] = arr.sort((a, b) => a - b);
//   let scm = num2;

//   while (true) {
//     if (scm % num1 === 0 && scm % num2 === 0) {
//       return scm;
//     }
//     scm++;
//   }
// }

// console.log("result:", smallestCommonMultiple([1, 5]));
// console.log("result:", smallestCommonMultiple([3, 7]));

/*output is 5 and 21*/
/*doubt has to be clarified*/

// 5. Write a function that takes a number as input and returns the sum of its digits.

// Test case:
// console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3)
// console.log(sumOfDigits(9876)); // Output: 30 (9 + 8 + 7 + 6)

function sOfD(number) {
  let sum = 0;

  let num = Math.abs(number);

  while (num > 0) {
    sum += num % 10;

    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("result:", sOfD(123));
console.log("result:", sOfD(9876));

// 6.Write a function that takes an array as input and returns true if the array is symmetric (reads the same backward as forward), otherwise returns false.
// Test case:
// console.log(isSymmetric([1, 2, 3, 2, 1])); // Output: true
// console.log(isSymmetric([1, 2, 3, 3, 1])); // Output: false

function isSymmetric(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log("result:", isSymmetric([1, 2, 3, 2, 1]));
console.log("result:", isSymmetric([1, 2, 3, 3, 1]));

// 7. Write a function that takes an array of strings as input and returns the longest common prefix among them.

// Test case:

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}
console.log("result:", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("result:", longestCommonPrefix(["dog", "racecar", "car"]));

// 8. Write a function that takes a string of digits as input and returns the phone number formatted as (XXX) XXX-XXXX.

// Test case:

// console.log(formatPhoneNumber("1234567890")); // Output: "(123) 456-7890"
// console.log(formatPhoneNumber("9876543210")); // Output: "(987) 654-3210"

function phoneNumber(digits) {
  const areaCode = digits.slice(0, 3);
  const firstPart = digits.slice(3, 6);
  const secondPart = digits.slice(6, 10);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}
console.log("result:", phoneNumber("1234567890"));
console.log("result:", phoneNumber("9876543210"));

// 9. Write a function that takes a string as input and returns the string with its characters sorted by frequency.

// Test case:

// console.log(sortByFrequency("tree")); // Output: "eert" or "eetr" (both are valid)
// console.log(sortByFrequency("cccaaa")); // Output: "aaaccc" or "cccaaa" (both are valid)

//doubts has to be clarified//

// 10.Write a function that takes an array of integers as input and returns the length of the longest consecutive sequence of elements.

// Test case:

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (1, 2, 3, 4)
// console.log(longestConsecutive([1, 2, 3, 5, 6, 7])); // Output: 3 (5, 6, 7)

function lConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let longestStreak = 1;
  let currentStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        currentStreak++;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }
  return Math.max(longestStreak, currentStreak);
}
console.log("result:", lConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (1, 2, 3, 4)
console.log("result:", lConsecutive([1, 2, 3, 5, 6, 7])); // Output: 3 (5, 6, 7)
