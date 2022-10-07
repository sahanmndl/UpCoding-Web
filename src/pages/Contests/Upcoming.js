import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import google from "../../assets/google.png";
import "./Contests.css";

const Upcoming = () => {

    const [contests, setContests] = useState([])
    const [filterContests, setFilterContests] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const fetchAllContests = async () => {
        try {
            const response = await fetch(`https://kontests.net/api/v1/all`)
            const json = await response.json()
            setContests([...json])
        } catch (e) {
            console.log(e)
            setError(e)
        } finally {
            setLoading(false)
            setRefresh(false)
        }
    }

    const onRefresh = () => {
        setRefresh(true)
        fetchAllContests()
    }

    const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9)

    useEffect(() => {
        fetchAllContests()
    }, [])

    return (
        <div className="container">
            <TableContainer component={Paper} style={{width: '90%'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Duration</TableCell>
                            <TableCell align="right">Site</TableCell>
                            <TableCell align="right">Start</TableCell>
                            <TableCell align="right">End</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contests.map((item) => (
                            <TableRow
                                key={keyGenerator()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <div style={{alignItems: 'center', display: 'flex'}}>
                                        <img src={google} alt="" width={16} height={16}/>
                                        <text>{item.name}</text>
                                    </div>
                                </TableCell>
                                <TableCell align="right">{item.duration}</TableCell>
                                <TableCell align="right">{item.site}</TableCell>
                                <TableCell align="right">{item.start_time}</TableCell>
                                <TableCell align="right">{item.end_time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Upcoming