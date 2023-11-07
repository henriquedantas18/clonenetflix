import React, { useEffect, useState } from "react";
import './App.css';
import tmdb from  './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () =>{

  const [movieList, setmovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

   useEffect(()=>{
    const loadall = async () => {
      //pegando a lista total
      let list = await tmdb.gethomelist();
      setmovieList(list);

        //pegando o Featured
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
       setFeaturedData(chosenInfo);
       
   }

    loadall();

   }, {});

   useEffect(()=>{
     const scrollListener = () => {
       if(window.scrollY > 10) {
        setBlackHeader(true);
        
       } else {
        setBlackHeader(false);
       }
     }

     window.addEventListener('scroll', scrollListener);
      
     return () => {
      window.removeEventListener('scroll', scrollListener);
     }
   }, []);

   return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
         <FeaturedMovie item={featuredData} />
      }

      <section  className="lists">
        {movieList.map((item, key)=>(
           <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
       Feito Por <span role="img" aria-label="emoji">😎</span> Henrique Silva<br/>
       Direitos de imagem para Netflix<br/>
       Dados pegos do site Themoviefb.org
      </footer>
           
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif://https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_960,c_limit/Netflix_LoadTime.gif.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" alt="Carregando"/>
        </div>
       }
    </div>
      
  ); 
}