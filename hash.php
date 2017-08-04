<?php
foreach (hash_algos() as $algo) {
    $hash = hash($algo, $_GET['str'], false);
    echo('<p><b>'.$algo.'</b><br>'.$hash.'</p>');
}
