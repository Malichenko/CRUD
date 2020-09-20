// Core
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { notification } from "antd";

// Actions
import { userActions } from "../../actions";

// Book
import { book } from "../../../../routes/book";

export const useAvatar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("seed");
    dispatch(userActions.userFill(null));
    history.push(book.home.url);

    notification.success({
      message: "Successfyly logged out",
    });
  };

  return {
    logOut,
  };
};
