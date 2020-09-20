// Core
import { useEffect, useState } from "react";

export const useTimeout = () => {
  const [isTimeout, setTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return {
    isTimeout,
  };
};
