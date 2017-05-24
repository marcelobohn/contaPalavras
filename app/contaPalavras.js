const contaPalavras = function(frase) {
  if (frase === '')
    return { mensagem: 'Informe uma frase' }
  return frase.split(' ').length
}
module.exports = { contaPalavras }
