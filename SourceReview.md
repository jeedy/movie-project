# 소스 리뷰

1. start point 는 index.js 이다.
2. index.js에서 Root.js 모듈을 가져온다.
3. Root.js 는 React-router 모듈을 이용해 클라이언트 라우팅 역활을 한다. 
    > 리액트 자체에는 이 기능이 내장되어 있지 않다 react-router 는 서드파티 라이브러리다. 그러나 가장 많이 사용하는 library이고 페이지 전환을 하려면  필수로 사용해야할 모듈이다. react-native에서도 사용 가능하다.
4. Root.js 에서 Home.js 파일을 불러와 메인페이지를 그린다.
5. Home.js는 간단한 모듈들로 페이지 제작되어있다. 
6. 페이지 전환 -> 역시 React-router 를 이용해 전환된다.
8. 개발 서버는 특별한 설정없이 url을 직접 치고 들어가더라도 정상적으로 라우팅시켜준다. 
9. 그러나 운영에 빌드후 bundle로 배포되어 서버로 기동할 경우 직접치고 들어오는 url은 오류가 발생한다. 그런이유로 서버 라우팅을 추가해야한다. 
7. 서버 라우팅 방법
    - express 모듈을 설치하고 `/server/index.js` 파일에 static(`/build/static/`)을 제외한 모든 url 주소를 `/build/index.html` 로 전달시키는 설정을 한다.