import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/user.action";

export default function BasicTable() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Box pt={3} pb={3}>
        <Typography variant="subtitle1">Users</Typography>
      </Box>

      <Box p={2} className="table-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="w-100 p-20">
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      Name
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="w-100 p-20">
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      DOB
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="w-100 p-20">
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "45%" }}>
                  <Typography variant="body2" color="text.secondary">
                    Gender
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell className="w-100 p-20">
                    <LinkMui
                      underline="none"
                      variant="body2"
                      component={Link}
                      to={user.id}
                      fontWeight={700}
                      color="primary"
                    >
                      {user.name}
                    </LinkMui>
                  </TableCell>
                  <TableCell className="w-100 p-20">
                    <Typography variant="dob">{user.dob}</Typography>
                  </TableCell>

                  <TableCell className="w-100 p-20">
                    <Tooltip title={user.email} placement="top">
                      <Box className="w-100">
                        <Typography variant="body2" noWrap={true}>
                          {user.email}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </TableCell>
                  <TableCell sx={{ width: "45%" }}>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
