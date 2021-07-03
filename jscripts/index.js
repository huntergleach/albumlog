// file upload button for album artwork input (create folder for photos)
// log albums as a div element below the input area
// !!display album artwork in the div element!!
// ??mouse hover event to reveal logged details with album transparency??


// declaring submit
  const attachSubmitFormEvent = event => {  
form().addEventListener('submit', Album.submitForm);
}

// on page load 
document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  Api.fetchAlbums();
})
