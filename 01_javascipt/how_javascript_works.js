/**
 * 1. Execution Context
When JavaScript runs, it creates an execution context that contains the environment for running the code:

    Global Execution Context: Created for the entire script.
    Function Execution Context: Created for each function call.
   
Each context stores:
    Variable Environment: Variables, constants, and functions defined in the scope.
    Scope Chain: References to variables in outer contexts.
    This Binding: The value of this in the given context.
 */

//call stack
//call stack follow LIFO(Last in First out)
function first() {
    console.log("First function starts");
    second();
    console.log("First function ends");
  }
  
  function second() {
    console.log("Second function starts");
    console.log("Second function ends");
  }
  
  first();
  