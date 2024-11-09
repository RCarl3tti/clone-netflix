import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadall = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
    }

    loadall();

  }, []);

  useEffect(()=>{

    const scrollListener = () => {
      if(window.scrollY > 10){
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

      <Header black={blackHeader}/>

      <FeaturedMovie />


      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
      ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> por Renan Carletti <br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

    </div>
  );
}
 export default App;