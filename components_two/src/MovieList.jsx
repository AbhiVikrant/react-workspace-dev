import React from 'react';
import MovieCard from './MovieCard'
export default class MovieList extends React.Component{
      render() {
            return (
                  <>
                        <div className="movieListItems">
                              <MovieCard />
                              <MovieCard />
                               <MovieCard/>
                        </div>
                  </>
            )
      }
};