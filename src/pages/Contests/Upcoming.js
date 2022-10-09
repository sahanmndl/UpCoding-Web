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
} from '@mui/material';
import Link from '@mui/material/Link';
import React, { useEffect, useRef, useState } from 'react';
import atcoderLogo from '../../assets/atcoder.png';
import codechefLogo from '../../assets/codechef.png';
import codeforcesLogo from '../../assets/codeforces.png';
import csacademyLogo from '../../assets/csacademy.png';
import googleLogo from '../../assets/google.png';
import hackerearthLogo from '../../assets/hackerearth.png';
import hackerrankLogo from '../../assets/hackerrank.png';
import leetcodeLogo from '../../assets/leetcode.png';
import topcoderLogo from '../../assets/topcoder.png';
import placeholderLogo from '../../assets/placeholder.png';
import './Contests.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Colors from '../../utils/Colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { google } from "calendar-link";

const Upcoming = ({ darkmode }) => {

    const [contests, setContests] = useState([])
    const [filterContests, setFilterContests] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    var options = ["ALL"];
    
    //Fetch Contests from API
    const fetchAllContests = async () => {
        try {
            const response = await fetch(`https://kontests.net/api/v1/all`);
            const json = await response.json();
            setContests([...json].filter(contest => contest.status === "BEFORE"));
            setFilterContests([...json].filter(contest => contest.status === "BEFORE"))
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setLoading(false);
            setRefresh(false);
        }
    };

    const keyGenerator = () =>
    '_' + Math.random().toString(36).substr(2, 9);
    //////////////////////////////////////////////

    //Dropdown menu to filter contests
    contests.map((i) => {
        return options.push(i.site);
    })
    options = options.filter((v, i, a) => a.indexOf(v) === i)

    const handleMenuItemClick = (event, index, option) => {
        setSelectedIndex(index);
        console.log(option);
        setOpen(false);
        if (option !== "ALL") {
            setFilterContests(contests.filter((i) => {
                console.log(i.site, option);
                return i.site === option;
            }))
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
    /////////////////////////////////////////////
    
    //Display duration time
    const formatDurationTime = (s) => {
        let years = Math.floor(s / 31536000);
        let months = Math.floor((s % 31536000) / 2592000);
        let days = Math.floor(((s % 31536000) % 2592000) / 86400);
        let hours = Math.floor((s % (3600 * 24)) / 3600);
        let minutes = Math.floor((s % 3600) / 60);
        let seconds = Math.floor(s % 60);

        let ans = "";
        if(years >= 1) {
            if(years>1)
                ans += years + " yrs ";
            else if(years === 1)
                ans += years + " yr ";
            if(months>1)
                ans += months + " mos";
            else if(months === 1)
                ans += months + " mo";
        } else if(months >= 1) {
            if(months>1)
                ans += months + " mos ";
            else if(months === 1)
                ans += months + " mo ";
            if(days>1)
                ans += days + " days";
            else if(days === 1)
                ans += days + " day";
        } else if(days >= 1) {
            if(days > 1)
                ans += days + " days ";
            else if(days === 1)
                ans += days + " day ";
            if(hours > 1) 
                ans += hours + " hrs";
            else if(hours === 1)
                ans += hours + " hr";
        } else {
            hours = ("0" + hours).slice(-2);
            minutes = ("0" + minutes).slice(-2);
            seconds = ("0" + seconds).slice(-2);
            ans = hours + ":" + minutes + ":" + seconds;
        }
        
        return ans;
    }
    ///////////////////////////////////////////////

    useEffect(() => {
        fetchAllContests();
    }, []);

    return (
        <div className="container">
            <TableContainer component={Paper} style={{ width: '100%', boxShadow: darkmode ? '0 0 4px #757575' : '' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Upcoming Contests</TableCell>
                            <TableCell align="right" style={{ fontWeight: '700' }}>
                                Site :  
                                <ButtonGroup variant="" color='info' ref={anchorRef} aria-label="split button">
                                    <Button
                                        size="small"
                                        aria-controls={open ? 'split-button-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
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
                                                    placement === 'bottom' ? 'center top' : 'center bottom',
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
                                                                onClick={(event) => handleMenuItemClick(event, index, option)}
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
                            <TableCell align="right" style={{ fontWeight: '700' }}>Start</TableCell>
                            <TableCell align="right" style={{ fontWeight: '700' }}>End</TableCell>
                            <TableCell align="right" style={{ fontWeight: '700' }}>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterContests.map((item) => (
                            <TableRow
                                key={keyGenerator()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={{ 
                                    backgroundColor: item.in_24_hours === "Yes" ? 
                                        (darkmode ? Colors.NIGHT_GREEN : Colors.GREEN) : null 
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                                        <img
                                            src={item.site === "CodeChef" ? codechefLogo :
                                                item.site === "CodeForces" ? codeforcesLogo :
                                                item.site === "AtCoder" ? atcoderLogo :
                                                item.site === "TopCoder" ? topcoderLogo :
                                                item.site === "HackerRank" ? hackerrankLogo :
                                                item.site === "HackerEarth" ? hackerearthLogo :
                                                item.site === "LeetCode" ? leetcodeLogo :
                                                item.site === "Kick Start" ? googleLogo :
                                                item.site === "CS Academy" ? csacademyLogo :
                                                placeholderLogo
                                            }
                                            alt=""
                                            width={18}
                                            height={18}
                                            style={{ 
                                                marginRight: 10, 
                                                filter: (item.site === "CodeChef" && darkmode) ? "invert(1)" : "invert(0)" 
                                            }}
                                        />
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            style={{ color: Colors.BLUE1 }}
                                        >
                                            <p style={{ color: darkmode ? "white" : Colors.BLUE1,margin:"0px 0px" }}>
                                                {item.name}
                                            </p>
                                        </Link>
                                        <Tooltip title="Add contest to calendar" arrow enterDelay={500}>
                                            <IconButton onClick={() => {
                                                window.open(
                                                    google({
                                                        title: item.name,
                                                        start: item.start_time,
                                                        end: item.end_time
                                                    }),
                                                    "_blank"
                                                )
                                            }}>
                                                <CalendarMonthIcon 
                                                    sx={{
                                                        height: 20, 
                                                        width: 20, 
                                                        marginLeft: '1px',
                                                        color: Colors.GRAY1
                                                    }} 
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    {item.site}
                                </TableCell>
                                <TableCell align="right">
                                    {new Date(item.start_time).toLocaleString("en-IN", { timeZone: 'Asia/Kolkata' })}
                                </TableCell>
                                <TableCell align="right">
                                    {new Date(item.end_time).toLocaleString("en-IN", { timeZone: 'Asia/Kolkata' })}
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
}

export default Upcoming;
