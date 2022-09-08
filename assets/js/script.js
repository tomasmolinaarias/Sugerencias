// console.log('hi')
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//----------------------IIFE---------------------//

let FpFp = (() => {
  let FuncionPrivada = (url, id) => {
    id.setAttribute("src", url);
  };
  return {
    FuncionPublica: (url, id) => FuncionPrivada(url, id),
  };
})();

//-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+
//----------------------PADRE------------------//

class Multimedia {
  constructor(url) {
    this.url = url;
  }
  get getUrl() {
    return (this.url = url);
  }

  set setUrl(url) {
    return (this.url = url);
  }
  setInicio() {
    return `para cambios`;
  }
}

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//----------------------HIJ@--------------------//

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    FpFp.FuncionPublica(this.url, this.id);
  }
  setInicio(time) {
    this.id.setAttribute("src", `${this.url}?start=${time}`);
  }
}

//-+-+-+-+-+--+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//---------------------------MUSICA-------------------------//

const musica = document.querySelector("#musica");
const musicaUrl = "https://www.youtube.com/embed/YfxiLBhJiLU";

const MUSICA = new Reproductor(musicaUrl, musica);
MUSICA.playMultimedia();
MUSICA.setInicio(3);

//--+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//---------------------------PELICULA---------------------------//

const peliculas = document.querySelector("#peliculas");
const peliculaUrl = "https://www.youtube.com/embed/QocnYry9xMQ";

const pelicula = new Reproductor(peliculaUrl, peliculas);
pelicula.playMultimedia();
pelicula.setInicio(145);

//+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//-------------------------SERIES-----------------------------//

const series = document.querySelector("#series");
const serieUrl = "https://www.youtube.com/embed/DR0qetJBhYk";

const Serie = new Reproductor(serieUrl, series);
Serie.playMultimedia();
Serie.setInicio(732);
