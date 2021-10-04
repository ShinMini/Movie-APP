import React from "react";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = () => {     // axios는 네트워크를 사용하므로 느리게 동작함,
        // 따라서 axios get()이 반환한 영화 데이터를 잡으려면 자바스크립트에게 axios.get()을 포함하고 있는 함수의 실행이 끝날 때까지 시간이 걸릴 수 있다고 말해줘야함.
        // 때문에 axios.get()의 실행이 분리될 수 있도록 새 함수를 만들어줌.
        const movies = axios.get("https://yts.mx/api/v2/list_movies_details.json");
    }
    componentDidMount(){    //
     this.getMovies();
    }
    render(){
        const {isLoading} =this.state;
        return (<div>{isLoading ? 'Loading...' : 'We are ready'}</div>);
    }
}

export default App;
