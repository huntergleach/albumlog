
class Album {
    static all = [];
    // building the container for album
    constructor(id, artist, title, genre, artwork, notes) {
      this.id = id;
      this.artist = artist;
      this.title = title;
      this.genre = genre;
      this.notes = notes;
      this.artwork = artwork;
      Album.all.push(this)
    
    }
   
   
    display = () => {
        // details creation
        const albumContainer = document.createElement('div');
        albumContainer.setAttribute('id', 'albumContainer')
        const pArtist = document.createElement('p');
        const titleH4 = document.createElement('h4');
        const pGenre = document.createElement('p');
        const pNotes = document.createElement('p');
        // artwork creation
        const albumArtwork = document.createElement('img');
        albumArtwork.setAttribute('id', 'topLayer')
        albumArtwork.setAttribute('class', 'artDisplay');
        albumArtwork.setAttribute('src', this.artwork);
       
        
        // populating elements
        pArtist.innerText = this.artist;
        titleH4.innerText = this.title;
        pGenre.innerText = this.genre;
        pNotes.innerText = this.notes;

     
        // adding elements to div 
        albumContainer.appendChild(pArtist);
        albumContainer.appendChild(titleH4);
        albumContainer.appendChild(pGenre);
        albumContainer.appendChild(pNotes);
        albumContainer.appendChild(albumArtwork);

        albumsDiv().appendChild(albumContainer);
          
    }
      
    // submit event
    static submitForm = event => {
      event.preventDefault();

      const file = getFileUpload().files[0]
      const dataUrl = window.URL.createObjectURL(file);
      // album content assignment 
      let album = {
        artist: artistInput().value,
        title: titleInput().value,
        genre: genreInput().value,
        notes: notesInput().value,
        artwork: dataUrl,
      }
      
      Api.postAlbum(album)
      
      document.getElementById('form').reset();
      
    }
    
}