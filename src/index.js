module.exports = function solveEquation(equation) {
  var a = 0, b = 0, c = 0, d, r1, r2, st = equation[0];
  for(i = 1; i < equation.length; i++){
    if(a == 0){
      if(equation[i] != ' ')st += equation[i];else {
        a = parseInt(st);
        i+=7;
        st = equation[i];
        i+=1;
      }
    }else if (b == 0) {
      if(equation[i] != ' '){
        st += equation[i];
      }else {
        b = parseInt(st);
        i+=5;
        st = equation[i];
        i+=1;
      }
    }else if (c == 0) {
      if(i < equation.length-1){
        st += equation[i];
      }else {
        st += equation[i];
        c = parseInt(st);
      }
    }
  }
  d = Math.sqrt(b*b-4*a*c);
  r1 = Math.round((-b-d)/(2*a));
  r2 = Math.round((-b+d)/(2*a));
  if(r1 > r2){
    buff = r2;
    r2 = r1;
    r1 = buff;
  }
  return [r1, r2];
}
