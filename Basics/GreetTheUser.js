// greet the user with a message

function greetUser(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Hello, Guest!';
  }
  return `Hello, ${name}!`;
}

// Example usage:
console.log(greetUser('Alice')); // Output: Hello, Alice!
console.log(greetUser('')); // Output: Hello, Guest!
console.log(greetUser(null)); // Output: Hello, Guest!