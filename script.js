
const textarea1 = document.querySelector(".textarea1");
const textarea2 = document.querySelector(".textarea2");

function btcriptografar(){
  const textcriptografado = criptografar(textarea1.value);
  textarea2.value = textcriptografado;
  textarea1.value = "";

}

function criptografar(stringEncriptada){
  let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai",],["o","ober"],["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();
for (let i = 0; i < matrizCodigo.length; i++){
  if (stringEncriptada.includes(matrizCodigo[i][0])){
    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

  }
}
return stringEncriptada;

}
function btdescriptografar(){
  const textdescriptografado = descriptografar(textarea2.value);
  textarea1.value = textdescriptografado;
  textarea2.value = "";

}

function descriptografar(stringdesencriptada){
  let Codigoalterado = [["enter", "e"],["imes","i"],["ai","a",],["ober","o"],["ufat", "u"]];
stringdesenncriptada = stringdesencriptada.toLowerCase();
for (let i = 0; i < Codigoalterado.length; i++){
  if (stringdesencriptada.includes(Codigoalterado[i][0])){
    stringdesencriptada = stringdesencriptada.replaceAll(Codigoalterado[i][0],Codigoalterado[i][1]);

  }
}
return stringdesencriptada;

}







