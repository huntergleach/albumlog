// const artworkInput = document.getElementById('inpFile')
const previewContainer = document.getElementById('artworkdiv');

const previewImage = previewContainer.querySelector('.image-preview__image');
previewImage.setAttribute('id', 'previewImage')

const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');


inpFile.addEventListener ("change", function() {
    const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            previewDefaultText.style.display = 'none';
            previewImage.style.display = 'block';
            

            reader.addEventListener('load', function() {
                
                previewImage.setAttribute("src", this.result);
                // previewImage.setAttribute('id', `${this.id}`);
            })
            reader.readAsDataURL(file);
            
            // reader.readAsText(file);
      
        } else {
            
            previewDefaultText.style.display = null;
            
            previewImage.style.display = 'block';
            previewImage.setAttribute('src', "images/recordicon.png")
        }
       
        console.log(this.result)
       
        
    })
    

// const loadFile = function(event) {
// 	const image = document.getElementById('previewImage');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };
