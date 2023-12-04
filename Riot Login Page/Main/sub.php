<?php
$nome = $_POST['username'];
$email = $_POST['email'];
$senha = password_hash($_POST['password'], PASSWORD_DEFAULT);

$conexao = new mysqli('localhost', 'root', '', 'lol_login');

if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

$sql = "INSERT INTO login_data (Usuário, eMail, Senha) VALUES ('$nome', '$email', '$senha')";
if ($conexao->query($sql) === TRUE) {
    echo "Inscrição realizada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conexao->error;
}

$conexao->close();
?>
