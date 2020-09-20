// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

// Actions
import { contactsActions } from "../../actions";

// Helpers
import { randomNum } from "../../../../helpers/randomNum";

// Hooks
import { useTimeout } from "../../../share/hooks/useTimeout";

export const useContactsInit = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.contacts);
  const { isTimeout } = useTimeout();

  useEffect(() => {
    const viewMode = localStorage.getItem("view-mode");
    if (!viewMode) {
      localStorage.setItem("view-mode", "tabular");
    } else {
      dispatch(contactsActions.contactsView(viewMode));
    }
  }, [dispatch]);

  useEffect(() => {
    if (profile) dispatch(contactsActions.setContacts(randomNum(300, 700)));
  }, [dispatch, profile]);

  useEffect(() => {
    if (error && isTimeout)
      notification.error({
        message: "Feiled to upload contacts",
        description: "Please try out later again",
        duration: 0,
      });
  }, [error, isTimeout]);
};
