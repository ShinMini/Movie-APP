import React from "react";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    state = {
        isLoading: true,
        movies: [],
    };

    render(){
        const {isLoading} =this.state;
        return (<div>{isLoading ? 'Loading...' : 'We are ready'}</div>);
    };
    getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies_details.json");
    };
    componentDidMount() {
        this.getMovies();
    };
}

export default App;
