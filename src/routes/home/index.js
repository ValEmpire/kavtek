import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, TableSortLabel, Link as LinkMui, Tooltip, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

function createData(name, dob, email, gender) {
  return { name, dob, email, gender };
}

const rows = [
  createData("Carter Siphron", "12 Jul, 2021", "palma_arcivafdsafsdafdsafsdl@yahoo.com", "Male"),
];

export default function BasicTable() {
  return (
    <>
      <Box pt={2} pb={3}>
        <Typography variant="subtitle1">Users</Typography>
      </Box>

      <Box p={2} className="table-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "100px" }}>
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      Name
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ width: "100px" }}>
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      DOB
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ width: "100px" }}>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                </TableCell>
                <TableCell style={{ width: "45%" }}>
                  <Typography variant="body2" color="text.secondary">
                    Gender
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell style={{ width: "100px" }}>
                    <LinkMui
                      underline="none"
                      variant="body2"
                      component={Link}
                      to="nameId"
                      fontWeight={700}
                      color="primary"
                    >
                      {row.name}
                    </LinkMui>
                  </TableCell>
                  <TableCell style={{ width: "100px" }}>
                    <Typography variant="dob">{row.dob}</Typography>
                  </TableCell>

                  <TableCell style={{ width: "100px" }}>
                    <Tooltip title={row.email} placement="top">
                      <Box style={{ width: "100px" }}>
                        <Typography variant="body2" noWrap={true}>
                          {row.email}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </TableCell>
                  <TableCell style={{ width: "45%" }}>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
