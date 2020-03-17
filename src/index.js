module.exports = function check(str, bracketsConfig) {
 
    let stek = [];
    let brakets = bracketsConfig.flat(1).join('');
  
      for(i=0;i<str.length;i++){
        if (brakets.indexOf(str[i]) % 2 == 0&&stek[stek.length - 1]!==str[i]) {
          stek.push(str[i]);
          }
          else if (stek.length && (brakets.includes(stek[stek.length - 1] + str[i]))) {
              stek.pop();
          }
          else return false;
    }
       return stek.length>0?false:true;
  
  }
