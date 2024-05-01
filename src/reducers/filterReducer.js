// filterReducer.js
import {UPDATE_FILTER} from "../actions/filterAction";


const initialState = {
    selectedRoles: [],
    selectedEmployeeCount: [],
    selectedRemote: [],
    selectedTechStack: [],
    selectedBasePay: null,
    selectedExpLevel: null,
    selectedCompanyName: ""
};
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        default:
            return state;
    }
};
export default filterReducer;