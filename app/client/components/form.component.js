import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { connect } from "react-redux";

class renderField extends Component {

    render() {
        return (
            <div className="input-row">
                <input {...this.props.input} type="text"/>
                {this.props.meta.touched && this.props.meta.error &&
                <span className="error">{this.props.meta.error}</span>}
            </div>
        );
    }
}

class FormComponent extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="text" component={renderField}/>
            </form>
        );
    }
}

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
