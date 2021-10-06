
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
>  **비동기**(`async`hronous: 동시에 일어나지 않는)
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

## `throw` 핸들링
* `throw`연산자는 에러를 생성합니다.
```ecamascript 6
throw <error object>
 ```
* 이론적으로는 숫자, 문자열 같은 원시형 자료를 포함한 어떤 것이든 에러 객체(error object)로 사용할 수 있습니다.
* 하지만 내장 에러와의 호환을 위해 되도록 에러 객체에 name과 message 프로퍼티를 넣어주는 것을 권장합니다.
* 자바스크립트는 `Error`, `SyntaxError`, `ReferenceError`, `TypeError`등의 표준 에러 객체 관련 생성자를 지원합니다.
* 이 생성자들을 이용해 에러 객체를 만들 수도 있습니다.
```ecmascript 6
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

* 일반 객체가 아닌 내장 생성자를 사용해 만든 내장 에러 객체의 name 프로퍼티는 생성자 이름과 동일한 값을 갖습니다.
* 프로퍼티 message의 값은 인수에서 가져옵니다.

```ecmascript 6

let error = new Error("이상한 일이 발생했습니다. o_O");

alert(error.name); // Error
alert(error.message); // 이상한 일이 발생했습니다. o_O
// 잘못된 데이터를 받았을 때, JSON.parse가 어떤 종류의 에러를 만들어내는지 아래 코드를 통해 살펴봅시다.

try {
  JSON.parse("{ 잘못된 형식의 json o_O }");
} catch(e) {
  alert(e.name); // SyntaxError
  alert(e.message); // Unexpected token b in JSON at position 2
}
```
* SyntaxError가 발생하네요.
* 사용자를 나타내는 객체에 name 프로퍼티는 반드시 있어야 하므로,
* 이제 name이 없으면 에러가 발생한 것으로 간주하고 예외 처리해봅시다.
* throw 연산자를 사용해 에러를 던져보겠습니다.
```ecmascript 6

let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}
```
* (*)로 표시한 줄에서 throw 연산자는 message를 이용해 SyntaxError를 생성합니다.
* 에러 생성 방식은 자바스크립트가 자체적으로 에러를 생성하는 방식과 동일합니다.
* 에러가 발생했으므로 try의 실행은 즉시 중단되고 제어 흐름이 catch로 넘어간 것을 얼럿 창을 통해 확인할 수 있네요.
* 이제 JSON.parse에서 에러가 발생한 경우를 포함해서 모든 에러를 catch 블록 안에서 처리할 수 있게 되었습니다.

## 에러 다시 던지기
* 위에선 '불완전한 데이터’를 다루려는 목적으로 try..catch를 썼습니다.
* 그런데 catch는 원래 try 블록에서 발생한 모든 에러를 잡으려는 목적으로 만들어졌습니다.
* 그런데 위 예시에서 catch는 예상치 못한 에러를 잡아내 주긴 했지만, 에러 종류와 관계없이 "JSON Error" 메시지를 보여줍니다.
* 이렇게 에러 종류와 관계없이 동일한 방식으로 에러를 처리하는 것은 디버깅을 어렵게 만들기 때문에 좋지 않습니다.
* 이런 문제를 피하고자 ‘다시 던지기(rethrowing)’ 기술을 사용합니다. 규칙은 간단합니다.
* catch는 알고 있는 에러만 처리하고 나머지는 ‘다시 던져야’ 합니다.



###‘다시 던지기’ 기술
* catch가 모든 에러를 받습니다.
* catch(err) {...} 블록 안에서 에러 객체 err를 분석합니다.
* 에러 처리 방법을 알지 못하면 throw err를 합니다.
* 보통 에러 타입을 instanceof 명령어로 체크합니다.
```ecmascript 6
try {
  user = { /*...*/ };
} catch(err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); //  정의되지 않은 변수에 접근하여 'ReferenceError' 발생
  }
}
```
####`err.name` 프로퍼티로 에러 클래스 이름을 알 수도 있습니다.
* 기본형 에러는 모두 `err.name` 프로퍼티를 가집니다. 또는 `err.constructor.name`를 사용할 수도 있습니다.

* 에러를 다시 던져서 catch 블록에선 `SyntaxError`만 처리되도록 해보겠습니다.
```ecmascript 6

