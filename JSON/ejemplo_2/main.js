import { displayMovie } from "./helpers";


/*se va a generar una pagina en la que se va a basar en una pagina de peliculas 
primero se generar una API key desde la pagina themoviedb.org */
const tmdbKey = '6091141b60a66f9e8f62c2c7bd109638';
//se pone el url de la pagina 
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
//este es el elelemtno del boton de la pagina HTML
//const playBtn = document.getElementById('playBtn');

//se va a generar una funcion asincrona en la que se va a solicitar a la API generar un JSON de todos los generos que maneja la pagoina
const getGenres =async () => {
//se genera una constante que va a contener la ruta de la api para obtener los generos de las peliculas
  const genreRequestEndpoint = '/genre/movie/list';
//se quiere que la busqueda sea un poco mas ordenada, se va a generar otra variable 
  const requestParams= `?api_key=${tmdbKey}` 
//se agregara una variable que va a contener la ruta de la api junto con los parametros de la busqueda
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`; 
  //se abre un try catch para que si hay un error se muestre en consola
  try{
    // se genera una variable response que contiene un fetch() GET dentro de la funcion va la variable urlToFetch
    const response= await fetch(urlToFetch);
    //se va a generar un condicional que va a verificar si la respuesta es correcta
    if (response.ok){
      //se genera una variable de la respuesta que va a ser convertida en JSON
      const jsonResponse = await response.json();
      //como da como resultado un objeto, la llave se llama genres y el valor es un arreglo, queremos solo el arreglo
      const arregloGeneros=await jsonResponse.genres
      //queremos que al llamar a esa funcion nos retorne el arreglo con los generos
      return(arregloGeneros)
  }
  }
  catch (error) {
    console.log(error); 
  }

};


const getMovies =async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint='/discover/movie'
  const requestParams=`?api_key=${tmdbKey}&with_genres=${selectedGenre}`
  const urlToFetch=`${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`
  try{
    const response=await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse=await response.json()
      const movies=jsonResponse.results
      return movies 
    }

  }catch (error){
    console.log(error)
  }
};


const getMovieInfo = async (movies) => {
  let movieid=movies.id
  let movieEndpoint=`/movie/${movieid}`
  let requestParams=`api_key=${tmdbKey}`
  let urlToFetch=`${tmdbBaseUrl}${movieEndpoint}${requestParams}`
  try{
    const response=await fetch(urlToFetch)
    if(response.ok){
      const movieInfo=await response.json()
      return movieInfo
    }

  }
  catch(error){
    console.log(error)
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  let movies=await getMovies()
  let randomMovie=getRandomMovie(movies)
  let info=await getMovieInfo(randomMovie)
  displayMovie(info)

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
