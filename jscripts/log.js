
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
        const titleH4 = document.createElement('h4');
        const pReleaseDate = document.createElement('p');
        const artworkdiv = document.createElement('img');
        // display the album artwork here (use different element)
        const pNotes = document.createElement('p');
       

        pArtist.innerText = this.artist;
        titleH4.innerText = this.title;
        pReleaseDate.innerText = `Released: ${ this.date }`;
        artworkdiv = this.artworkdiv
        // display uploaded file as 'cover' of div
        pNotes.innerText = this.notes;
       
        div.appendChild(pArtist);
        div.appendChild(titleH4);
        div.appendChild(pReleaseDate);
        div.appendChild(artworkdiv);
        // append artwork here 
        div.appendChild(pNotes);

        albumsDiv().appendChild(div);
       
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
      
      // document.getElementsByName('previewImage').reset();
      document.getElementById('form').reset();
     
    }
    
    
}