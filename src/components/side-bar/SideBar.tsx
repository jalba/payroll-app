/** @jsxImportSource @emotion/react */
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  useTheme,
  Tooltip,
  ListItemButton,
} from "@mui/material";
import { css } from "@emotion/react";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ListAlt as ListAltIcon,
  Summarize as SummarizeIcon,
} from "@mui/icons-material";
import { PayrollTheme } from "styling/types";
import { Routes } from "routes";
import { Link } from "react-router-dom";

interface SideBarProps {
  handleToggleDrawer: () => void;
  open: boolean;
}

const getDrawerMixin = (open: boolean, theme: PayrollTheme) => {
  if (open) {
    return `
      width: ${theme.drawerWidth};
      transition: ${theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
      overflow-x: hidden;
    `;
  }

  return `
    transition: ${theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
    overflow-x: hidden;
    width: ${`calc(${theme.spacing(7)} + 1px)`};
    ${theme.breakpoints.up("sm")} {
      width: ${`calc(${theme.spacing(9)} + 1px)`};
    },
  `;
};

const getStyles = (theme: PayrollTheme, open: boolean) => {
  const drawerMixin = getDrawerMixin(open, theme);

  return {
    drawer: css`
      width: ${theme.drawerWidth};
      flex-shrink: 0;
      white-space: nowrap;
      ${drawerMixin}
      & .MuiDrawer-paper {
        ${drawerMixin}
      }
    `,
    drawerHeader: css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: ${theme.spacing(0, 1)};
      // necessary for content to be below app bar
      @media (min-width: 0px) and (orientation: landscape) {
        min-height: 48px;
      }
      @media (min-width: 600px) {
        min-height: 64px;
      }
      min-height: 56px;
    `,
  };
};

export const SideBar = ({ handleToggleDrawer, open }: SideBarProps) => {
  const theme = useTheme();
  const styles = getStyles(theme as PayrollTheme, open);

  return (
    <Drawer css={styles.drawer} variant="permanent" open={open}>
      <div css={styles.drawerHeader}>
        <IconButton onClick={handleToggleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Payroll List", "Payroll Summary"].map((text) => {
          const link =
            text === "Payroll List"
              ? Routes.PayrollList
              : Routes.PayrollSummary;

          return (
            <ListItemButton key={text} component={Link} to={link}>
              <Tooltip title={text}>
                <ListItemIcon>
                  {text === "Payroll List" ? (
                    <ListAltIcon />
                  ) : (
                    <SummarizeIcon />
                  )}
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={text} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
