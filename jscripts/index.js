// file upload button for album artwork input (create folder for photos)
// log albums as a div element below the input area
// !!display album artwork as the front of the div element!!
// ??mouse hover event to reveal logged details with album transparency??
// link that div element to a google search on a click event 

  const attachSubmitFormEvent = event => {  
form().addEventListener('submit', Album.submitForm);
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  Api.fetchAlbums();
})