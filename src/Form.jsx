import React from 'react';
import { useFormik } from 'formik';
import { CustomSelect } from './CustomSelect';


function Form () {

    const options = [
        {value: "Epics", label: 'Epics' },
        {value: "Scontainers", label: 'Scontainers' }
    ]
    const validate = values => {
        const errors = {}

        if(!values.platform){
            errors.platform='Required'
        }
        if (!values.programName) {
            errors.programName = 'Required'
        }

        if(!values.programID){
            errors.programID='Required'
        }


        return errors
    }


    const formik = useFormik({
        initialValues: {
            programName: '',
            programID: ' ',
            platform: ' ',
            // programSom: '',
            // programNon: ' ',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        }
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
            <label>Program Name:</label>
            <input
                id="name"
                name="programName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.programName}/>
                {formik.errors.programName ? <div className='error'>{formik.errors.programName}</div> : null}

            <label>Program ID:</label>
            <input
                id="id"
                name="programID"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.programID}/>
                {formik.errors.programID ? <div className='error'>{formik.errors.programID}</div> : null}
            <label>Choose Platform</label>
                <CustomSelect
                onChange={value=> formik.setFieldValue('platform', value.value)}
                value={formik.values.platform}
                options={options}
                />
                {formik.errors.platform ? <div className='error'>{formik.errors.platform}</div> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;