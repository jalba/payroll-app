/** @jsxImportSource @emotion/react */
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { css } from "@emotion/react";
import { PayrollTheme } from "styling/types";

interface HeaderProps {
  title: string;
  open: boolean;
  handleToggleDrawer: () => void;
}

const getStyles = (theme: PayrollTheme, open: boolean) => {
  return {
    appBar: css`
      z-index: ${theme.zIndex.drawer + 1};
      transition: ${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
      ${open &&
      `
          margin-left: ${theme.drawerWidth};
          width: calc(100% - ${theme.drawerWidth});
          transition: ${theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          })};
        `}
    `,
    iconButton: css`
      margin-right: 36px;
      ${open && "display: none;"}
    `,
  };
};

export const Header = ({ title, handleToggleDrawer, open }: HeaderProps) => {
  const theme = useTheme();
  const styles = getStyles(theme as PayrollTheme, open);

  return (
    <AppBar css={styles.appBar}>
      <Toolbar>
        <IconButton
          css={styles.iconButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="h1">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
