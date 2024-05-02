import React from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchBar = styled('div')({
    display: 'inline-block',
    minWidth: 200,
    padding: 5,
});

const Label = styled('div')({
    textAlign: 'left',
    fontWeight: 500
});

const ChipStyled = styled(Chip)({
    margin: 5, 
    borderRadius: 0,
});

const CustomAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-inputRoot': {
        padding: '4px 4px',
        lineHeight: '1.5',
        minHeight: 'unset', 
    },
    '& .MuiAutocomplete-popupIndicator': {
        padding: '8px', 
    },
});

function MultiSelectDropdown({ options, placeholder, value, onChange }) {
    const getByLabelText = (value) => {
        if (value === "Select Roles") {
            return "Roles";
        } else if (value === "Select Employee Count") {
            return "No. of Employee";
        } else if (value === "Select Remote Option") {
            return "Remote";
        } else if (value === "Select Tech Stack") {
            return "Tech";
        }
    };

    return (
        <SearchBar>
            {value.length > 0 && <Label>{getByLabelText(placeholder)}</Label>}
            <CustomAutocomplete
                multiple
                id="tags-outlined"
                options={options}
                value={value}
                getOptionLabel={(option) => option.key}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        placeholder={value.length > 0 ? "" : placeholder}
                    />
                )}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <ChipStyled
                            {...getTagProps({ index })}
                            key={option.key} 
                            label={option.key}
                        />
                        
                    ))
                }
            />
        </SearchBar>
    );
}

export default MultiSelectDropdown;
