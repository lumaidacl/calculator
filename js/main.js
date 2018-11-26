(()=>{
  console.log('iniciando calculadora');
  //Elements
  const buttons = document.getElementsByClassName("calc-row__action");
  const target = document.getElementById("target");
  const reset = document.getElementById("reset");
  const result = document.getElementById("result");
  const equal = document.getElementById("equal");
  const DECIMALS = 2;

  //Functions
  const doAction = function(){
    target.innerHTML = target.innerHTML + this.dataset.value;
  };
  
  const resetCalc = () =>{
    target.innerHTML = "";
    result.innerHTML = "0";
  };

  const addition = (numbers)=>{
    let result = 0;
    numbers.map( number => {
      result +=  parseFloat(number);
    });
    return result;
  };

  const substract = (numbers) =>{
    let result = 0;
    numbers.map( (value, index) => {
      if(index===0){
        result +=  parseFloat(value);
      }else{
        result -= parseFloat(value);
      }
    });
    return result;
  };

  const mult = (numbers) =>{
    let result = 0;
    numbers.map( (value, index) => {
      if(index===0){
        result +=  parseFloat(value);
      }else{
        result *= parseFloat(value);
      }
    });
    return result;
  };

  const division = (numbers) =>{
    let result = 0;
    numbers.map( (value, index) => {
      if(index===0){
        result +=  parseFloat(value);
      }else{
        result /= parseFloat(value);
      }
    });
    return result;
  };

  const compare = (numbers) =>{
    let result = 0;
    if(parseFloat(numbers[0]) < parseFloat(numbers[1])){
      result = 1;
    }
    return result;
  };

  const distinctof = (numbers) =>{
    let result = 0;
    if(parseFloat(numbers[0]) !== parseFloat(numbers[1])){
      result = 1;
    }
    return result;
  };

  const moduleof = (numbers) =>{
    return parseFloat(numbers[0]) % parseFloat(numbers[1]);
  };

  const getResult = (e)=>{
    let result_operation  = 0;
    let limiters = ["+", "-", "*", "/","&lt;","≠","%"];

    limiters.map( (limiter) =>{
      let values = target.innerHTML.split(limiter);

      if( values.length > 1){
        switch (limiter){
          case "+":
            result_operation = addition(values);
            break;
          case "-":
            result_operation = substract(values);
            break;
          case "*":
            result_operation = mult(values);
            break;
          case "/":
            result_operation = division(values);
            break;
          case "&lt;":
            result_operation = compare(values);
            break;
          case "≠":
            result_operation = distinctof(values);
            break;
          case "%":
            result_operation = moduleof(values);
            break;
        }
      }
    });
    result.innerHTML = result_operation.toFixed(DECIMALS);
  }

  //Listeners
  for(let index_button = 0; index_button < buttons.length; index_button++){
    buttons[index_button].addEventListener('click' , doAction );
  }
  reset.addEventListener("click", resetCalc);
  equal.addEventListener("click", getResult);

})();