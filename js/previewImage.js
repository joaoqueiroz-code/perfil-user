function trigger() {
    let uploadImage = document.getElementById('uploadImage');
    uploadImage.click();
}

function previewImage() {
    let 
        uploadImage = document.getElementById('uploadImage'),
        previewImage = document.getElementById('previewImage')
    ;

    const [file] = uploadImage.files;
    if(file) {
        previewImage.removeAttribute('style')
        previewImage.src = URL.createObjectURL(file);
    }

}