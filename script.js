//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    const message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
    super(message);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    const message = 'Expression should not have an invalid combination of operators';
    super(message);
    this.name = 'InvalidExprError';
  }
}

function evaluateExpression(expression) {
  const operators = ['+', '-', '*', '/'];

  if (!/^[0-9+\-*/ ]+$/.test(expression)) {
    throw new OutOfRangeError('invalid characters');
  }

  if (/([+\-*/]){2,}/.test(expression)) {
    throw new InvalidExprError();
  }

  if (/^[+\-*/]/.test(expression)) {
    throw new SyntaxError('Expression should not start with an invalid operator');
  }

  if (/[+\-*/]$/.test(expression)) {
    throw new SyntaxError('Expression should not end with an invalid operator');
  }

  // Perform the expression evaluation logic here
  // ...
}

try {
  const expression = '2+3++';
  evaluateExpression(expression);
} catch (error) {
  if (error instanceof OutOfRangeError) {
    console.error(`OutOfRangeError: ${error.message}`);
  } else if (error instanceof InvalidExprError) {
    console.error(`InvalidExprError: ${error.message}`);
  } else if (error instanceof SyntaxError) {
    console.error(`SyntaxError: ${error.message}`);
  } else {
    console.error('An error occurred:', error.message);
  }
}