let json = '{ "age": 30 }'; // 불완전한 데이터
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음");
  }

  blabla(); // 예상치 못한 에러

  alert( user.name );

} catch(e) {

  if (e instanceof SyntaxError) {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // 에러 다시 던지기 (*)
  }

}
```
* `catch` 블록 안의 (*)로 표시한 줄에서 다시 던져진(rethrow) 에러는 `try..catch` ‘밖으로 던져집니다’.
* 이때 바깥에 `try..catch`가 있다면 여기서 에러를 잡습니다. 아니라면 스크립트는 죽을 겁니다.

* 이렇게 하면 `catch` 블록에선 어떻게 다룰지 알고 있는 에러만 처리하고, 알 수 없는 에러는 ‘건너뛸 수’ 있습니다.

* 이제 `try..catch`를 하나 더 만들어, 다시 던져진 예상치 못한 에러를 처리해 보겠습니다.
```ecmascript 6

function readData() {
  let json = '{ "age": 30 }';

  try {
// ...
    blabla(); // 에러!
  } catch (e) {
// ...
    if (!(e instanceof SyntaxError)) {
      throw e; // 알 수 없는 에러 다시 던지기
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // 에러를 잡음
}
```
####`readData`는 `SyntaxError`만 처리할 수 있지만,
함수 바깥의 ``try..catch``에서는 예상치 못한 에러도 처리할 수 있게 되었습니다.

##try…`catch`…finally
###**잠깐! 에러 핸들링은 여기서 끝이 아닙니다.  <br>**
`try..catch`는 `finally`라는 코드 절을 하나 더 가질 수 있습니다. <br>
`finally`안의 코드는 다음과 같은 상황에서 실행됩니다. <br>

* 에러가 없는 경우:` try` 실행이 끝난 후
* 에러가 있는 경우: `catch` 실행이 끝난 후
* `finally`를 사용하면 `try..catch`를 다음과 같이 확장할 수 있습니다.

```ecmascript 6
try {
//... 코드를 실행 ...
} catch(e) {
//... 에러 핸들링 ...
} finally {
//... 항상 실행 ...
}
```

### 응용 코드 예시

```ecmascript 6
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );     // 무조건 실행
}
```
#### 위 코드는 두 가지 경로로 실행됩니다.

* "에러를 만드시겠습니까?"에
* 'OK’로 답한 경우: `try` -> `catch` -> `finally`
* 'No’로 답한 경우: `try` -> `finally`
* `finally` 절은 무언가를 실행하고, 실행 결과에 상관없이 실행을 완료하고 싶을 경우 사용됩니다.
***
###<a href ="https://ko.javascript.info/try-catch">출처: 'try..catch' 와 에러 핸들링</a>
***
> **[짤막지식]**
>
>JS의 `instanceof` 연산자는 생성자의 `prototype` 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.
***

***
##[21.10.06]
***
# JavaScript, `async`와 `awit`



##`async` & `await`란?
* `async`와 `await`는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다.
* 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와주죠.

##개발자에게 읽기 좋은 코드란?
처음 프로그래밍을 배웠을 때 아래와 같이 변수와 조건문을 사용하셨던 기억이 있으시죠?

```ecmascript 6

var user = {
  id: 1,
  name: 'Josh'
};
if (user.id === 1) {
  console.log(user.name); // Josh
}
```

* 이 코드는 user라는 변수에 객체를 할당한 뒤 조건문으로 사용자의 아이디를 확인하고 콘솔에 사용자의 name을 찍는 간단한 코드입니다.
* 우리는 이렇게 위에서부터 아래로 한 줄 한 줄 차근히 읽으면서 사고하는 것이 편합니다. 그렇게 프로그래밍을 배웠으니까요.

* 그래서 읽기 좋은 코드와 `async` & `await`가 무슨 상관이죠?
* 조금 전에 읽고 이해한 방식대로 코드를 구성하는 것이 `async`, `await` 문법의 목적입니다. 다음 코드를 한번 볼까요?
```ecmascript 6

