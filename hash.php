<?php
foreach (hash_algos() as $algo) {
    if ($_GET['key']) {
        $hash = hash_hmac($algo, $_GET['str'], $_GET['key'], false);
    } else {
        $hash = hash($algo, $_GET['str'], false);
    }

    if ($hash == '') {
        $hash = '<i>(does not support HMAC)</i>';
    }

    echo('<p><b>'.$algo.'</b><br>'.$hash.'</p>');
}
?>
