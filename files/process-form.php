<?php

// solicitação POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obter valores 
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $telefone = $_POST["telefone"];
  $mensagem = $_POST["mensagem"];

  $to = "danielzele01@yahoo.com.br"; 
  $subject = "Novo formulário enviado";
  $message = "Nome: " . $nome . "\n"
            . "E-mail: " . $email . "\n"
            . "Telefone: " . $telefone . "\n"
            . "Mensagem: " . $mensagem;
  
  // Envia o e-mail
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);

  // Retorna uma resposta para o JavaScript
  echo "success";
} else {
  // Retorno Js caso erro
  echo "error";
}
?>
