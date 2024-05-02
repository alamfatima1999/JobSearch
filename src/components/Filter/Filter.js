import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import MultiSelectDropdown from '../../commonComponents/MultiSelectDropdown/MultiSelectDropdown';
import SingleSelectDropdown from "../../commonComponents/SingleSelectDropdown/SingleSelectDropdown"
import { TextField } from '@mui/material';
import { roles, employeeCounts, remoteOptions, techStack, minBasePay, expLevel } from '../../constants/AppConfig';
import filterReducer from '../../reducers/filterReducer';
import { updateFilter } from "../../actions/filterAction"
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-input': {
        padding: '5px 12px', 
        lineHeight: '1.5', 
    },
});

function Filter() {
    const initialState = {
        selectedRoles: [],
        selectedEmployeeCount: [],
        selectedRemote: [],
        selectedTechStack: [],
        selectedBasePay: null,
        selectedExpLevel: null,
        selectedCompanyName: ""
    };

    const [state, localDispatch] = useReducer(filterReducer, initialState);
    const reduxDispatch = useDispatch();

    const handleChange = (key, value) => {
        localDispatch(updateFilter(key, value));
        reduxDispatch(updateFilter(key, value)); // Triggering redux dispatch
    };

    return (
        <div>
            <h2>Search Jobs</h2>
            <MultiSelectDropdown
                options={roles}
                placeholder="Select Roles"
                value={state.selectedRoles}
                onChange={(newValue) => handleChange('selectedRoles', newValue)}
            />
            <MultiSelectDropdown
                options={employeeCounts}
                placeholder="Select Employee Count"
                value={state.selectedEmployeeCount}
                onChange={(newValue) => handleChange('selectedEmployeeCount', newValue)}
            />
            <MultiSelectDropdown
                options={remoteOptions}
                placeholder="Select Remote Option"
                value={state.selectedRemote}
                onChange={(newValue) => handleChange('selectedRemote', newValue)}
            />
            <MultiSelectDropdown
                options={techStack}
                placeholder="Select Tech Stack"
                value={state.selectedTechStack}
                onChange={(newValue) => handleChange('selectedTechStack', newValue)}
            />
            <SingleSelectDropdown
                options={minBasePay}
                placeholder="Select Min Base Pay"
                value={state.selectedBasePay}
                onChange={(newValue) => handleChange('selectedBasePay', newValue)} />

            <SingleSelectDropdown
                options={expLevel}
                placeholder="Select Exp Level"
                value={state.selectedExpLevel}
                onChange={(newValue) => handleChange('selectedExpLevel', newValue)} />
            <div>
            <CustomTextField
                id="companyName"
                name="companyName"
                placeholder="Search Company Name"
                variant="outlined"
                color="primary"
                value={state.selectedCompanyName}
                onChange={(event) => handleChange('selectedCompanyName', event.target.value)}
            />
            </div>
        </div>
    );
}

export default Filter;
