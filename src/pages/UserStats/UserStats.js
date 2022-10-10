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
import './UserStats.css';
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

const UserStats = ({ darkmode }) => {

    return (
        <div>User Stats </div>
    );
}

export default UserStats