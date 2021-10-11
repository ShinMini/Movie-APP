import React from "react";
import axios from 'axios';
import Movie from  './Movie';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {     // 받아온 객체 내 영화 데이터 정보값을 따로 분류해서 movies 에 저장
            data: {
                data: { movies }, // const movies 객체 생성
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");   // sort_by를 통해 별점 순서대로 정렬
        // 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약 가능함 => {movies: movies} == {movies}
        this.setState({movies: movies, isLoading: false});    // state 안에 있는 배열객체 movies 안에 getMovies()를 통해 저장된 movies 객체
        // movies 데이터를 가져온뒤 isLoading 값을 false 로 바꿔 로딩을 끝내줌
    };
    componentDidMount() {
        this.getMovies();
    }
    render(){
        const {isLoading, movies} =this.state;
        return (
            <div>
                {isLoading ? 'Loading...' : movies.map((movie) => {
                    return (
                        /*
                        getMovies를 통해 state 내부 movies에 저장된 데이터를 map으로 개별 분리해서
                        분리되어 받은 데이터(movie."")를 "Movie"component에 있는 props값으로 전달
                        */
                        <Movie
                            key = {movie.id}    // key값으로 api에서 받아온 기존 영화 id값 데이터 활용
                            id ={movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.medium_cover_image}
                        />
                    );
                })}
            </div>
        );
    };
}

export default App;
