import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Link from "@mui/material/Link";
import React, { useEffect, useRef, useState } from "react";

import "./Contests.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Colors from "../../utils/Colors";
import { Helmet } from "react-helmet";
import { formatDurationTime, formatDateTimeForCodeChef } from "../../Js/functions/duration_time";
import { mapSiteToLogo } from "../../Js/functions/mapSiteToLogo";
import { AddToCalendarButton } from 'add-to-calendar-button-react';


const Upcoming = ({ darkmode }) => {
  <Helmet>
    <title>Contests in a week</title>
    <meta
      name="upcoming-coding-contests"
      content="Stay updated on upcoming coding contests from Codechef, LeetCode, and Codeforces. Find information on contest dates, difficulty level, and more. Participate in online coding competitions and practice coding problems to prepare for the next contest."
    ></meta>
  </Helmet>;

  const [contests, setContests] = useState([]);
  const [filterContests, setFilterContests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  var options = ["ALL"];

  //Fetch Contests from API
  const fetchAllContests = async () => {
    try {
      const response = await fetch(`https://kontests.net/api/v1/all`);
      const json = await response.json();
      setContests([...json].filter((contest) => contest.status === "BEFORE"));
      setFilterContests(
        [...json].filter((contest) => contest.status === "BEFORE"),
      );
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  };

  const keyGenerator = () => "_" + Math.random().toString(36).substr(2, 9);
  //////////////////////////////////////////////

  //Dropdown menu to filter contests
  contests.map((i) => {
    return options.push(i.site);
  });
  options = options.filter((v, i, a) => a.indexOf(v) === i);

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    console.log(option);
    setOpen(false);
    if (option !== "ALL") {
      setFilterContests(
        contests.filter((i) => {
          console.log(i.site, option);
          return i.site === option;
        }),
      );
    } else {
      setFilterContests(contests);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  //Display duration time
  // imported from functions

  const convertTime = (site, time) => {
    return site != "CodeChef"
      ? new Date(time).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      })
      : formatDateTimeForCodeChef(time)
  }
  const returnTime = (site, time) => {
    let convertedTime = convertTime(site, time).split(",")[1];
    let timeArray = convertedTime.split(":");
    if (timeArray[0].length === 1) timeArray[0] = "0" + timeArray[0];
    let res = timeArray[0] + ":" + timeArray[1];
    console.log(res);
    return res;

  }
  useEffect(() => {
    fetchAllContests();
  }, []);

  return (
    <div className="container">
      <TableContainer
        component={Paper}
        style={{ width: "100%", boxShadow: darkmode ? "0 0 4px #757575" : "" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "700" }}>
                Upcoming Contests
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Site :
                <ButtonGroup
                  variant=""
                  color="info"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{ zIndex: 1 }}
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                value={option}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index, option)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Start
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                End
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "700" }}>
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterContests.map((item) => (
              <TableRow
                key={keyGenerator()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{
                  backgroundColor:
                    item.in_24_hours === "Yes"
                      ? darkmode
                        ? Colors.NIGHT_GREEN
                        : Colors.GREEN
                      : null,
                }}
              >
                <TableCell component="th" scope="row">
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={mapSiteToLogo(item.site)}
                      alt=""
                      width={18}
                      height={18}
                      style={{
                        marginRight: 10,
                        filter:
                          item.site === "CodeChef" && darkmode
                            ? "invert(1)"
                            : "invert(0)",
                      }}
                    />
                    <Link
                      href={item.url}
                      target="_blank"
                      style={{ color: Colors.BLUE1 }}
                    >
                      <p
                        style={{
                          color: darkmode ? "white" : Colors.BLUE1,
                          margin: "0px 0px",
                        }}
                      >
                        {item.name}
                      </p>
                    </Link>
                    <Tooltip
                      title="Add contest to calendar"
                      arrow
                      enterDelay={500}
                    >
                      <AddToCalendarButton
                        name={item.name}
                        options={['Apple', 'Google', 'Outlook.com']}
                        location={item.site}
                        startDate={item.start_time.substr(0, 10)}
                        endDate={item.end_time.substr(0, 10)}
                        startTime={() => returnTime(item.site, item.start_time)}
                        endTime={() => returnTime(item.site, item.end_time)}
                        timeZone="Asia/Kolkata"
                        label=" "
                        size="3"
                        buttonStyle="3d"
                        lightMode={darkmode ? "dark" : "light"}
                      ></AddToCalendarButton>
                    </Tooltip>
                  </div>
                </TableCell>
                <TableCell align="right">{item.site}</TableCell>
                <TableCell align="right">
                  {convertTime(item.site, item.start_time)}
                </TableCell>
                <TableCell align="right">
                  {convertTime(item.site, item.end_time)}
                </TableCell>
                <TableCell align="right">
                  {formatDurationTime(item.duration)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Upcoming;
