import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { connect } from "react-redux";

const renderField = (field) => (
    <div className="input-row">
        <input {...field.input} type="text"/>
        {field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>
);

let FormComponent = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field name="text" component={renderField}/>
    </form>
);

FormComponent = reduxForm({
    form: 'demo'
})(FormComponent);


FormComponent = connect(
    state => {
        return ({
            initialValues: state.demoForm
        });
    }
)(FormComponent);

export default FormComponent;
