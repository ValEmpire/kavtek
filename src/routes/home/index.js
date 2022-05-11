import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, TableSortLabel, Tooltip, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, dob, email, gender) {
  return { name, dob, email, gender };
}

const rows = [createData("Carter Siphron", "12 Jul, 2021", "palma_arcival@yahoo.com", "Male")];

export default function BasicTable() {
  return (
    <>
      <Typography variant="subtitle1">Users</Typography>

      <Box p={2} className="table-container">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel IconComponent={KeyboardArrowDownIcon}>
                    <Typography variant="body2" color="text.secondary">
                      Name
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel IconComponent={KeyboardArrowUpIcon}>
                    <Typography variant="body2" color="text.secondary">
                      DOB
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    Gender
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="body2" fontWeight={700} color="primary">
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="dob">{row.dob}</Typography>
                  </TableCell>

                  <TableCell>
                    <Tooltip title={row.email} placement="top">
                      <Typography display={"inline"} variant="body2">
                        {row.email}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
