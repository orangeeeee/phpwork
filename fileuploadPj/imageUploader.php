<?php


namespace MyApp;

class ImageUploader {
 
    public function upload() {
        
        try {
            // error check
            $this->_validationUpload();
            // type check
            $ext = $this->_validateImageType();
            // save
            //create thubnail
            var_dump($ext);
            exit;
            
        }catch(\Exception $e) {
            echo $e->getMessage();
            exit;
            
        }
        
        header('Location: http://' . $_SERVER['HTTP_HOST']);
        exit;
    }
    
    private function _validateImageType() {
        $imageType = exif_imagetype($_FILES['image']['tmp_name']);
        
        switch($imageType) {
          case IMAGETYPE_GIF:
            return 'gif';
          case IMAGETYPE_JPEG:
            return 'jpg';
          case IMAGETYPE_PNG:
            return 'png';
          default:
            throw new \Exception('PNG/JPEG/GIF only!');
        }
    }
    private function _validationUpload() {
        //var_dump($_FILES);
//        exit;
        //input type fileのnameがimageなので、それを確認する。
        if(!isset($_FILES['image']) || !isset($_FILES['image']['error'])) {
            
            throw new \Exception('upload error');
            
        }
        //定数については、以下のurlを参照。
        //http://php.net/manual/ja/features.file-upload.errors.php
        
        switch($_FILES['image']['error']) {
            case UPLOAD_ERR_OK: return true;
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                throw new \Exception('File too large!');
        
            default:
                throw new \Exception('Err: ' . $_FILES['image']['error']);
        }
    }
        
}
