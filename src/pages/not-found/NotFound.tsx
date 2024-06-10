import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";
import { Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserNotSupportedIcon sx={{ fontSize: "7.5rem" }} />
      <Typography variant="h3">Page not found</Typography>
    </div>
  );
};
