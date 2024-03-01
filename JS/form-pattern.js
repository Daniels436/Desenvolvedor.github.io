

// CRITERIOS-DE ENVIO




// LIMITE-600-CARAC-TEXTAREA-FORMULARIO

const textarea = document.getElementById("campo-mensagem");
const characterCount = document.getElementById("characterCount");

textarea.addEventListener("input", function() {
const currentLength = textarea.value.length;
const maxLength = parseInt(textarea.getAttribute("maxlength"));
characterCount.textContent = currentLength + "/" + maxLength + " caracteres";
});

// padrão patter
// Verificação anti pixin- segunda camada
const campoMensagem = document.getElementById('campo-mensagem');
const pattern = /^[a-zA-Z0-9,.\sáÁéÉíÍóÓúÚâÂêÊîÎôÔûÛãÃõÕçÇ]+$/;

campoMensagem.addEventListener('input', function() {
const value = campoMensagem.value;
if (!pattern.test(value)) {
  campoMensagem.setCustomValidity('Apenas letras e números são permitidos');
} else {
  campoMensagem.setCustomValidity('');
}
});







