import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Link from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
import atcoderLogo from '../../assets/atcoder.png';
import codechefLogo from '../../assets/codechef.png';
import codeforcesLogo from '../../assets/codeforces.png';
import googleLogo from '../../assets/google.png';
import hackerearthLogo from '../../assets/hackerearth.png';
import hackerrankLogo from '../../assets/hackerrank.png';
import leetcodeLogo from '../../assets/leetcode.png';
import topcoderLogo from '../../assets/topcoder.png';
import placeholderLogo from '../../assets/placeholder.png';
import './Contests.css';
import Colors from '../../utils/Colors';

const Upcoming = () => {
  const [contests, setContests] = useState([]);
  const [filterContests, setFilterContests] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const fetchAllContests = async () => {
    try {
      const response = await fetch(`https://kontests.net/api/v1/all`);
      const json = await response.json();
      setContests([...json]);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  };

  const onRefresh = () => {
    setRefresh(true);
    fetchAllContests();
  };

  const keyGenerator = () =>
    '_' + Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    fetchAllContests();
  }, []);

  return (
    <div className="container">
      <TableContainer component={Paper} style={{ width: '90%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '700' }}>
                Name
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '700' }}>
                Site
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '700' }}>
                Start
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '700' }}>
                End
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '700' }}>
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contests.map((item) => (
              <TableRow
                key={keyGenerator()}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
                style={{
                  backgroundColor:
                    item.in_24_hours === 'Yes'
                      ? Colors.GREEN
                      : 'white',
                }}
              >
                <TableCell component="th" scope="row">
                  <div
                    style={{ alignItems: 'center', display: 'flex' }}
                  >
                    <img
                      src={
                        item.site === 'CodeChef'
                          ? codechefLogo
                          : item.site === 'CodeForces'
                          ? codeforcesLogo
                          : item.site === 'AtCoder'
                          ? atcoderLogo
                          : item.site === 'TopCoder'
                          ? topcoderLogo
                          : item.site === 'HackerRank'
                          ? hackerrankLogo
                          : item.site === 'HackerEarth'
                          ? hackerearthLogo
                          : item.site === 'LeetCode'
                          ? leetcodeLogo
                          : item.site === 'Kick Start'
                          ? googleLogo
                          : placeholderLogo
                      }
                      alt=""
                      width={18}
                      height={18}
                      style={{ marginRight: 8 }}
                    />
                    <Link
                      href={item.url}
                      style={{ color: Colors.BLUE1 }}
                    >
                      {item.name}
                    </Link>
                  </div>
                </TableCell>
                <TableCell align="right">{item.site}</TableCell>
                <TableCell align="right">
                  {new Date(item.start_time).toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                  })}
                </TableCell>
                <TableCell align="right">
                  {new Date(item.end_time).toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                  })}
                </TableCell>
                <TableCell align="right">
                  {new Date(item.duration * 1000)
                    .toISOString()
                    .substr(11, 8)}
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
