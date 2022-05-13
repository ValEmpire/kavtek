import React, { useEffect, useState } from "react";
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
import { getUsers, sortUserByBirthDay, sortUserByName } from "../../redux/actions/user.action";
import moment from "moment";
import {
  SORT_BY_BIRTHDAY_ASC,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  SORT_BY_BIRTHDAY_DESC,
} from "../../const";

const UsersRoute = () => {
  const dispatch = useDispatch();

  // get users from store
  const { users } = useSelector((state) => state.user);

  const [sortByName, setSortByName] = useState(SORT_BY_NAME_ASC);

  const [sortByBirthDay, setSortByBirthDay] = useState(SORT_BY_BIRTHDAY_ASC);

  // dispatch getUsers when component did mount
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  /**
   *
   * @param {*} email
   * @returns truncated email from character @
   */
  const truncateEmail = (email) => {
    return email.substr(0, email.indexOf("@") + 1) + "...";
  };

  /**
   * void
   * this will handle the arrow icon rendered
   * this will also handle the dispatching of sorting by name
   */
  const handleSortByName = () => {
    if (sortByName === SORT_BY_NAME_ASC) {
      setSortByName(SORT_BY_NAME_DESC);
    } else {
      setSortByName(SORT_BY_NAME_ASC);
    }

    dispatch(sortUserByName(sortByName));
  };

  /**
   * void
   * this will handle the arrow icon rendered
   * this will also handle the dispatching of sorting by birthday
   */
  const handleSortByBirthday = () => {
    if (sortByBirthDay === SORT_BY_BIRTHDAY_ASC) {
      setSortByBirthDay(SORT_BY_BIRTHDAY_DESC);
    } else {
      setSortByBirthDay(SORT_BY_BIRTHDAY_ASC);
    }

    dispatch(sortUserByBirthDay(sortByBirthDay));
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
                  <TableSortLabel
                    onClick={handleSortByName}
                    active
                    IconComponent={
                      sortByName === SORT_BY_NAME_DESC ? KeyboardArrowUpIcon : KeyboardArrowDownIcon
                    }
                  >
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      Name
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="w-100 p-20">
                  <TableSortLabel
                    onClick={handleSortByBirthday}
                    active
                    IconComponent={
                      sortByBirthDay === SORT_BY_BIRTHDAY_DESC
                        ? KeyboardArrowUpIcon
                        : KeyboardArrowDownIcon
                    }
                  >
                    <Typography sx={{ mt: "-4px" }} variant="body2" color="text.secondary">
                      DOB
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell className="p-20">
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
              {users &&
                users.map((user) => (
                  <TableRow
                    key={user.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="p-20">
                      <LinkMui
                        underline="none"
                        variant="body2"
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
                        {moment(user.dob.date).format("DD MMM, YYYY")}
                      </Typography>
                    </TableCell>

                    <TableCell className="p-20">
                      <Tooltip title={user.email} placement="top">
                        <Box>
                          <Typography display={"block"} variant="body2" noWrap>
                            {truncateEmail(user.email)}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform={"capitalize"} variant="body2">
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
