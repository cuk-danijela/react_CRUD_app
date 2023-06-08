<?php

use Google\Cloud\Firestore\FirestoreClient;

require 'vendor/autoload.php'; // Uključivanje Firebase PHP biblioteke

class DbConnect {
    private $firestore;

    public function __construct() {
        // Inicijalizacija Firebase Firestore klijenta
        $this->firestore = new FirestoreClient();
    }

    public function connect() {
        return $this->firestore;
    }
}
?>
