//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue,argument);
}

function setThisWithApply(fn, thisValue, argument) {
  return fn.apply(thisValue, argument);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
<<<<<<< HEAD
  return functionToBeCopied.bind(thisValue);
=======
  return functionToBeCopied.apply(thisValue);
>>>>>>> 948aedd28c7c2adc72a423018c518533c7b3365e
}
