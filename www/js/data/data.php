<?php

//
$db = new PDO('sqlite:./data.sqlite');
$db->exec('CREATE  TABLE "bahus" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL , "name" TEXT, "path" TEXT, "author" TEXT, "street" TEXT, "desc" TEXT, "latlon" TEXT);');
$sth = $db->query('SELECT * FROM bahus;', PDO::FETCH_ASSOC);
$out = array();
foreach ($sth as $row) {
    $out[] = $row;
}

file_put_contents("data.json", json_encode($out));

