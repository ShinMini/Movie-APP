
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

##### 참조: <a href = "https://ko.reactjs.org/docs/react-component.html">React 정식 홈페이지 문서</a>
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

> **[짤막지식]**
> > **git bash** 에서` git add`, `git commit`, `git push` 순서로 진행해 줘야함.
> > <br> **git bash** 에서 `git reset`을 활용해 이전 커밋을 삭제할 수 있다! (걱정마라)
> > <br> **git bash** 에서 `git clone <path_name>`을 사용해 코드를 "merge" 하지 않고 가져올 수 있다.
***

# JavaScript, `async`와 `awit`
***
# JavaScript, `try...catch`
##`try...catch`구문의 실행 방식
> `try...catch` **ex)**
>  ```ecmascript 6
>  try {    // ...(1)
>  console.log("에러가 없습니다.");    // ..(2)
>  } 
>  catch(err) {     // 변수 err는 사용자 지정 가능
>  console.log("에러가 검출되었습니다.");    // ..(3)
>  }
>  ```
* `try...catch`구문 실행 순서
1. try 내부 코드 실행...(1)
2. 에러가 검출되지 않을 경우, `try`안의 마지막 줄까지 실행되고, `catch`블럭은 건너 뜀...(2)
3. 에러가 검출될 경우, `try` 코드 안 실행이 중단되고, `catch(err)`블록으로 제어 흐름이 넘어간다.
<br>  **이때,** 변수 `err`은 무슨 에러가 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.

***
>**[짤막지식]**
> > 자바스크립트 엔진이 코드를 읽는 중에 발생하는 에러를 'parse-time error' 라고 한다. (어디가서 아는척 하자!)
***
* `try...catch`구문은 유효한 코드에서 발생하는 에러만 처리할 수 있다. 
<br> 이렇게 `try...catch`가 처리할 수 있는 에러를 **'런타임 에러(runtime-error)'** 또는 **'예외(exception)'** 라고 한다.
***
> **[짤막지식]** <br>
>  ##### 동기 (synchronous: 동시에 일어나는)
> > 요청과 동시에 결과가 주어져야 한다.(코드를 요청한 뒤 시간이 얼마가 걸리던 간에 요청한 자리에서 결과가 주어져야 한다.)
> > <br> **설계가 간단하고 직관적이다. 하지만 결과가 주어질 때까지 대기하는 자원(시간)을 효율적으로 사용하지 못한다.**
> 
>  **비동기**(asynchronous: 동시에 일어나지 않는)
> > 요청과 동시에 결과가 동시에 일어나지 않을거란 약속.
> > <br> **동기 처리에 비해 설계가 복잡하다. 하지만 결과가 주어질 때까지 대기하지 않고 
> 다른 작업을 수행할 수 있어 자원(시간)을 효율적으로 사용할 수 있다.**
***

##``try..catch``는 동기적으로 동작한다.
`setTimeout`처럼 ‘스케줄 된(scheduled)’ 코드에서 발생한 예외는 ``try..catch``에서 잡아낼 수 없습니다.

```ecmascript 6
try {
    setTimeout(function() {
        noSuchVariable; // 스크립트는 여기서 죽습니다.
    }, 1000);
} catch (e) {
    alert( "작동 멈춤" );
}
```
`setTimeout`에 넘겨진 익명 함수는 엔진이 ``try..catch``를 떠난 다음에서야 실행되기 때문입니다.

따라서, 스케줄 된 함수 내부의 예외를 잡으려면, ``try..catch``를 반드시 함수 내부에 구현해야 합니다.
```ecmascript 6
setTimeout(function() {
        // 함수 내부에서 try catch구문을 통해 에러를 검출한뒤 내보내줌.
    try {
        noSuchVariable; // 이제 `try..catch`에서 에러를 핸들링 할 수 있습니다!
    } catch {
        alert( "에러를 잡았습니다!" );
    }
    
}, 1000);
```

##에러 객체
* 에러가 발생하면 자바스크립트는 에러 상세내용이 담긴 객체를 생성합니다. 
* 그 후, catch 블록에 이 객체를 인수로 전달합니다.
```ecmascript 6
try {
// ...
} catch(err) { // <-- '에러 객체', err 대신 다른 이름으로도 쓸 수 있음
// ...
}
```
###내장 에러 전체와 에러 객체는 두 가지 주요 프로퍼티를 가집니다.

* `name`
  * 에러 이름. 정의되지 않은 변수 때문에 발생한 에러라면 `"ReferenceError"`가 이름이 됩니다.
* `message`
  * 에러 상세 내용을 담고 있는 문자 메시지
  표준은 아니지만, <br>  `name`과 `message` 이외에 대부분의 호스트 환경에서 지원하는 프로퍼티도 있습니다.<br>
  `stack`은 가장 널리 사용되는 비표준 프로퍼티 중 하나입니다.

* `stack`
  * 현재 호출 스택. 에러를 유발한 중첩 호출들의 순서 정보를 가진 문자열로 디버깅 목적으로 사용됩니다.
  
####[예시]
```ecmascript 6
try {
    lalala; // 에러, 변수가 정의되지 않음!
} catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

// 에러 전체를 보여줄 수도 있습니다.
// 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
    alert(err); // ReferenceError: lalala is not defined
}
```
##`‘try…catch’` 사용하기
* `try..catch` 실무에서 어떻게 사용되는지 알아봅시다.
* JSON으로 인코딩된 값을 읽을 수 있도록 해주는 JSON.parse(str) 메서드는 
<br>주로 서버 등에서 네트워크를 통해 전달받은 데이터를 디코딩하는 데 사용합니다.
* 전달받은 데이터에 JSON.parse를 호출하는 식으로 사용되죠.


```ecmascript 6

let json = '{"name":"John", "age": 30}'; // 서버로부터 전달받은 데이터

let user = JSON.parse(json); // 전달받은 문자열을 자바스크립트 객체로 변환

// 문자열 형태로 전달받은 user가 프로퍼티를 가진 객체가 됨
alert( user.name ); // John
alert( user.age );  // 30
```
잘못된 형식의 `json`이 들어온 경우, `JSON.parse`는 에러를 만들기 때문에 스크립트가 **‘죽습니다’**. <br>
서버에서 전달받은 데이터가 잘못되어 스크립트가 죽는 경우,  <br>
사용자는 개발자 콘솔을 열지 않는 이상 절대 원인을 알 수 없습니다.  <br>
그런데 사람들(고객)은 메시지 등을 통해 에러의 원인을 알지 못한 채 무언가가 '**그냥 죽는 것**'을 정말 싫어합니다. <br>

###`try..catch`를 사용해 이를 처리해 봅시다.
```ecmascript 6

let json = "{ bad json }";

try {
    let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
    alert( user.name ); // 이 코드는 동작하지 않습니다.
} catch (e) {
// 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
    alert( "데이터에 에러가 있어 재요청을 시도합니다." );
    alert( e.name );
    alert( e.message );
}
```
위 예시에선 에러가 발생했다는 걸 보여주기 위해 간단히 **예외처리**했지만,  <br>
catch 블록 안에서 새로운 네트워크 요청 보내기, 사용자에게 대안 제안하기,  <br>
로깅 장치에 에러 정보 보내기 등과 같은 구체적인 일을 할 수 있습니다.  <br>
스크립트가 죽도록 놔두는 것보다 훨씬 나은 대응이죠. <br>
***
###<a href ="https://ko.javascript.info/try-catch">출처: 'try..catch' 와 에러 핸들링</a>
***




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>