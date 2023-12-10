/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
    this.operators=['+','-','*','/'];
    this.precedence={'+':1,'-':1,'*':2,'/':2};
  }

  isNumeric(token){
    return !isNaN(token)&&isFinite(token);
  }

  add(number){
    if(this.isNumeric(number))
    {
      this.result+=number;
    }
    else{
      console.error("Not a valid input");
    }
  }

  subtract(number){
    if(this.isNumeric(number))
    {
      this.result-=number;
    }
    else{
      console.error("Not a valid input");
    }
  }

  multiply(number){
    if(this.isNumeric(number))
    {
      this.result*=number;
    }
    else{
      console.error("Not a valid input");
    }
  }

  divide(number){
    if(this.isNumeric(number))
    {
      if(number===0)
        {
          throw Error();
        }
      this.result/=number;
    }
    else{
      console.error("Not a valid input");
    }
  }

  clear(){
    this.result=0;
  }

  getResult(){
    return this.result;
  }

  // convertToPostfix(tokens){
  //   let outputQueue=[];
  //   let operatorStack=[];
  //   for(const token in tokens){
  //     if(this.isNumeric(token))
  //     {
  //       outputQueue.push(token);
  //     }

  //     else if(this.operators.includes(token))
  //     {
  //       while (operatorStack.length>0 && operatorStack[operatorStack.length-1]>=this.precedence[token]) {
  //         outputQueue.push(operatorStack.pop());
  //       }
  //       operatorStack.push(token);
  //     }

  //     else if(token==='(')
  //     {
  //       operatorStack.push(token);
  //     }
  //     else if(token===')')
  //     {
  //       while(operatorStack.length>0 && operatorStack[operatorStack.length-1]!=='(')
  //       {
  //         outputQueue.push(operatorStack.pop());
  //       }
  //       if(operatorStack.length===0||operatorStack[operatorStack.length-1]!='(')
  //       {
  //         throw Error("Mismatched parantheses");
  //       }
  //       operatorStack.pop();
  //     }
  //     else
  //     {
  //       throw Error("Invalid token");
  //     }
  //   }

  //   while(operatorStack.length>0){
  //     if(operatorStack[operatorStack.length-1]==='(')
  //     {
  //       throw Error("Mismatched parantheses");
  //     }
  //     outputQueue.push(operatorStack.pop());
  //   }

  //   return outputQueue;
  // }

  // evaluateRPN(outputQueue){
  //   const stack=[]

  //   for(const token of outputQueue){
  //     if(typeof token==='number')
  //     {
  //       stack.push(token);
  //     }
  //     else if(this.operators.includes(token)){
  //       const operand1=stack.pop();
  //       const operand2=stack.pop();

  //       if(this.isNumeric(operand1)&&this.isNumeric(operand2))
  //       {
  //         switch (token) {
  //           case '+':
  //             stack.push(operand1+operand2);
  //             break;
  //           case '-':
  //             stack.push(operand1-operand2);
  //             break;
  //           case '*':
  //             stack.push(operand1*operand2);
  //             break;
  //           case '/':
  //             if(operand2!==0){
  //               stack.push(operand1/operand2);
  //             }
  //             else{
  //               throw Error("Cannot divide by zero");
  //             }
  //             break;
  //         }
  //       }
  //       else{
  //         throw Error("Invalid operands");
  //       }
  //     }
  //   }

  //   if(stack.length===1){
  //     return stack[0];
  //   }
  //   else{
  //     throw Error();
  //   }
  // }

  // calculate(expression)
  // {
  //   const cleanExpression=expression.replace(/\s/g,'');

  //   const tokens=cleanExpression.match(/([0-9]+|\+|\-|\*|\/|\(|\))/g);
  //   console.log(cleanExpression);
  //   if(!tokens){
  //     console.error("Invalid expression");
  //     return null;
  //   }

  //   let outputQueue=this.convertToPostfix(tokens);
  //   console.log(outputQueue);
  //   const result=this.evaluateRPN(outputQueue);
  //   return result;
  // }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s/g, ''); // Remove spaces
    console.log(sanitizedExpression);
    const outputQueue = [];
    const operatorStack = [];

    const tokens = sanitizedExpression.match(/([0-9]+|\+|\-|\*|\/|\(|\))/g);

    if (!tokens) {
      throw Error();
      return null;
    }

    for (const token of tokens) {
      if (this.isNumeric(token)) {
        outputQueue.push(parseFloat(token));
      } else if (this.operators.includes(token)) {
        while (
          operatorStack.length > 0 &&
          this.precedence[operatorStack[operatorStack.length - 1]] >= this.precedence[token]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
        if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1] !== '(') {
          throw Error();
        }
        operatorStack.pop(); // Discard the '('
      } else {
        throw Error();
      }
    }

    while (operatorStack.length > 0) {
      if (operatorStack[operatorStack.length - 1] === '(') {
        throw Error();
      }
      outputQueue.push(operatorStack.pop());
    }

    return this.evaluateRPN(outputQueue);
  }

  evaluateRPN(outputQueue) {
    const stack = [];

    for (const token of outputQueue) {
      if (typeof token === 'number') {
        stack.push(token);
      } else if (this.operators.includes(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();

        if (this.isNumeric(operand1) && this.isNumeric(operand2)) {
          switch (token) {
            case '+':
              stack.push(operand1 + operand2);
              break;
            case '-':
              stack.push(operand1 - operand2);
              break;
            case '*':
              stack.push(operand1 * operand2);
              break;
            case '/':
              if (operand2 !== 0) {
                stack.push(operand1 / operand2);
              } else {
                throw Error();
              }
              break;
          }
        } else {
          throw Error();
        }
      }
    }
    console.log(stack);
    console.log(stack.length);
    return stack[0];
  }
}

module.exports = Calculator;
