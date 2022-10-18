function trigger() {
    uploadImage.click();
    return true;
}

function previewImage() {
    let 
        uploadImage = document.getElementById('uploadImage'),
        previewImage = document.getElementById('previewImage')
    ;

    const [file] = uploadImage.files;
    if(file) {
        previewImage.src = URL.createObjectURL(file);
    }

}