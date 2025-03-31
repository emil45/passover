import { useState, useEffect } from "react";

export function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check for iOS - fixed TypeScript error
    const checkIOS = () => {
      const iOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as any).MSStream;
      setIsIOS(iOS);
    };

    checkIOS();
  }, []);

  return isIOS;
}
