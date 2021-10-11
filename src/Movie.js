import React from "react";
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}) {
    return (
        <h4>
            {title}
        </h4>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,    // 영화 id
    year: PropTypes.number.isRequired,  // 영화 발매 년도
    title: PropTypes.string.isRequired,     // 영화 이름(string)
    summary: PropTypes.string.isRequired,   // summary(string)
    poster: PropTypes.string.isRequired,    // 이미지 주소(string)가 저장   => 영화 포스터(movie poster)
};

export default Movie;