const API_KEY = 'b83c9f89abced14063fa3924b08a548e';
const API_BASE ='https://api.themoviedb.org/3/';
/*
  - originais netflix
  - recomendados (trending)
  - em alta (top rated)
  - ação
  - comedia
  - terror
  - romance
  - documentario
*/

const basicfetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

    export default {
        gethomelist: async () => {
            return [
            {
                slug: `originals`,
                title: `Originais Ricklix`,
                items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {

                slug:`trending`,
                title:`Recomendados para Você`,
                items: await basicfetch (`/trending/all/week?languagept-BR&api_key=${API_KEY}`) 
            },
            {
                slug:`toprted`,
                title:`Em Alta`,
                items: await basicfetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:`action`,
                title:`Ação`,
                items: await basicfetch (`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },     {
                slug:`tcomedy`,
                title:`Comedia`,
                 items: await basicfetch (`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },     {
                slug:`horror`,
                title:`Terror`,
                 items: await basicfetch (`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },     {
                slug:`romance`,
                title:`Romance`,
                 items: await basicfetch (`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:`documentary`,
                title:`Documentario`,
                  items: await basicfetch (`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            },
        

        ];
      }, 
       getMovieInfo: async (movieId, type) => {
          let info = {}; 
                  
          if(movieId) {
            switch(type) {
                case 'movie':
                     info = await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                     info = await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;    
            }
          }

          return info;
       }

    }