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
import moment from "moment";

const UsersRoute = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const truncateEmail = (email) => {
    return email.substr(0, email.indexOf("@") + 1) + "...";
  };

  return (
    <>
      <Box pt={3} pb={3}>
        <Typography variant="subtitle1">Users</Typography>
      </Box>

      <Box p={2} className="box-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="w-100 p-20">
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body3" color="text.secondary">
                      Name
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="w-100 p-20">
                  <TableSortLabel active IconComponent={KeyboardArrowUpIcon}>
                    <Typography sx={{ mt: "-4px" }} variant="body3" color="text.secondary">
                      DOB
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="p-20">
                  <Typography variant="body3" color="text.secondary">
                    Email
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "45%" }}>
                  <Typography variant="body3" color="text.secondary">
                    Gender
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <TableRow
                    key={user.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="p-20">
                      <LinkMui
                        underline="none"
                        variant="body3"
                        component={Link}
                        to={`details?email=${user.email}`}
                        fontWeight={700}
                        color="primary"
                      >
                        {`${user?.name?.first}  ${user?.name?.last}`}
                      </LinkMui>
                    </TableCell>
                    <TableCell className="p-20">
                      <Typography variant="dob">
                        {moment(user.dob.date).format("e MMM, YYYY")}
                      </Typography>
                    </TableCell>

                    <TableCell className="p-20">
                      <Tooltip title={user.email} placement="top">
                        <Box>
                          <Typography display={"block"} variant="body3" noWrap>
                            {truncateEmail(user.email)}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform={"capitalize"} variant="body3">
                        {user.gender}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UsersRoute;
