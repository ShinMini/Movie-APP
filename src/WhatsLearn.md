# What's Learn Today!
* 오늘 공부한 내용을 기록하는 메모장
* 21.10.04일 최초 생성

# React `binding`이란?_[21.10.04]
1. `this` 를 가리키는  Context를 변경하여 바로 실행시켜주는 메서드 
=> 메서드의 재사용과 공유, 그리고 "중복"을 방지할 수 있다.
2. React 의 경우, 대부분 다른 `component`로 `pass`할 `method`만 `binding`하면 된다.
3. 화살표 함수를 사용할 경우, `this`는 상위태그를 가리키므로, `binding`을 사용하지 않아도 된다.

* React 바인딩의 다양한 예시: <a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dilrong&logNo=221542329638"> 블로그 링크 첨부</a>

# DOM이란?
* 문서 객체 모델(The Document object Model, 이하 DOM)은, HTML, XML 문서의 프로그래밍 interface 이다.
* DOM은 문서의 구조화된 표현(structured representation)을 제공하며, 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여, 언어가 문서구조, 스타일, 내용 등을 변경할 수 있게 돕는다.
* DOM은 구조화된 nodes와 property와 method를 갖고 있는 **[객체]** 로 문서를 표현해, 웹 페이지를 스크립트 또는 프로그래밍 언어들로부터 사용될 수 있게 연결시켜주는 역할을 담당한다.

### [세줄요약]
1. 웹 페이지는 웹브라우저를 통해 해석되는 일종의 문서(document)이다.
2. DOM은 동일한 문서를 표현, 저장, 조작하는 방법을 제시(제공)한다.
3. DOM은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 사용해 DOM을 수정할 수 있다.

* 참조: <a href = "https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction">
DOM소개, MDN</a>

# React의 기본 `component` 와 `Lifecycle`
###* `component`의 인스턴스가 생성되어 DOM상에 삽입될 때, 호출 순서
1. `static getDerivedStateFormProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `ComponentDidMount()`

###* porps 또는 state가 변경(업데이트)될 때, 컴포넌트가 다시 렌더링 될때 호출 순서
1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

###* 컴포넌트가 DOM상에서 제거될 때 호출
1. ` componentWillUnmount()`

###* 오류 처리
1. `static getDerivedStateFromError()`
2. `componentDidCatch()`

## [자주 사용되는 생명주기 메서드]
###1. `render()`
* `render()` 메서드는 클래스 컴포넌트에서 반드시 구현되어야하는 유일한 메서드이다.
* 이 메서드가 호출되면 `this.props`와 this.`state`의 값을 활용하여 `return` 해줘야 한다.
* `render()`**함수는 순수해야 한다.** 즉, 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환하애 하며, 브라우저와 직접적으로 상호작용을 하지 않습니다!

###2. `constructor()`
* 메서드를 바인딩하거나 `state`를 **초기화**하는 작업이 없다면, 해당 `react` 컴포넌트에는 생성자를 구현하지 않아도 된다.
* React 컴포넌트의 생성자는 해당 컴포넌트가 마운트되기 전에 호출됩니다. `React.Component`를 상속한 컴포넌트의 생성자를 구현할 때에는 다른 구문에 앞서 `super(props)`를 호출해야 합니다. 그렇지 않으면 `this.props`가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
* React에서 생성자는 보통 아래의 두 가지 목적을 위하여 사용됩니다.
1. `this.state`에 객체를 할당하여 지역 `state를 초기화`
2. 인스턴스에 `이벤트 처리 `메서드를 바인딩
***
###참고사항
* `constructor()`내부에서 **setState()** 를 호출하면 안된다. <br>
=> 컴포넌트에 `지역 state`가 필요하다면 생성자 내에서 `this.state`에 초기 `state값`을 할당하면 된다.

* 생성자는 `this.state`를 직접 할당할 수 있는 유일한 곳이다. 그 외 메서드에서는 `this.setState()`사용해 `state값`을 불러와야 한다.
* 생성자 내에서는 부수 효과를 발생시키거나 구독 작업(subscript)을 수행하면 안 된다.
이 경우에는, `componentDidMount()`를 대신 사용해야 한다.
***
###3. `componentDidMount()`
* `componentDidMount()`는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후 호출된다.
  * DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이뤄지면 된다. 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치이다.
  * 또한 구독을 설정하기에 좋은위치.(데이터 구독이 이뤄졌다면, `componentDidMount()`에서 구독 해제 작업을 반드시 수행할 것.)
* `componentDidMount()`에서 즉시 **setState()** 를 호출하는 경우, 이로인한 추가적인 렌더링이 발생하지만, 브라우저가 화면을 갱신하기 전에 이루어진다.
  * 이때, `render()`가 두 번 호출되지만, 사용자는 그 중간 과정을 볼 수 없다.
  * 이를 방지하기 위해, `constructor`메서드에서 초기 `state`를 할당할 수 있다. 하지만 모달(Modal) 또는 툴팁과 같이 렌더링에 앞아서 DOM 노드의 크기나 위치를 먼저 측정해야 하는 경우 이러한 방식이 필요할 수 있다.

###4. `componentWillUnmount()`
* `componentWillUnmount()`는 컴포넌트가 마운트 해제되어 제거되기 직전에 호출된다.
* 위 메서드 내에서 타이머 제거, 네트워크 요청 취소 등, `componentDidMount()`내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행한다.
***
###참고사항
* `componentWillUnmount()`가 한번 수행될 경우, 다시 렌더링되지 않으므로, `componentWillUnmount()`내에서 **setState()** 를 호출하면 안된다. 컴포넌트 인스턴트가 마운트 해제되고 나면, 절대로 다시 마운트되지 않는다.
***

참조: <a href = "https://ko.reactjs.org/docs/react-component.html">React 정식 홈페이지 문서</a>