var user = fetchUser('domain.com/users/1');
if (user.id === 1) {
  console.log(user.name);
}
```

* fetchUser()라는 메서드를 호출하면 앞에서 봤던 코드처럼 사용자 객체를 반환한다고 해보겠습니다.
* 그리고 여기서 fetchUser() 메서드가 서버에서 사용자 정보를 가져오는 HTTP 통신 코드라고 가정한다면 위 코드는 `async` & `await` 문법이 적용된 형태라고 보셔도 됩니다.

* 이게 대체 무슨 말인지 아래에서 함께 알아보겠습니다 :)

##`async` & `await` 맛보기
* 먼저 앞에서 살펴본 코드를 logName()이라는 간단한 함수로 감싸보겠습니다.
```ecmascript 6
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

* 이제 위 함수를 실행하면 아까와 동일하게 코드가 동작할 겁니다.
* 자 그리고 여기서 아래와 같이 `async`와 `await`를 추가해주면
```ecmascript 6
// 뭐가 바뀌었나, 안경쓰고 1분동안 처다봄;;
async function logName() {
  var user =  await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```
* 짜잔. 이게 바로 `async` `await` 코드입니다. 혹시 아직 이해가 정확히 안 가더라도 걱정 마세요. 지금부터 차근히 살펴볼게요! :)

## `async` & `await` 적용된 코드와 그렇지 않은 코드
* 자 저희가 조금 전에 본 코드가 대체 어떤 의미인지 한번 알아보겠습니다. 먼저 아까 살펴봤던 logName() 함수 코드를 다시 보겠습니다.
```ecmascript 6
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```
* 여기서 `fetchUser()`라고 하는 코드는 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정했습니다.
* 일반적으로 자바스크립트의 비동기 처리 코드는 아래와 같이 콜백을 사용해야지 코드의 실행 순서를 보장받을 수 있죠.
```ecmascript 6

function logName() {
// 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았습니다.
  var user = fetchUser('domain.com/users/1', function(user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}
```

* 이미 위와 같이 콜백으로 비동기 처리 코드를 작성하는 게 익숙하신 분들이라면 문제가 없겠지만,
* 이 사고방식에 익숙하지 않은 분들은 고개가 갸우뚱할 겁니다.


### 그래서 저희가 처음 프로그래밍을 배웠던 그때 그 사고로 돌아가는 것이죠. 아래와 같이 간단하게 생각하자구요.
```ecmascript 6
// 비동기 처리를 콜백으로 안해도 된다면..
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

* 서버에서 사용자 데이터를 불러와서 변수에 담고, 사용자 아이디가 1이면 사용자 이름을 출력한다.
* 이렇게 하려면 `async` `await`만 붙이시면 됩니다 :)

```ecmascript 6
// async & await 적용 후
async function logName() {
  var user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

##async & await 기본 문법
* 이제 `async` `await의` 기본 문법을 알아보겠습니다.

```ecmascript 6
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

* 먼저 함수의 앞에 `async` 라는 예약어를 붙입니다.
* 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙입니다.
* 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 `await`가 의도한 대로 동작합니다.
* 일반적으로` await`의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

## async & await 간단한 예제
* 그럼 문법을 좀 더 정확하게 이해하기 위해서 간단한 `async` `await` 코드를 보겠습니다.

```ecmascript 6
function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items)
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```


* 먼저 `fetchItems()` 함수는 **프로미스 객체를 반환하는 함수**입니다. 프로미스는 “**자바스크립트 비동기 처리를 위한 객체**“라고 배웠었죠.
* `fetchItems()` 함수를 실행하면 프로미스가 **이행(Resolved)** 되며 결과 값은 `items` 배열이 됩니다.

* 그리고 이제 `logItems()` 함수를 보겠습니다.
* `logItems()` 함수를 실행하면 `fetchItems()` 함수의 결과 값인 `items` 배열이 `resultItems` 변수에 담깁니다.
* 따라서, 콘솔에는 [1,2,3]이 출력되죠.

* `await`를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 .
* `then()`등을 사용해야 했을 겁니다. 하지만 `async` `await` 문법 덕택에 비동기에 대한 사고를 하지 않아도 되는 것이죠.

### ※참고: 만약 위 코드가 왜 비동기 처리 코드인지 잘 이해가 안 가신다면 fetchItems()를 아래의 함수들로 바꿔서 실행해보셔도 괜찮습니다 :)

```ecmascript 6
// HTTP 통신 동작을 모방한 코드
function fetchItems() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var items = [1,2,3];
      resolve(items)
    }, 3000);
  });
}

