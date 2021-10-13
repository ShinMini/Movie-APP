import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from "react-router-dom";

function Movie({title, year, summary, poster, genres}) {
    return (
            <Link to={{pathname: '/movie-detail', state: {year, title, summary, poster, genres}, }}>
        <div className={"movie"}>
                <img src={poster} alt={title} title={title}/>
                <div className={"movie__data"}>
                    <h3 className={"movie__title"}>{title}</h3>
                    <h5 className={"movie__year"}>{year}</h5>
                    <ul className={"movie__genres"}>
                        {genres.map((genre, index) => {
                            return <li key={index} className={"movie__genre"}>{genre}</li>;
                        })
                        }
                    </ul>
                    <p className={"movie__summary"}>{summary.slice(0, 180)}...</p>
                </div>
        </div>
            </Link>
    );
}

Movie.propTypes = { // 정확한 type값 일치했는지 확인하기 위해 propTypes을 통해 검사해줌
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 영화 장르(배열)
    year: PropTypes.number.isRequired,  // 영화 발매 년도
    title: PropTypes.string.isRequired,     // 영화 이름(string)
    summary: PropTypes.string.isRequired,   // summary(string)
    poster: PropTypes.string.isRequired,    // 이미지 주소(string)가 저장   => 영화 포스터(movie poster)
};

export default Movie;