import React, { useEffect, useState } from "react";
import ContestItem from "../../components/ContestItem";
import "./Upcoming.css";

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
            {contests.map((item) => (
                <ContestItem item={item} />
            ))}
        </div>
    )
}

export default Upcoming