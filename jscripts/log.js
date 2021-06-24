
class Album {
    static all = [];
  
    constructor(artist, title, date, artwork, notes) {
      this.artist = artist;
      this.title = title;
      this.date = date;
      this.artwork = artwork;
      this.notes = notes;
      Album.all.push(this)
    }

    display = () => {
        const div = document.createElement('div');
        const titleH3 = document.createElement('h3');
        const artistH4 = document.createElement('h4');
        const pReleaseDate = document.createElement('p');
        const imgArtwork = document.createElement('img');
        // display the album artwork here (use different element)
        const pNotes = document.createElement('p');
        const hr = document.createElement('hr');

        titleH3.innerText = album.title;
        artistH4.innerText = `By: ${ album.artist }`;
        pReleaseDate.innerText = `Released: ${ album.date }`;
        // imgArtwork.innerHTML = album.artwork;
        // display uploaded file as 'cover' of div
        pNotes.innerText = notesInput;

        div.appendChild(titleH3);
        div.appendChild(artistH4);
        div.appendChild(pReleaseDate);
        div.appendChild(imgArtwork);
        // append artwork here 
        div.appendChild(pNotes);

        albumsDiv().appendChild(div);
        albumsDiv().appendChild(hr); 
    }
      
    
    static submitForm = event => {
      event.preventDefault();
      
      let album = {
        artist: artistInput().value,
        title: titleInput().value,
        date: dateInput().value,
        // artwork: artworkInput().value,
        notes: notesInput().value
      }
    
      Api.postAlbum(album)
    
    }

    
}


// document.addEventListener('DOMContentLoaded', event => {
//   attachSubmitFormEvent();
//   Api.fetchAlbums();
// })
