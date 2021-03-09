<?php

@$g_ville = htmlentities($_GET['ville']);




?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<p>
    à <?= @$g_ville  ?> il fera super beau avec 25C
</p>   
    <pre>
    <?=  print_r($_POST)  ?>
    </pre>


   
</body>
</html>









