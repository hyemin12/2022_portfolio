import React, {
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

const useScrollMove = (setIsActive: Dispatch<SetStateAction<string>>) => {
  const contentRef = useRef<any>({});

  // 관찰하려는 요소가 영역으로 들어온 경우 실행되는 함수 (active)
  const handleScroll = useCallback(
    (observedContent: any) => {
      observedContent.forEach((content: any) => {
        contentRef.current[content.target.id] = content;
      });

      // isIntersecting : 본문 중 교차 영역에 들어와 있는 요소들 걸러내기
      const visibleContent: any = Object.values(contentRef.current).filter(
        (content: any) => content.isIntersecting
      )[0];

      // active 변경
      setIsActive(visibleContent?.target.id);
    },
    [setIsActive]
  );

  useEffect(() => {
    //1. 새로운 observer 설정
    // rootMargin : 어느정도의 영역을 관찰할 것인지
    // threshold : 어느 정도 비율로 교차했을 때 콜백을 실행할 것인지
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "-20% 0px",
      threshold: [0, 0.5, 1],
    });
    //2. DOM 요소 찾고 Observer달아주기
    const contents = document.querySelectorAll(".sectionRef");
    const copyArr = Array.from(contents);

    copyArr.forEach((content) => observer.observe(content));
    //3. 언 마운트시 옵저버 해제
    return () => observer.disconnect();
  }, [handleScroll]);
};

export default useScrollMove;
