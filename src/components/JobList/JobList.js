import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } from "../../actions/searchJobAction";
import JobCard from '../JobCard/JobCard';
import './JobList.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import {BASE_URL} from "../../constants/AppConfig"

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector(state => state.searchJobReducer);
    const filterState = useSelector(state => state.filterReducer);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchJobsRequest());
        fetchJobs(1); // Fetch initial jobs when component mounts
        // eslint-disable-next-line
    }, [dispatch]);

    const fetchJobs = (page) => {
        fetch(BASE_URL, {
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

    const filterJobs = (jobs, filterState) => {
        let filteredJobs = jobs.filter(job => {
            // Filter by job role
            if (filterState.selectedRoles.length > 0) {
                const selectedRoles = filterState.selectedRoles.map(role => role.value);
                if (!selectedRoles.includes(job.jobRole.toLowerCase())) {
                    return false;
                }
            }
            // Filter by location
            if (filterState.selectedRemote.length > 0) {
                if (!filterState.selectedRemote.find(remote => remote.value.toLowerCase() === job.location.toLowerCase())) {
                    return false;
                }
            }

            // Filter by experience level
            if (filterState.selectedExpLevel) {
                const selectedExpLevel = parseInt(filterState.selectedExpLevel.value);
                if (selectedExpLevel >= parseInt(job.minExp)) {
                    return false;
                }
            }

            // Filter by minimum base pay
            if (filterState.selectedBasePay) {
                const selectedBasePay = parseInt(filterState.selectedBasePay.value);
                if (selectedBasePay >= parseInt(job.minJdSalary)) {
                    return false;
                }
            }
            // Add more filters
            return true;
        });

        return filteredJobs;
    };


    if (loading && page === 1) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }
    if (error) return <div>Error: {error}</div>;

    const filteredJobs = filterJobs(jobs, filterState);

    if (filteredJobs.length === 0) {
        return <div>Please update search criteria to filter jobs.</div>;
    }

    return (
        <InfiniteScroll
            dataLength={filteredJobs.length}
            next={fetchMoreJobs}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more jobs to load</p>}
        >
            <div className="job-list">
                {filteredJobs.map((job, index)=>{
                    return <JobCard key={job.jdUid + "_" + index} job={job} />
                })}
            </div>
        </InfiniteScroll>
    );
};

export default JobList;