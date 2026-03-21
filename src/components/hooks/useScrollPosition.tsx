import { useState, useEffect } from 'react';

// 스크롤 위치를 감지하는 커스텀 훅
export function useScrollPosition() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    // 스크롤 컨테이너는 <main> 태그입니다.
    const mainElement = document.querySelector('main');
    
    if (!mainElement) return;

    const handleScroll = () => {
      // 스크롤 위치가 0 (맨 위)일 때 true
      const currentScrollTop = mainElement.scrollTop;
      setIsTop(currentScrollTop < 5); // 5px 미만일 때 맨 위로 간주
    };

    mainElement.addEventListener('scroll', handleScroll);
    
    // 초기 상태 설정
    handleScroll();

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isTop;
}
