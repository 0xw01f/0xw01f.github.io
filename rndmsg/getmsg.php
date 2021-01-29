<?php

        require('inc/db.php');
        $query = $dbh->prepare('SELECT msg
        FROM messages ORDER BY RAND() LIMIT 1');
        $query->execute();

        $result = $query->fetchAll(PDO::FETCH_COLUMN, 0);

        echo $result[0];
      ?>