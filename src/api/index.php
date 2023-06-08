<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

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

$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $collection = $conn->collection('users');
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $user = $collection->document($path[3])->snapshot();
            if ($user->exists()) {
                $users = [$user->id() => $user->data()];
            } else {
                $users = [];
            }
        } else {
            $usersSnapshot = $collection->documents();
            $users = [];
            foreach ($usersSnapshot as $user) {
                $users[$user->id()] = $user->data();
            }
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $collection = $conn->collection('users');

        $created_at = new \DateTime();
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'created_at' => $created_at->format('Y-m-d'),
        ];

        $document = $collection->add($data);

        if ($document) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $collection = $conn->collection('users');

        $updated_at = new \DateTime();
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'updated_at' => $updated_at->format('Y-m-d'),
        ];

        $document = $collection->document($user->id);
        $document->set($data, ['merge' => true]);

        if ($document) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $collection = $conn->collection('users');
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $document = $collection->document($path[3]);

        if ($document->exists()) {
            $document->delete();
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
?>
