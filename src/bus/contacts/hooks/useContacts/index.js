// Core
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "antd";

// Hooks
import { useTableData } from "./useTableData";
import { useFilter } from "./useFilter";

// Helpers
import { randomNum } from "../../../../helpers/randomNum";
import { initialValues } from "./initialValues";

// Actions
import { contactsActions } from "../../actions";

export const useContacts = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { contacts, isLoading, viewMode, filterData, pageState } = useSelector(
    (state) => state.contacts,
  );
  const [pagination, setPagination] = useState({
    page: 1,
    size: 9,
    min: 0,
    max: 9,
  });
  const [formData, setFormData] = useState(initialValues);
  useFilter({ contacts, formData });

  const { tableData } = useTableData({ filterData, pagination });

  const onFilter = (_, values) => {
    setFormData(values);
    setPagination((prev) => {
      return {
        ...prev,
        page: 1,
        min: 0,
        max: prev.size,
      };
    });
    dispatch(contactsActions.setPageState({ formData: values }));
  };

  const onReset = () => {
    const initVal = JSON.parse(JSON.stringify(initialValues));
    form.resetFields();
    setFormData(initVal);
    dispatch(contactsActions.setPageState(null));
  };

  const onReload = () => {
    dispatch(contactsActions.setContacts(randomNum(300, 700)));
  };

  const changeView = (el) => {
    const elId = el.currentTarget.id;
    localStorage.setItem("view-mode", elId);
    dispatch(contactsActions.contactsView(elId));
  };

  const changeHandler = (page, size) => {
    const loewerNum = (page ? page : 1) * size - size;
    const higherNum = loewerNum + size;
    const paginationData = {
      page,
      size,
      min: loewerNum,
      max: higherNum,
    };
    setPagination(paginationData);
    dispatch(contactsActions.setPageState({ paginationData }));
  };

  useEffect(() => {
    if (pageState && pageState.formData) setFormData(pageState.formData);
    if (pageState && pageState.paginationData)
      setPagination(pageState.paginationData);
  }, []);

  useEffect(() => {
    if (pageState && pageState.formData)
      form.setFieldsValue(pageState.formData);
  }, [pageState, form]);

  return {
    tableData,
    contacts,
    isLoading,
    viewMode,
    onReload,
    changeView,
    pagination,
    changeHandler,
    onFilter,
    filterData,
    form,
    onReset,
    initialValues,
    pageState,
  };
};
