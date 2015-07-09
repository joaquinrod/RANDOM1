//Math.random() devuelve número aleaotrio entre 0 y 1.
var numero = Math.random;

var str = ' MAYOR que 0,5';
if(numero <= 0.5){
  str = ' MENOR que 0,5 n';
}

console.log('\n' + numero + str + '\n');
