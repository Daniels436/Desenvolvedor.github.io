<?php

// Verifica se a solicitação é do tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtém os valores dos campos do formulário
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $telefone = $_POST["telefone"];
  $mensagem = $_POST["mensagem"];

  // Configurações do e-mail
  $to = "danielzele01@yahoo.com.br"; // Substitua pelo seu endereço de e-mail
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
  // Retorna uma resposta para o JavaScript em caso de erro
  echo "error";
}
?>