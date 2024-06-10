/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useTheme } from "@mui/material";
import { css } from "@emotion/react";

import { Router, Routes } from "routes";
import { LoadManager } from "components/load-manager";

import { AppContext } from "context";
import { PayrollTheme } from "styling/types";
import { usePayroll } from "hooks";
import { Header } from "components/header";
import { SideBar } from "components/side-bar";
import { useLocation } from "react-router-dom";
import { matchToRoute } from "utils";

const getStyles = (theme: PayrollTheme) => ({
  main: css`
    align-items: center;
    display: flex;
    height: inherit;
    min-height: 700px;
    justify-content: center;
    margin-left: ${`calc(${theme.spacing(7)} + 1px)`};
    ${theme.breakpoints.up("sm")} {
      margin-left: ${`calc(${theme.spacing(9)} + 1px)`};
    } ;
  `,
});

const titles = {
  [Routes.EmployeeSummary]: "Employee Summary",
  [Routes.NotFound]: "Not Found",
  [Routes.PayrollList]: "Payroll List",
  [Routes.PayrollSummary]: "Payroll Summary",
};

export const AppContainer = () => {
  const [open, setOpen] = useState(false);
  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const { pathname } = useLocation();
  const [payroll, isLoading, error] = usePayroll();

  const styles = getStyles(theme as PayrollTheme);

  const route = matchToRoute(pathname);
  const title = titles[route];

  return (
    <AppContext.Provider value={{ payroll }}>
      <>
        <Header
          open={open}
          handleToggleDrawer={handleToggleDrawer}
          title={title}
        />
        <SideBar open={open} handleToggleDrawer={handleToggleDrawer} />
        <main css={styles.main}>
          <LoadManager isLoading={isLoading} error={error}>
            <Router />
          </LoadManager>
        </main>
      </>
    </AppContext.Provider>
  );
};
