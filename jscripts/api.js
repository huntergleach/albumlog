class Api {
    static baseUrl = 'http://localhost:3000';
  
    static fetchAlbums = () => {
      fetch(Api.baseUrl + '')
      .then(resp => resp.json())
      .then(data => {
        data.forEach(albumData => {
          let album = new Album(albumData.id, albumData.artist, albumData.title, albumData.date, albumData.artwork, albumData.notes)
          album.display()
        })
      })
    }
  
    static postAlbum = album => {
      fetch(Api.baseUrl + '', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify( album )
      })
      .then(resp => resp.json())
      .then(albumData => {
        let album = new Album(albumData.id, albumData.artist, albumData.title, albumData.date, albumData.artwork, albumData.notes)
        album.display()
      })
    }
  }