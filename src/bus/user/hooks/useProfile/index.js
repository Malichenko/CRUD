// Core
import { useSelector } from "react-redux";

export const useProfile = () => {
  const { profile } = useSelector((state) => state.user);

  return {
    profile
  }
};
