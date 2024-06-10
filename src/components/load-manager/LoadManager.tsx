import { FC } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { CircularProgress, Typography } from "@mui/material";

interface LoadManagerProps {
  isLoading: boolean;
  error: Error | null;
}

export const LoadManager: FC<LoadManagerProps> = ({
  isLoading,
  error,
  children,
}) => {
  if (error) {
    return (
      <div>
        <ErrorIcon />
        <Typography variant="subtitle2">
          Ooops! there was an error, please try again later
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return <>{children}</>;
};
