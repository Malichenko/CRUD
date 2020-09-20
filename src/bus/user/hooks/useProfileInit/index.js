// Core
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

// Actions
import { userActions } from "../../actions";

// Hooks
import { useTimeout } from "../../../share/hooks/useTimeout";

export const useProfileInit = () => {
  const dispatch = useDispatch();
  const { profile, error } = useSelector((state) => state.user);
  const { isTimeout } = useTimeout();

  const handler = useCallback(
    (val) => {
      if (!profile) dispatch(userActions.setProfile(val));
    },
    [dispatch, profile],
  );

  useEffect(() => {
    const emailSeed = localStorage.getItem("seed");
    if (emailSeed) handler(emailSeed);
  }, [handler]);

  useEffect(() => {
    if (error && isTimeout)
      notification.error({
        message: "Feiled to fetch profile",
        description: "Please try out later again",
        duration: 0,
      });
  }, [error, isTimeout]);
};
