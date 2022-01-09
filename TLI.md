# TLI 
---
### 21.12.07
---
## Why using `<Link to>` method?
-> if you use `<a>` the page is refreshed; so need to avoid refresh 
-> using `<Link>` tag that suported by react router :)

### example 
>   this example explain to how to use react router link tag
> > `  <li><Link to="/">Home</Link></li>`

## what's the react-router-dom?
-> react-router using in browser
:  you can install using yarn -> yarn add react-router-dom 
## cross-env 
-> when set environment variable to call using NODE_PATH(absolute path) in project the call mechanism is diffrent by Operating System, but cross-env is library that make comman calling mechanism to all OS 


--- 
### 21.12.08
---
## router reading parms 
* 라우트 파라미터 읽기 라우트의 경로에 특정 값을 넣는 방법을 알아보겠습니다. 
* 방법은 두가지가 있는데요, params 를 사용하는 것 과, query 를 사용하는 것 입니다.

* 라우트로 설정한 컴포넌트는, 3가지의 props 를 전달받게 됩니다:

* history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
* location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
* match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.
<a href = "https://react-router.vlpt.us/1/02.html">출처</a>