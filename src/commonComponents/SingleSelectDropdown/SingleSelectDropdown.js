import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchBar = styled('div')({
    display: 'inline-block',
    minWidth: 200,
    padding: 5, 
});

const Label = styled('div')({
    textAlign: 'left',
});

const CustomAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-inputRoot': {
        padding: '5px 12px', 
        lineHeight: '1.5', 
        minHeight: 'unset',
    },
    '& .MuiAutocomplete-popupIndicator': {
        padding: '8px',
    },
});

function SingleSelectDropdown({ options, placeholder, value, onChange }) {

    const getByLabelText = (value) => {
        if (value === "Select Min Base Pay") {
            return "Min Base Pay";
        } else if (value === "Select Exp Level") {
            return "Experience";
        }
    };

    return (
        <SearchBar>
            {value && <Label>{getByLabelText(placeholder)}</Label>}
            <CustomAutocomplete
                id="combo-box-demo"
                options={options}
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                getOptionLabel={(option) => option.key || ''}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        placeholder={placeholder}
                    />
                )}
            />
        </SearchBar>
    );
}

export default SingleSelectDropdown;
