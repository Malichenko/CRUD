// Core
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { contactsActions } from "../../actions";

export const useFilter = ({ contacts, formData }) => {
  const dispatch = useDispatch();

  const filterData = useCallback(() => {
    let filterData = contacts && contacts;

    if (formData.gender)
      filterData = filterData.filter((el) => el.gender === formData.gender);
    if (formData.nat.length !== 0)
      filterData = filterData.filter((el) => formData.nat.includes(el.nat));
    if (formData.creator) filterData = [];
    if (formData.name)
      filterData = filterData.filter(
        (el) => el.fullname.toLowerCase().indexOf(formData.name) >= 0,
      );

    return filterData;
  }, [
    formData.gender,
    contacts,
    formData.nat,
    formData.creator,
    formData.name,
  ]);
  
  useEffect(() => {
    dispatch(contactsActions.setFilterData(filterData()));
  }, [dispatch, filterData]);
};
