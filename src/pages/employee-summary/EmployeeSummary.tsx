/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Theme,
  useTheme,
  Divider,
} from "@mui/material";
import { useEmployee } from "hooks";
import { Navigate } from "react-router-dom";
import { formatAmmount, formatDate, formatPeriod } from "utils";

const getStyles = (theme: Theme) => ({
  container: css`
    width: 50%;
    min-width: 455px;
  `,
  card: css`
    background-color: ${theme.palette.grey[100]};
    height: 100%;
  `,
  listText: css`
    display: flex;
    justify-content: space-between;
  `,
  periodContainer: css`
    height: 100%;
  `,
  periodList: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  periodItem: css`
    flex-grow: 1;
  `,
});

export const EmployeeSummary = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const employee = useEmployee();

  if (!employee) {
    return <Navigate replace to="/not-found" />;
  }
  const { currency } = employee;
  const period = formatPeriod(employee["Payroll Period"]);
  const payDate = formatDate(employee["Pay Date"]);
  const baseSalary = formatAmmount(currency, employee["Base Salary"]);
  const loan = formatAmmount(currency, employee["Student Loan Repayment"]);
  const bonus = formatAmmount(currency, employee["Bonus"]);
  const pension = formatAmmount(currency, employee["Employee Pension"]);
  const tax = formatAmmount(currency, employee["Income Tax"]);
  const netPay = formatAmmount(currency, employee["Net Pay"]);

  return (
    <Grid css={styles.container} container spacing={2}>
      <Grid item xs={6}>
        <Card css={styles.card}>
          <CardHeader avatar={<Avatar />} title={employee["Employee Name"]} />
          <CardContent css={styles.periodContainer}>
            <List css={styles.periodList}>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="ID"
                  secondary={employee["Employee ID"]}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Department"
                  secondary={employee["Departments"]}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card css={styles.card}>
          <CardContent css={styles.periodContainer}>
            <List css={styles.periodList}>
              <ListItem css={styles.periodItem}>
                <ListItemText
                  css={styles.listText}
                  primary="Payroll Period"
                  secondary={period}
                />
              </ListItem>
              <ListItem css={styles.periodItem}>
                <ListItemText
                  css={styles.listText}
                  primary="Pay Date"
                  secondary={payDate}
                />
              </ListItem>
              <ListItem css={styles.periodItem}>
                <ListItemText
                  css={styles.listText}
                  primary="Hours Worked"
                  secondary={employee["Hours Worked"]}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card css={styles.card}>
          <CardContent>
            <List dense>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Base Salary"
                  secondary={baseSalary}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Bonus"
                  secondary={bonus}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Student Loan Repayment"
                  secondary={`${loan ? "- " : ""}${loan}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Employee Pension"
                  secondary={`${pension ? "- " : ""}${pension}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Income Tax"
                  secondary={`${tax ? "- " : ""}${tax}`}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  css={styles.listText}
                  primary="Net Pay"
                  secondary={netPay}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
