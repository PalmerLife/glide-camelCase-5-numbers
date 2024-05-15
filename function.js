window.function = function (inputString) {
  // Ensure input is available
  if (inputString.value === undefined) return;

  // Convert string to camelCase
  let str = inputString.value.trim().toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');

  // Generate a random 5-digit number
  let randomNumber = Math.floor(Math.random() * 90000) + 10000;

  // Combine camelCase string with random number
  return str + randomNumber;
}
