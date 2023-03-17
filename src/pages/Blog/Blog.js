import React from 'react';
import './Blog.css';
import { Stack } from '@mui/material';
import codechefLogo from '../../assets/codechef.png';
import codeforcesLogo from '../../assets/codeforces.png';
import leetcodeLogo from '../../assets/leetcode.png';
import PlatformCard from '../../components/PlatformCard';
import { Helmet } from 'react-helmet';

const Blog = ({ darkmode }) => {

    return (
        <div className='Blog-container'>
            <Helmet>
                <title>Practice</title>
                <meta name="Keywords"  content=""></meta>
                <meta name="description" content=""></meta>
            </Helmet>
            
            <Stack direction='row' spacing={10}>
                <PlatformCard image={codechefLogo} caption="CodeChef" darkmode={darkmode} />
                <PlatformCard image={codeforcesLogo} caption="Codeforces" darkmode={darkmode} />
                <PlatformCard image={leetcodeLogo} caption="LeetCode" darkmode={darkmode} />
            </Stack>
        </div>
    )
}

export default Blog