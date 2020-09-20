// Core
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Books
import { book } from "../../../../routes/book";

export const useModal = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const onSubmit = (value) => {
    localStorage.setItem("seed", value.email);
    setVisible(false);
    history.push(book.profile.url);
  };

  return {
    handleOk,
    handleCancel,
    showModal,
    visible,
    onSubmit,
  };
};
