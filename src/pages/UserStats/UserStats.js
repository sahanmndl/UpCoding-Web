import React from 'react';
import './UserStats.css';
import { Stack } from '@mui/material';
import codechefLogo from '../../assets/codechef.png';
import codeforcesLogo from '../../assets/codeforces.png';
import leetcodeLogo from '../../assets/leetcode.png';
import PlatformCard from '../../components/PlatformCard';

const UserStats = ({ darkmode }) => {

    return (
        <div className='userstats-container'>
            <Stack direction='row' spacing={10}>
                <PlatformCard image={codechefLogo} caption="CodeChef" darkmode={darkmode} />
                <PlatformCard image={codeforcesLogo} caption="Codeforces" darkmode={darkmode} />
                <PlatformCard image={leetcodeLogo} caption="LeetCode" darkmode={darkmode} />
            </Stack>
        </div>
    )
}

export default UserStats