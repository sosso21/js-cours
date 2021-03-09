<?php




?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="style.css">
</head>
<h1> formulaire</h1>
<body>
    
    <main class="container">
    
    <form class="form-control " id="myform" action="form.php" method="post">
   <p> <label for="prenom"> Prenom </label> <input type="text" name="prenom" id="prenom">
   </p>
   <p> <label for="name"> name </label> <input type="text" name="name" id="name">
   </p>
    <button class="btn btn-primary">Submit</button>

    </form>
<div class="result">

</div>
    
    </main>


    <script src="app.js"></script>
</body>
</html>






