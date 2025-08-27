// Program to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage
const input = "GitHub";
console.log(`Original: ${input}`);
console.log(`Reversed: ${reverseString(input)}`);
