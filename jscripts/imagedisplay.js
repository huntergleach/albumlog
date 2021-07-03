// getting file from input
const inpFile = document.getElementById('inpFile');
// div id as the container
const previewContainer = document.getElementById('artworkdiv');

const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');
const previewImage = previewContainer.querySelector('.image-preview__image');

previewImage.setAttribute('id', 'previewImage')


inpFile.addEventListener ('change', function() {
    const file = this.files[0];
   
     
    if (file) {
        // if a file is uploaded, read it
        const reader = new FileReader();
        
        // once the file is read, load, and set src
        previewDefaultText.style.display = 'none';
        previewImage.style.display = 'block';
        reader.addEventListener('load', function() {
            // on load for file input
            previewImage.setAttribute('src', this.result);
        })
        
        reader.readAsDataURL(file)
        // creating URL
    
    } else {
        // else, leave it blank
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        
        previewImage.setAttribute('src', '')
    }
})


