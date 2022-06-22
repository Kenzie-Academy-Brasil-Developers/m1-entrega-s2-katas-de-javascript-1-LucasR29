function oneThroughTwenty() {
  let lista = []
  for(let i = 0; i <= 20; i++){
    lista.push(i)
    //console.log(i)
  }
  return lista
}
//oneThroughTwenty()
console.log(oneThroughTwenty())

function evensToTwenty() {
  let lista = []
  for(let i = 0; i <= 20; i++){
    if(i%2 == 0){
      lista.push(i)
      //console.log(i)
    }
  }  
  return lista
}
//evensToTwenty()
console.log(evensToTwenty())

function oddsToTwenty() {
    let lista = []
    for(let i = 0; i<=20; i++){
      if(i%2 != 0){
        lista.push(i)
        //console.log(i)
      }
    }
    return lista
}
//oddsToTwenty()
console.log(oddsToTwenty())


function multiplesOfFive() {
  let lista = []
  for(let i = 0; i <= 100; i++){
    if(i%5 == 0){
      lista.push(i)
      //console.log(i)
    }
  }
  return lista
}
//multiplesOfFive()
console.log(multiplesOfFive())


function squareNumbers() {
  let lista = []
  for(let i = 0; i <= 100; i++){
    if(Number.isInteger(Math.sqrt(i))){
      lista.push(i)
      //console.log(i)
    }
  }
  return lista
}
//squareNumbers()
console.log(squareNumbers())


function countingBackwards() {
  let lista = []
  for(let i = 20; i >= 0; i--){
    lista.push(i)
    //console.log(i)
  }
  return lista
}
//countingBackwards()
console.log(countingBackwards())


function evenNumbersBackwards() {
  let lista = []
  for(let i = 20; i >= 0; i--){
    if(i%2 == 0){
      lista.push(i)
      //console.log(i)
    }
  }  
  return lista
}
//evenNumbersBackwards()
console.log(evenNumbersBackwards())


function oddNumbersBackwards() {
  let lista = []
  for(let i = 20; i >= 0; i--){
    if(i%2 != 0){
      lista.push(i)
      //console.log(i)
    }
  }
  return lista
}
//oddNumbersBackwards()
console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {
  let lista = []
  for(let i = 100; i >= 0; i--){
    if(i%5 == 0){
      lista.push(i)
      //console.log(i)
    }
  }
  return lista
}
//multiplesOfFiveBackwards()
console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
  let lista = []
  for(let i = 100; i >= 0; i--){
    if(Number.isInteger(Math.sqrt(i))){
      lista.push(i)
      //console.log(i)
    }
  }
  return lista
}
//squareNumbers()
console.log(squareNumbersBackwards())