// jQuery ajax 코드
function fetchItems() {
  return new Promise(function(resolve, reject) {
    $.ajax('domain.com/items', function(response) {
      resolve(response);
    });
  });
}
```

## `async` & `await` 실용 예제
* `async` & `await` 문법이 가장 빛을 발하는 순간은 여러 개의 비동기 처리 코드를 다룰 때입니다.
* 아래와 같이 각각 사용자와 할 일 목록을 받아오는 HTTP 통신 코드가 있다고 하겠습니다.

```ecmascript 6
    function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {     // then()을 사용해, resolved(이행)된 함수를 가져옴
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function(response) {
    return response.json();
  });
}
```

* 위 함수들을 실행하면 각각 사용자 정보와 할 일 정보가 담긴 프로미스 객체가 반환됩니다.

### 자 이제 이 두 함수를 이용하여 할 일 제목을 출력해보겠습니다. 살펴볼 예제 코드의 로직은 아래와 같습니다.
* `fetchUser()`를 이용하여 사용자 정보 호출
* 받아온 사용자 아이디가 1이면 할 일 정보 호출
* 받아온 할 일 정보의 제목을 콘솔에 출력
```ecmascript 6
async function logTodoTitle() {
  var user = await fetchUser();
  if (user.id === 1) {
    var todo = await fetchTodo();
    console.log(todo.title); // delectus aut autem
  }
}
```

`* logTodoTitle()`를 실행하면 콘솔에 `delectus aut autem`가 출력될 것입니다. 
* 위 비동기 처리 코드를 만약 콜백이나 프로미스로 했다면 훨씬 더 코드가 길어졌을 것이고 인덴팅 뿐만 아니라 가독성도 좋지 않았을 겁니다. 
* 이처럼 `async` `await` 문법을 이용하면 기존의 비동기 처리 코드 방식으로 사고하지 않아도 되는 장점이 생깁니다.


## `async` & `await` 예외 처리
* `async` & `await`에서 예외를 처리하는 방법은 바로 try `catch`입니다. 
* 프로미스에서 에러 처리를 위해 `.catch()`를 사용했던 것처럼 `async`에서는 `catch {}` 를 사용하시면 됩니다.

* 조금 전 코드에 바로 `try catch` 문법을 적용해보겠습니다.
```ecmascript 6
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```
* 위의 코드를 실행하다가 발생한 네트워크 통신 오류뿐만 아니라 간단한 타입 오류 등의 일반적인 오류까지도 `catch`로 잡아낼 수 있습니다. 
* 발견된 에러는 `error` 객체에 담기기 때문에 에러의 유형에 맞게 에러 코드를 처리해주시면 됩니다.

***

***
> ###[짤막지식]
> ### `fetch`란?
> 원격 `API`를 간편하게 호출할 수 있도록 브라우저에서 제공하는 함수이다.
> ### `fetch` 사용법
> fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. <br>
> 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 `resolve`하고, <br>
> 실패했을 경우에는 예외(error) 객체를 `reject`합니다.

```ecmascript 6
fetch(url, options)
        .then((response) => console.log("response:", response))
        .catch((error) => console.log("error:", error));
``` 

* 옵션(options) 객체에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 등을 설정해줄 수 있습니다.
* 응답(response) 객체로 부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 등을 읽어올 수 있습니다.
* 참고로 fetch() 함수는 엄밀히 말해, 브라우저의 window 객체에 소속되어 있기 때문에 window.fetch()로 사용되기도 합니다.
***
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
<br>
<br>
<br>
<br>
<br>

***
END
***