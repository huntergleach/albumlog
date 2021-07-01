
class Album {
    static all = [];
  
    constructor(id, artist, title, genre, artwork, notes) {
      this.id = id;
      this.artist = artist;
      this.title = title;
      this.genre = genre;
      this.artwork = artwork;
      this.notes = notes;
      Album.all.push(this)
    
    }
   
   
    display = () => {
        const div = document.createElement('div');
        // div.setAttribute('href', 'https://www.google.com')
        const pArtist = document.createElement('p');
        const titleH4 = document.createElement('h4');
        const pGenre = document.createElement('p');
        const albumArt = document.createElement('img');
        // setAttribute?
        // display album artwork here
        const pNotes = document.createElement('p');
       
         console.log(this)
         
        pArtist.innerText = this.artist;
        titleH4.innerText = this.title;
        pGenre.innerText = this.genre;
        albumArt.display = this.artowrk;
        pNotes.innerText = this.notes;

     
        
        div.appendChild(pArtist);
        div.appendChild(titleH4);
        div.appendChild(pGenre);
        div.appendChild(albumArt);
        // append artwork here 
        div.appendChild(pNotes);

        albumsDiv().appendChild(div);
       
    }
      
    
    static submitForm = event => {
      event.preventDefault();
      
      // getImagePreview().innerHTML= ''
      // const file = getFileUpload().files[0]
      // const albumArt = document.createElement('img');
      // img.src = img.url
      
      let album = {
        artist: artistInput().value,
        title: titleInput().value,
        genre: genreInput().value,
        artwork: artworkInput().value,
        notes: notesInput().value
      }
   
      Api.postAlbum(album)
      
    
      document.getElementById('form').reset();
      // document.getElementsByName('previewContainer').reset();
     
    }
    
    
}