

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










const slider = document.getElementById("slider");
const handle = document.getElementById("slider").querySelector(".slider-handle");
const colors = Array.from(document.getElementById("colors").querySelectorAll(".color"));
const form = document.getElementById("meu-formulario");
const submitButton = document.getElementById("btn-enviar");

let selectedColor = null;
let isCaptchaValid = false;

handle.addEventListener("mousedown", startSlide);
handle.addEventListener("touchstart", startSlide);
document.addEventListener("mouseup", endSlide);
document.addEventListener("touchend", endSlide);

colors.forEach(color => {
  color.addEventListener("click", () => {
    selectedColor = color;
    colors.forEach(c => c.classList.remove("selected"));
    selectedColor.classList.add("selected");
  });
});

function startSlide(event) {
  event.preventDefault();
  document.addEventListener("mousemove", slide);
  document.addEventListener("touchmove", slide);
}

function endSlide(event) {
  document.removeEventListener("mousemove", slide);
  document.removeEventListener("touchmove", slide);
}

function slide(event) {
  event.preventDefault();
  const sliderRect = slider.getBoundingClientRect();
  const handleWidth = handle.offsetWidth;
  let xPosition;
  
  if (event.type === "touchmove") {
    xPosition = event.touches[0].clientX - sliderRect.left - handleWidth / 2;
  } else {
    xPosition = event.clientX - sliderRect.left - handleWidth / 2;
  }
  
  if (xPosition < 0) {
    xPosition = 0;
  }
  
  if (xPosition > slider.offsetWidth - handleWidth) {
    xPosition = slider.offsetWidth - handleWidth;
  }
  
  handle.style.transform = `translateX(${xPosition}px)`;
}

function validateCaptcha() {
  if (selectedColor && selectedColor.classList.contains("selected")) {
    isCaptchaValid = true;
  } else {
    isCaptchaValid = false;
  }
}

submitButton.addEventListener("click", () => {
  // Verifique se todos os campos do formulário estão preenchidos
  const inputs = Array.from(form.querySelectorAll("btn-enviar"));

  const isFormFilled = inputs.every(input => input.value.trim() !== "");

  if (isFormFilled && isCaptchaValid) {
    // Faça o envio do formulário
    form.submit();
  } else {
    alert("Por favor, preencha todos os campos e verifique o CAPTCHA.");
  }
});