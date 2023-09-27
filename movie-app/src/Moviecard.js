import React from "react";
import avenger from './Images/avenger.jpg'
class MovieCard extends React.Component{
      render() {
            return(
            <div className="main">
                  <div className="movie-card">
                        <div className="left">
                                    <img src={avenger} alt="Poster" />
                        </div>
                              <div className="right">
                                    <div className="title">Avenger</div>
                                    <div className="plot">Action Fiction </div>
                                    <div className="price">RS 499</div>
                                    <div className="footer">
                                          <div className="rating">4.8</div>

                                          <div className="star-dis">
                                                <img src="https://cdn-icons-png.flaticon.com/128/6057/6057365.png" alt="minus" className="str-btn"  />
                                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/11540/11540146.png" alt="star"  />
                                                <img src="https://cdn-icons-png.flaticon.com/128/814/814208.png" alt="plus" className="str-btn" />
                                                <span className="starCount">0</span>

                                          </div>

                                          <button className="favourite-btn">Favourite-btn</button>
                                          <button className="cart-btn">cart-btn</button>
                                    </div>

                        </div>
                  </div>
                  </div>
            )
      }
};
export default MovieCard;