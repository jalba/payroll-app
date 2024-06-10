/** @jsxImportSource @emotion/react */
import { useContext, useMemo } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  useTheme,
} from "@mui/material";
import {
  AccountBalanceWallet,
  AddCircle,
  AssuredWorkload,
} from "@mui/icons-material";

import { calculateTotals, formatAmmount, formatPeriod } from "utils";
import { AppContext } from "context";
import { css } from "@emotion/react";

const getStyles = (theme: Theme) => {
  return {
    card: css`
      background-color: ${theme.palette.grey[100]};
      width: 50%;
    `,
    list: css`
      width: 100%;
    `,
    itemText: css`
      display: flex;
      justify-content: space-between;
    `,
  };
};

export const PayrollSummary = () => {
  const { payroll } = useContext(AppContext);
  const total = useMemo(() => calculateTotals(payroll), [payroll]);
  const theme = useTheme();
  const styles = getStyles(theme);
  const formattedSalary = formatAmmount(total.currency, total.baseSalary);
  const formattedBonus = formatAmmount(total.currency, total.bonus);
  const formattedPension = formatAmmount(total.currency, total.employerPension);
  const formattedTotal = formatAmmount(total.currency, total.total);
  const period = formatPeriod(total.period);

  return (
    <Card css={styles.card}>
      <CardHeader title={`Payroll Period: ${period}`} />
      <CardContent>
        <List css={styles.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWallet />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              css={styles.itemText}
              primary="Base Salaries"
              secondary={formattedSalary}
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              css={styles.itemText}
              primary="Bonuses"
              secondary={formattedBonus}
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AssuredWorkload />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              css={styles.itemText}
              primary="Pensions"
              secondary={formattedPension}
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
            <ListItemAvatar />
            <ListItemText
              css={styles.itemText}
              primary="Total"
              secondary={formattedTotal}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
