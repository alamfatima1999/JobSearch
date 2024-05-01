export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsRequest = () => {
    return {
        type: FETCH_JOBS_REQUEST
    };
};

export const fetchJobsSuccess = (jobs) => {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload: jobs
    };
};

export const fetchJobsFailure = (error) => {
    return {
        type: FETCH_JOBS_FAILURE,
        payload: error
    };
};
