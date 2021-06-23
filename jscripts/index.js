// file upload button for album artwork input (create folder for photos)
// log albums as a div element below the input area
// !!display album artwork as the front of the div element!!
// ??mouse hover event to reveal logged details with album transparency??
// link that div element to a google search on a click event 

              // const attachSubmitFormEvent = event => {
              //   form().addEventListener('submit', submitForm);
              // }
              // const submitForm = event => {
              //   event.preventDefault();
  

  const attachSubmitFormEvent = event => {  
form().addEventListener('submit', Album.submitForm);
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  Api.fetchAlbums();
})
  // let album = {
  //   title: titleInput().value,
  //   artist: artistInput().value,
  //   date: dateInput().value,
  //   genre: artworkInput().value,
  //   notes: notesInput().value
  // }


// //   SET UP THE RIGHT FECTH FUNTION
//   fetch('http://localhost:3000', {
//     method: "POSt",
//     headers: {
//       "Accept": "application/JSON",
//       "Content-Type": "application/JSON"
//     },
//     body: JSON.stringify( album )
//   })
//     .then(resp => resp.json())
//     .then(album => displayAlbums(album))

// }


// const loadAlbums = () => {

//   fetch('http://localhost:3000')
//     .then(resp => resp.json())
//     .then(album => album.forEach(album => displayAlbums(album)))
 
// }


