
# What's Learn Today!
* 오늘 공부한 내용을 기록하는 메모장
* 21.10.04일 최초 생성
***
***
##[21.10.04]
***
# React `binding`이란?
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
***

***
# [21.10.05]
***
# JavaScript, 비동기 처리, 콜백 함수, Promise
### 공부해볼 내용
* 자바스크립트가 비동기 처리를 하는 이유?
* 비동기 처리를 유연하게 하기위한 콜백 함수.
* Promise란?, Promise를 왜 사용해야 하는지?

### 비동기 처리란?
* 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 다음 코드를 먼저 실행
<br> => 데이터를 요청한뒤, 받아올 때까지 기다려주지 않고, 바로 다음 코드 실행, 이처럼 특정 로직의 실행이 끝날  때까지 기다려주지 않고 나머지 코드를 실행하는 것이 비동기 처리이다.
* ex) `setTimeout()`, `callbackFunc()` ..etc

### 자바스크립트가 비동기 처리를 하는 이유
* 만약 자바스크립트가 비동기처리를 하지 않고, 실행된 특정 코드가 모두 완료될 때까지 기다린 뒤 이어진 코드를 실행하는 방식이라면, 코드의 처리 시간이 길어짐에 따라, 이어진 코드의 실행이 지연돼 웹 구조의 전체 구현 시간이 길어질 수 있다.
* 이러한 처리시간에 따른 웹 로딩 시간의 증가를 방지하고자, 자바스크립트는 코드의 처리시간에 비교적 영향을 덜 받을 수 있는 비동기 처리로 코드를 해석한다.

### Promise란?
* "A promise is an object that may produce a single value some time in the future"
<br> => 자바스크립트 비동기 처리에 사용되는 객체

### Promise의 3가지 상태(state)
 * 이때, 상태(state)란 프로미스의 처리 과정을 의미한다.
 * `new Promise()`로 프로미스가 생성되고 종료될 때까지 프로미스는 3가지 상태(state)를 갖는다.
   * Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
   * Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
   * Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
***
###`pending(대기)`
아래와 같이 `new Promise()` 메서드를 호출하면 pending(대기)상태가 된다.
  
```ecmascript 6
new Promise()
```
`new Promise()` 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백함수의 인자는 `resolve`, `reject`이다.
```ecmascript 6
new Promise(function(resolve, reject) {
  // ...
});
```
### Fulfilled(충족, 이행, 완료)
여기서 콜백 함수의 인자 `resolve`를 아래와 같이 실행하면 이행(Fulfilled) 상태가 됩니다.
```ecmascript 6
new Promise(function(resolve, reject) {
  resolve();
});
```
그리고 이행 상태가 되며 아래와 같이 `then()`을 이용하여 처리 결과 값을 받을 수 있습니다.
```ecmascript 6
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
```
### Rejected(실패)
`new Promise()`로 프로미스 객체를 생성하면 콜백 함수 인자로 `resolve`와 `reject`를 사용할 수 있다.
여기서 `reject`를 아래와 같이 호출하면 실패(Rejected) 상태가 된다.

```ecmascript 6
new Promise(function(resolve, reject) {
  reject();
});
```
그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)을 `catch()`로 받을 수 있습니다.
```ecmascript 6
function getData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});
```

###Promise를 사용한 예제
```ecmascript 6
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {   // response에 값이 있을경우, 값 저장
        resolve(response);
      }
      reject(new Error("Request is failed"));   // 값이 없을 경우, error메시지 출력
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {    // 에러 발생 원인 출력
  console.error(err); // Error 출력
});
```
위 코드는 서버에서 제대로 응답을 받아오면 resolve() 메서드를 호출하고, 응답이 없으면 reject() 메서드를 호출하는 예제입니다. 호출된 메서드에 따라 then()이나 catch()로 분기하여 응답 결과 또는 오류를 출력합니다.
### 여러개의 Promise를 연결한 예시
프로미스의 또 다른 특징은 여러 개의 프로미스를 연결하여 사용할 수 있다는 점이다. 앞 예제에서 `then()`
메서드를 호출하고 나면 새로운 프로미스 객체가 반환된다. 따라서, 아래와 같은 코딩이 가능하다.

```ecmascript 6
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);     // resolve()를 사용해 값 1 저장
  }, 2000);     // 2초 후 resolve()를 호출
})  // resolve()가 호출되면 프로미스가 대기 상태에서 이행 상태로 넘어가기 때문에 첫 번째 
    // .then()의 로직으로 넘어감
    
.then(function(result) {    // then()을 사용해 resolve()에 저장되어 있던 값 호출
  console.log(result); // 1 출력
  return result + 10;   // result에 10을 더한 뒤, 그 다음 then()으로 넘겨줌
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```

### 실무에서 있을법한 예제로 Promise 알아보기
```ecmascript 6
getData(userInfo)
    .then(parseValue)
    .then(auth)
    .then(diaplay);
```
위 코드는 페이지에 입력된 사용자 정보를 받아와 파싱, 인증 등의 작업을 거치는 코드이다.
여기서 userInfo는 사용자 정보가 담긴 객체를 의미하고, 
parseValue, auth, display는 각각 프로미스를 반환해주는 함수라고 가정한다.

```ecmascript 6
var userInfo = {
  id: 'test@abc.com',
  pw: '****'
};

function parseValue() {
  return new Promise({
    // ...
  });
}
function auth() {
  return new Promise({
    // ...
  });
}
function display() {
  return new Promise({
    // ...
  });
}
```
이처럼 여러 개의 프로미스를 .then()으로 연결하여 처리할 수 있습니다.

### Promise의 에러 처리 방법
1. `then()`의 두 번째 인자로 에러를 처리하는 방법
```ecmascript 6
getData().then(
  handleSuccess,
  handleError
);
```

2. `catch()`를 이용하는 방법
```ecmascript 6
getData().then().catch();
```

위 두가지 방법 모두 Promise의 `reject()`메서드가 호출되어 실패 상태가 된 경우에 실행된다. 
<br> => 프로미스의 로직이 정상적으로 돌아가지 않는 경우 호출.
####[예시]
```ecmascript 6
function getData() {
  return new Promise(function(resolve, reject) {
    reject('failed');
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(function() {
  // ...
}, function(err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 코드
getData().then().catch(function(err) {
  console.log(err);
});
```
#### 이때, `catch()`를 통한 예외 처리 방식이 더 많은 에러를 잡아낼 수 있으므로, 가급적 `catch()`를 사용하자!
***
<a href="https://joshua1988.github.io/web-development/javascript/promise-for-beginners/">[출처]Promise를 활용한 예제 및 참고자료</a>
***
# JavaScript, `async`와 `awit`


