import React from 'react';

// TODO: rewrite the same component as a functional component

const FormField = (props) => {
	if(props.fieldType === "text") {
		return (
	        <div className="form-field">
	        	<label className="input-label" htmlFor={props.name}>{props.labelName}</label>
	        	<input className="input-field" type="text" id={props.name} name={props.name} onChange={(event) => props.valueChange(event)}/>
	        </div>
			)	
	} else if(props.fieldType === "textarea") {
		return (
	        <div className="form-field">
	        	<label className="input-label" htmlFor={props.name}>{props.labelName}</label>
	        	<textarea className="input-field" type="text" id={props.name} name={props.name} onChange={(event) => props.valueChange(event)}/>
	        </div>
			)
	}
}

export default FormField;
