import React from "react";
import "./FeaturedMovie.css";
import featuredImg from "../../assets/images/featured.jpg";

const FeaturedMovie = () => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${featuredImg})`,
      }}
    >
      <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">Thainara & Renan</div>
                <div className="featured--info">
                    <div className="featured--points">10 pontos</div>
                    <div className="featured--year">2022</div>
                    <div className="featured--seasons">2 temporadas</div>
                </div>
                <div className="featured--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className="featured--buttons">
                    <a href="" className="featured--watchbutton">► Assistir</a>
                    <a href="" className="featured--mylistbutton">+ Minha Lista</a>

                </div>
                <div className="featured--genres"><strong>Gêneros:</strong> Romance, Drama, Comédia</div>
            </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
