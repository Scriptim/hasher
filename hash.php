<?php
if ($_GET['key']) {
    foreach (hash_algos() as $algo) {
        $hash = hash_hmac($algo, $_GET['str'], $_GET['key'], false);
        echo('<p><b>'.$algo.'</b><br>'.$hash.'</p>');
    }
} else {
    foreach (hash_algos() as $algo) {
        $hash = hash($algo, $_GET['str'], false);
        echo('<p><b>'.$algo.'</b><br>'.$hash.'</p>');
    }
}
