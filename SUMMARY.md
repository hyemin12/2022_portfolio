# 스크롤 내리거나 올렸을 때 특정 element를 만나면 state를 변경하는 hook

### 프로그래머 답지 않게 내가 작성했던 코드...

- useRef를 사용해서 해당 dom element를 선택해서 특정 element를 만나면 setIsActive를 통해 active 를 관리하고 싶었으나, 컴포넌트들이 쪼개져있어서 구현하지 못했음..

### 작성한 코드

- 각 항목들의 offsetTop값을 담은 배열을 정의
- 각 항목들의 높이에 따라 setIsActive를 통해 active값 변경시킴

```
=> 브라우저 첫 로드시 window.pageYOffset 값이 null 로 나타나는 오류가 발생함
```

```js
/** scroll 하면 isActive 바꾸는 함수 \*/
const handleActive = () => {
  /** 데이터 ref의 윈도우 높이값 배열 */
  var areaArr: any = [...navData].map(
    (data) => document.getElementById(data.ref).offsetTop
  );

  if (window.pageYOffset !== null) {
    setScrollY(window.pageYOffset);
    if (scrollY < areaArr[0]) {
      setIsActive(0);
    } else if (areaArr[0] < scrollY && scrollY < areaArr[1]) {
      setIsActive(1);
    } else if (areaArr[1] < scrollY && scrollY < areaArr[2]) {
      setIsActive(2);
    } else if (areaArr[2] < scrollY && scrollY < areaArr[3]) {
      setIsActive(3);
    } else if (areaArr[3] < scrollY && scrollY < areaArr[4]) {
      setIsActive(4);
    } else if (areaArr[4] < scrollY && scrollY < areaArr[5]) {
      setIsActive(5);
    } else if (areaArr[5] < scrollY && scrollY < areaArr[6]) {
      setIsActive(6);
    }
  }
};

useEffect(() => {
  function scrollListener() {
    window.addEventListener("scroll", handleActive);
  }
  scrollListener();
  return () => {
    window.removeEventListener("scroll", handleActive);
  };
});
```

참고 사이트 : https://velog.io/@apsn2000/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%81%AC%EB%A1%A4-%ED%95%98%EB%8A%94-%EC%98%81%EC%97%AD%EC%9D%98-TOC-%ED%99%9C%EC%84%B1%ED%99%94%ED%95%98%EA%B8%B0
