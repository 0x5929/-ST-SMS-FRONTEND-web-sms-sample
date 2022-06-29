import React, { forwardRef } from 'react';
import { 

    FormControl,
    InputLabel, 
    MenuItem, 
    Select as MuiSelect } from '@mui/material';

import { useInputValue } from '../../hooks'

const Select2 = forwardRef((props, parentRef) => {

    console.log('Select2 component rendered')

    const { 
        name, 
        label, 
        initialValue='', 
        errorHandler, 
        showError, 
        clearFields,
        required, 
        options,  ...others } = props
    
    const [ { value, error }, { inputOnChange } ]  = useInputValue({initialValue, errorHandler, clearFields})


    return (
        <FormControl
            variant="outlined"
            required={required}
        >
            <InputLabel> { label }</InputLabel>
            <MuiSelect
                inputRef={parentRef}
                label={label}
                name={name}
                value={value}
                onChange={inputOnChange}
                { ...((showError && errorHandler(value)) || error)  }

                {...others}
            >
                {
                    options.map(
                        option=> (
                            <MenuItem 
                                key={option.value} 
                                value={option.value}
                            >
                                { option.title }
                            </MenuItem>
                    ))
                }

            </MuiSelect>
        </FormControl>

      );
});

export default React.memo(Select2)