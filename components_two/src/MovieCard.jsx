import React from "react";

export default class MovieCard extends React.Component{
      constructor() {
            super();
            // Creating state object
            this.state = {
                  title: 'The Avengers',
                plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',
                price: 199,
                  star: 0,
                  fav: false,
                  addCart:true


            }
      }
      handleAddStar = () => {
            if (this.state.star < 10)
            {
                  this.setState({
                  star: this.state.star + 0.5
            });
            };

      };
      handleDeleteStar() {
            if (this.state.star > 0) {
                  this.setState({
                        star: this.state.star - 0.5
                  });
            };
      };
      handleFav = () => {
            this.setState(
                  {
                        fav:!this.state.fav
                  }
            )
      };
      handleCart = () => {
            this.setState(
                  {
                        addCart:!this.state.addCart
                  }
            )
      };
      render() {
            const { title, plot, poster, rating, price, star,fav,addCart } = this.state;
            return (
                  <div className="main">
                       <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                                  alt="Decrease"

                                                      src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                                      onClick={this.handleDeleteStar.bind(this)}

                                />
                                <img className="stars"
                                        alt="stars"
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                                      // No binding required as addStars() is an arrow function
                                                      onClick={this.handleAddStar}

                                />
                                <span className="starCount">{star}</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            {/* <button className="favourite-btn">Favourite</button>
                            */}
                                          {/* Change the element based on className */}

                                          <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "Un-Favourite" : "Favourite"}</button>

                                          {/* Conditional rendering of button */}
                                          {
                                               addCart?<button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>:<button onClick={this.handleCart}className="cart-btn">Remove to Cart</button>
                                          }


                        </div>
                    </div>

                </div>

                  </div>
            )
      }
}