import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderField() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} label={label} type="text" name={name} />
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderField()}
                    <Link to='/surveys' className="red btn-flat white-text">Cancel</Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        <i className="meterial-icons">done</i>
                    </button>
                </form>

            </div>
        );
    };
};

function validate(values) {
    
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');


    _.each(formFields, ({name}) => {
        if(!values[name]) {
           return errors[name] = 'You must provide a value'
        };
    });

    
    return errors;
};

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);