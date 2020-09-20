// Core
import { useMemo } from "react";
import moment from "moment";

export const useTableData = ({ filterData, pagination }) => {
  const tableData = useMemo(
    () =>
    filterData &&
    filterData.slice(pagination.min, pagination.max).map((el) => {
        const dob = el.dob.date;
        return {
          key: el.login.uuid,
          img: {
            path: el.picture.medium,
            id: el.idx,
          },
          name: {
            title: `${el.name.title}. ${el.name.first} ${el.name.last}`,
            id: el.idx,
          },
          birthday: [
            `${moment(dob).format("dddd")}, ${moment(dob).format(
              "L",
            )}, ${moment(dob).format("LTS")}`,
            `${el.dob.age} years`,
          ],
          email: el.email,
          tel: el.cell,
          adress: {
            country: `/${el.location.country}/`,
            adress: `${el.location.street.number} ${el.location.street.name}, ${el.location.city}, ${el.location.state} ${el.location.postcode}`,
          },
          tag: el.nat,
        };
      }),
    [filterData, pagination.min, pagination.max],
  );

  return {
    tableData,
  };
};
