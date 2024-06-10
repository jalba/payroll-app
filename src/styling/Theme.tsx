import { FC } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme(
  {},
  {
    drawerWidth: "240px",
  }
);
theme = responsiveFontSizes(theme);

export const Theme: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
