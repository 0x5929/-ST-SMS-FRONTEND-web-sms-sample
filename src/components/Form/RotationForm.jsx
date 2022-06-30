import React from 'react'

import { 
    Box as MuiBox, 
    Stack as MuiStack } from '@mui/material';

import {
    Input,
    Select } from '../Inputs'

import {  BaseButton as Button } from '../Buttons'



import { createRotationFormStyles } from './styles'

const Styles = createRotationFormStyles({MuiStack, MuiBox})


function RotationForm({ getCourseOptions, addRotHandlers, addRotStates, ...others }) {
    console.log('AddRotationForm component rendered')

    const {

        rotationFormValues,
        rotationFormErrors,

    } = addRotStates

    const {

        handleAddRotSubmit, 
        handleAddRotInputChange, 
        handleAddRotClear,

    } = addRotHandlers

    return (
        <Styles.AddRotForm onSubmit={(e)=>(handleAddRotSubmit(e))} {...others}>
            <Styles.Stack>
                <Select 
                    name="programName"
                    label="Program Name"
                    onChange={handleAddRotInputChange}
                    options={getCourseOptions()}
                    error={rotationFormErrors.programName}
                    value={rotationFormValues.programName}
                    defaultValue={getCourseOptions()[0].value}
                />
                <Input 
                    name="rotation"
                    label="Rotation Number"
                    value={rotationFormValues.rotation}
                    onChange={handleAddRotInputChange}
                    error={rotationFormErrors.rotation}
                />
                <Styles.ButtonContainerBox>
                    <Button 
                        text="Submit"
                        type="submit"
                    />
                    <Button 
                        text="Cancel"
                        color="error"
                        onClick={handleAddRotClear}
                    />
                </Styles.ButtonContainerBox>
            </Styles.Stack>
        </Styles.AddRotForm>
  )
}

export default React.memo(RotationForm)