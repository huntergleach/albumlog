
class Album {
    static all = [];
  
    constructor(id, artist, title, date, artwork, notes) {
      this.id = id;
      this.artist = artist;
      this.title = title;
      this.date = date;
      this.artwork = artwork;
      this.notes = notes;
      Album.all.push(this)
    }

    display = () => {
        const div = document.createElement('div');
        const pArtist = document.createElement('p');
        const titleH3 = document.createElement('h4');
        const pReleaseDate = document.createElement('p');
        const imgArtwork = document.createElement('img');
        // display the album artwork here (use different element)
        const pNotes = document.createElement('p');
        const hr = document.createElement('hr');

        pArtist.innerText = `By: ${ this.artist }`;
        titleH3.innerText = this.title;
        pReleaseDate.innerText = `Released: ${ this.date }`;
        imgArtwork.innerHTML = ''
        // display uploaded file as 'cover' of div
        pNotes.innerText = this.notes;

        div.appendChild(pArtist);
        div.appendChild(titleH3);
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
        artwork: artworkInput().value,
        notes: notesInput().value
      }
   
      Api.postAlbum(album)
      
    
    }

    
}


// document.addEventListener('DOMContentLoaded', event => {
//   attachSubmitFormEvent();
//   Api.fetchAlbums();
// })
