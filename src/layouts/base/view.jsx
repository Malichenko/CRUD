// Core
import React, { useMemo } from "react";
import { Layout } from "antd";

// Components
import { Header } from "./components";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";

// Assets
import { style } from "./style";
import "./style.scss";

const View = React.memo((props) => {
  useProfileInit();
  const { children } = props;

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Layout className={"layout layout--base"}>
      <Layout.Header className={"layout__header"}>
        <Header />
      </Layout.Header>
      <Layout.Content className={"layout__content"} style={style.content}>
        {children}
      </Layout.Content>
      <Layout.Footer className={"layout__footer"}>
        {currentYear} &copy; Wezom React-Redux Test
      </Layout.Footer>
    </Layout>
  );
});

export { View };
