// Core
import React from "react";
import { useSelector } from "react-redux";
import { Typography, Spin } from "antd";

// Components
import { LayoutBase } from "../../layouts";
import { ErrorPage } from "../../bus/share/components/404";
import { TableComponent } from "../../bus/contacts/components/table";
import { ViewControl } from "../../bus/contacts/components/viewControl";
import { TiledComponent } from "../../bus/contacts/components/tiledComponent";
import { CustomPagination } from "../../elements/customPagination";
import { Filter } from "../../bus/contacts/components/filter";
import { StatisticComponent } from "../../bus/contacts/components/statistic";

// Hooks
import { useTimeout } from "../../bus/share/hooks/useTimeout";
import { useContactsInit } from "../../bus/contacts/hooks/useContactsInit";
import { useContacts } from "../../bus/contacts/hooks/useContacts";

// Styles
import "./styles.scss";

const { Title } = Typography;

export const View = () => {
  useContactsInit();
  const { isTimeout } = useTimeout();
  const { profile, isLoading: userLoading } = useSelector(
    (state) => state.user,
  );
  const {
    tableData,
    isLoading: contactsLoading,
    viewMode,
    pagination,
    filterData,
    form,
    initialValues,
    changeHandler,
    onReset,
    onReload,
    changeView,
    onFilter,
  } = useContacts();

  const errorPageJSX = !profile &&
    !userLoading &&
    !contactsLoading &&
    isTimeout && <ErrorPage />;

  const contentJSX = profile && (
    <Spin spinning={userLoading || contactsLoading}>
      <div className="contacts">
        <div className="contacts__header">
          <Title level={2}>Contacts</Title>
          <ViewControl
            onReload={onReload}
            isLoading={contactsLoading}
            viewMode={viewMode}
            changeView={changeView}
          />
        </div>
        <Filter
          form={form}
          onReset={onReset}
          initialValues={initialValues}
          onFilter={onFilter}
          filterData={filterData}
          spinning={userLoading || contactsLoading}
        />
        <div className="contacts__content">
          {viewMode === "tabular" ? (
            <TableComponent tableData={tableData} />
          ) : (
            <TiledComponent filterData={filterData} pagination={pagination} />
          )}
          <StatisticComponent data={filterData} isLoading={contactsLoading} />
          <CustomPagination
            totalPages={filterData && filterData.length}
            changeHandler={changeHandler}
            current={pagination.page}
          />
        </div>
      </div>
    </Spin>
  );

  return (
    <LayoutBase>
      {contentJSX}
      {errorPageJSX}
    </LayoutBase>
  );
};
