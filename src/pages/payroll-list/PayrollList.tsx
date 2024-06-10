/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

import { AppContext } from "context";
import { PayrollTheme } from "styling/types";
import { css } from "@emotion/react";
import { useNavigate } from "react-router";

const getStyles = (theme: PayrollTheme) => {
  return {
    tableContainer: css`
      max-width: 80%;
    `,
    table: css`
      min-width: 700px;
    `,
    cellHead: css`
      background-color: ${theme.palette.info.dark};
      color: ${theme.palette.common.white};
    `,
    row: css`
      font-size: 14px;
      cursor: pointer;
      :nth-of-type(even) {
        background-color: ${theme.palette.action.hover};
      }

      :last-child td,
      :last-child th {
        border: 0;
      }
      :hover {
        background-color: rgba(25, 118, 210, 0.12);
      }
    `,
  };
};

export const PayrollList = () => {
  const { payroll } = useContext(AppContext);
  const theme = useTheme();
  const styles = getStyles(theme as PayrollTheme);
  const navigate = useNavigate();
  const handleEmployeeSelection = (id: string) => {
    navigate(`/employee/${id}`);
  };

  return (
    <TableContainer css={styles.tableContainer} component={Paper}>
      <Table css={styles.table} aria-label="payroll table">
        <TableHead>
          <TableRow>
            <TableCell css={styles.cellHead}>Employee Name</TableCell>
            <TableCell css={styles.cellHead} align="right">
              Department
            </TableCell>
            <TableCell css={styles.cellHead} align="right">
              Base Salary
            </TableCell>
            <TableCell css={styles.cellHead} align="right">
              Bonus
            </TableCell>
            <TableCell css={styles.cellHead} align="right">
              Net Pay
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payroll.map((employee) => (
            <TableRow
              css={styles.row}
              key={employee["Employee ID"]}
              onClick={() => handleEmployeeSelection(employee["Employee ID"])}
            >
              <TableCell component="th" scope="row">
                {employee["Employee Name"]}
              </TableCell>
              <TableCell align="right">{employee["Departments"]}</TableCell>
              <TableCell align="right">{employee["Base Salary"]}</TableCell>
              <TableCell align="right">{employee["Bonus"]}</TableCell>
              <TableCell align="right">{employee["Net Pay"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
