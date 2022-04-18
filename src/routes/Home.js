import React from "react";
import  { Movie_dataes } from '../Movie/Movie_data.ts';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    state = {
        movies: [],
    };

    getMovies () {
        const movies = Movie_dataes;// 데이터 파일 가져오기. 
        this.setState({movies});
    };
    componentDidMount() {
        this.getMovies();
    }
    render(){
        const { movies } = this.state;
        return (
            <section className = "container">
            <div className="movies">
            {
                movies.map( movie => 
                    (
                        <Movie
                        key={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.poster}
                        />
                    )
                )
            }
            </div>
            </section>
        );
    }
}

export default Home;
