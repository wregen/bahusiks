<?php

$db = new PDO('sqlite:./bahus.sqlite');
$sth = $db->query('SELECT * FROM bahus;');
$out = array();
foreach ($sth as $row) {
    $out[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'path' => './img/bahus/' . $row['name'].'.jpg',
    );
}
echo json_encode($out);