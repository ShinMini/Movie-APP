import React from "react";

class Detail extends React.Component {
    //componentDidMount() 생명주기 함수를 사용해 Detail 컴포넌트가 마운트 될 때 push 함수를 실행하기 위해,
    // Detail 을 function 이 아닌 class 로 생성
    componentDidMount() {
        const { location, history} = this.props;    // this.props 엔 movies.js 에서 받아온 state 값들이 들어있음(영화정보)
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <span>
                    {location.state.title}
                </span>);
        } else {
            return null;
        }
    }
}

export default Detail;
