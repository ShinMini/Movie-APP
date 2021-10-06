***
# Summary of what I learned today._ created [21.10.06]
***

### [21.10.06]
1. `async`와 `await`는 기존 비동기 처리방식(콜백 함수, 프로미스)의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와준다.


2. `async` & `await` 기본문법
    ```ecmascript 6
   async function 함수명() {
   await 비동기_처리_메서드_명();
   }
   ```
   1. 먼저 함수의 앞에 `async` 라는 예약어를 붙인다. 
   2. 예약어를 붙인 함수의 내부 로직 중 비동기 처리 코드 앞에 `await`를 붙인다.
      * [주의사항]
      * 비동기 처리 메서드가 꼭 **프로미스 타입의 객체**를 반환해야 `await`가 의도한 대로 동작한다.
      * 일반적으로 `await`의 대상이 되는 비동기 처리 코드는 `Axios` 등 프로미스를 반환하는 API 호출 함수이다.


3. `fetch`란 원격 `API`를 간편하게 호출할 수 있도록 브라우저에서 제공하는 함수로,<br>
   첫번째 인자로 URL, 두번째 인자로 옵션객체를 받아 **프로미스 타입의 객체**를 반환한다.