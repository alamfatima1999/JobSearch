import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } from "../../actions/searchJobAction";
import JobCard from '../JobCard/JobCard';
import './JobList.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector(state => state.searchJobReducer);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchJobsRequest());
        fetchJobs(1); // Fetch initial jobs when component mounts
    }, [dispatch]);

    const fetchJobs = (page) => {
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ limit: 10, offset: (page - 1) * 10 }) // Adjust offset based on page number
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.jdList);
                dispatch(fetchJobsSuccess(data.jdList))
            })
            .catch(error => dispatch(fetchJobsFailure(error.message)));
    };

    const fetchMoreJobs = () => {
        const nextPage = page + 1;
        fetchJobs(nextPage); // Fetch more jobs with the next page number
        setPage(nextPage); // Update the page state
    };

    

    if (loading && page === 1) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }
    if (error) return <div>Error: {error}</div>;


    

    return (
        <InfiniteScroll
            dataLength={jobs.length}
            next={fetchMoreJobs}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more jobs to load</p>}
        >
            <div className="job-list">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default JobList;
