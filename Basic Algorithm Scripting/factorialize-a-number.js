function factorialize(num) {
  let total = 1;
  for(let i = 1 ; i <= num ; i ++){
    total = total * i
  }
  return total;
}

factorialize(5);