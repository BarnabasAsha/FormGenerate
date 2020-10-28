import React from 'react'
import { useForm } from 'react-hook-form';
import './form_generator.css'

// function SwitchEntry (props) {
//     switch (props.entries.type) {
//         case 'text':
//             return <input type="text" />
//         case 'date':
//             return <input type="date" />
//         case 'number':
//             return <input type="number" />
//         case 'longtext':
//             return <textarea />
//         case 'radio':
//             return (
//                 <input type="radio" />
//             )

//         default:
//             break;
//     }
// }

function FormGenerator(props) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <h1 className="form_title">{props.data.title}</h1>
            {props.data.description ? <p className="form_description">{props.data.description}</p> : null}
            {
                /* Mapping through the data fields to return form field label and field input depending on its type */

                props.data.fields.map((entry, index) => {
                    return (
                        <div className="form_group" key={index}>
                            <label className="form_group_label">{entry.label}</label>
                            {
                                //React's conditional rendering based on entry type

                                entry.type === 'text' ? (
                                    <>
                                        <input className="form_group_input" type="text" name={entry.label} ref={register(entry.validation)} />
                                        <span className="error">
                                            {
                                                entry.errorMessage ? (
                                                    entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                ) : null
                                            }
                                        </span>
                                    </>
                                ) : (
                                        entry.type === 'number' ? (
                                            <>
                                                <input className="form_group_input" type="number" name={entry.label} ref={register(entry.validation)} />
                                                <span className="error">
                                                    {
                                                        entry.errorMessage ? (
                                                            entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                        ) : null
                                                    }
                                                </span>
                                            </>
                                        ) : (
                                                entry.type === 'date' ? (
                                                    <>
                                                        <input className="form_group_input" type="date" name={entry.label} ref={register(entry.validation)} />
                                                        <span className="error">
                                                            {
                                                                entry.errorMessage ? (
                                                                    entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                                ) : null
                                                            }
                                                        </span>
                                                    </>
                                                ) : (
                                                        entry.type === 'longtext' ? (
                                                            <>
                                                                <textarea className="form_group_textarea" name={entry.label} ref={register(entry.validation)} />
                                                                <span className="error">
                                                                    {
                                                                        entry.errorMessage ? (
                                                                            entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                                        ) : null
                                                                    }
                                                                </span>
                                                            </>
                                                        ) : (
                                                                entry.type === 'radio' ? (
                                                                    <>
                                                                        {
                                                                            entry.sublabels.map((label, index) => {
                                                                                return (
                                                                                    <>
                                                                                        <div className="form_subgroup" key={index}>
                                                                                            <input type="radio" name={entry.label} id={label} ref={register(entry.validation)} value={label} />
                                                                                            <label className="form_subgroup_label" htmlFor={label}>{label}</label>
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                        <span className="error">
                                                                            {
                                                                                entry.errorMessage ? (
                                                                                    entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                                                ) : null
                                                                            }
                                                                        </span>
                                                                    </>

                                                                ) : (
                                                                        entry.type === 'checkbox' ? (
                                                                            <>
                                                                            {
                                                                                entry.sublabels.map((label, index) => {
                                                                                    return (
                                                                                        <div className="form_subgroup" key={index}>
                                                                                            <input type="checkbox" name={entry.label} id={label} ref={register(entry.validation)} value={label} />
                                                                                            <label className="form_subgroup_label" htmlFor={label}>{label}</label>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                            <span className="error">
                                                                            {
                                                                                entry.errorMessage ? (
                                                                                    entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                                                ) : null
                                                                            }
                                                                        </span>
                                                                            </>
                                                                        ) : (
                                                                                entry.type === 'dropdown' ? (
                                                                                    <>
                                                                                        <select className="form_select" name={entry.label} ref={register(entry.validation)}>
                                                                                            <option value="">Select...</option>
                                                                                            {
                                                                                                entry.sublabels.map((label, index) => {
                                                                                                    return <option value={label} key={index}>{label}</option>
                                                                                                })
                                                                                            }
                                                                                        </select>
                                                                                        <span className="error">
                                                                                            {
                                                                                                entry.errorMessage ? (
                                                                                                    entry.errorMessage.map((error) => errors[entry.label] && errors[entry.label].type === error.type && error.message)
                                                                                                ) : null
                                                                                            }
                                                                                        </span>
                                                                                    </>
                                                                                ) : null
                                                                            )
                                                                    )
                                                            )
                                                    )
                                            )
                                    )
                            }
                        </div>
                    )
                })
            }
            <button className="form_button" type="submit">{props.data.buttonText || 'Submit'}</button>
        </form>
    )
}

export default FormGenerator