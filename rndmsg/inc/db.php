<?php
/* Connexion à une base MySQL avec l'invocation de pilote */
$dsn = 'mysql:dbname=rndmessages;host=127.0.0.1';
$user = 'usrmsg';
$password = '150B22NF10JJJAL3D*rndmsg';

try {
    $dbh = new PDO($dsn, $user, $password);

} catch (PDOException $e) {
 
}

?>