<?php

// on gere les erreurs
$errors = [];
if(!isset($_POST['name']) || empty($_POST['name']) )
{
    $errors['name'] = 'nom invalide';
}
if(!isset($_POST['prenom']) || empty($_POST['prenom']) )
{
    $errors['prenom'] = 'prenom invalide';
}


function isajax()
{
   
        return   (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
}

if(!empty($errors))
{
if(isajax())
{
    echo json_encode($errors);
   // header('Content-Type : application/json');
    http_response_code(4400);
    die();
}}

if(!empty($_POST['prenom'] ) && isset( $_POST['prenom'] ) && !empty($_POST['name'] ) && isset( $_POST['name'] )  )
{
    header('location:fin.php');
}
else
{
    echo'cpas regl';
}

?>