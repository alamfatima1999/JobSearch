import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE
} from '../actions/searchJobAction';

const initialState = {
    jobs: [],
    loading: false,
    error: null
};

const searchJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_JOBS_SUCCESS:
            return { ...state, loading: false, jobs: [...state.jobs, ...action.payload], error: null };
        case FETCH_JOBS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default searchJobsReducer;
