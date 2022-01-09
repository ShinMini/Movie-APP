import React from "react";

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
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
        /* axios는 네트워크를 사용하므로 느리게 동작하기 때문에 axios get()이 반환한 영화 데이터를 잡으려면 자바스크립트에게
        axios.get()을 포함하고 있는 함수의 실행이 끝날 때까지 시간이 걸릴 수 있다고 주기 위해 axios.get()의 실행을 분리할 새 함수를 만들어줌. */
        const movies = await moivesInfo () => {}; 
    };
    componentDidMount() {
        this.getMovies();
    };
}
moivesInfo()
export default App;
