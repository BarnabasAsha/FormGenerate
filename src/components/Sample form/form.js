import React from 'react'
import FormGenerator from '../form-generator/form_generator'

function SampleForm() {
  const formData = {
    title: 'Police Brutality Form',
    description: 'Report a case where you encountered police brutality',
    buttonText: 'Submit',
    fields: [
      {
        label: 'What is the name of the officer in question?',
        type: 'text',
        validation: {
          required: true,
          minLength: 2
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' },
          { type: 'minLength', message: 'The minimum length for this field is 2 characters' }
        ]
      },
      {
        label: 'When was the date of the incident?',
        type: 'date',
        validation: {
          required: true,
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' },
        ]
      },
      {
        label: 'How much is the bribe that was paid? (optional)',
        type: 'number',
        validation: {
          required: false,
        },
      },
      {
        label: 'Explain the incident in detail',
        type: 'longtext',
        validation: {
          required: true,
          minLength: 50,
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' },
          { type: 'minLength', message: 'The minimum length for this field is 50 characters' }
        ]
      },
      {
        label: 'Where there any witnesses?',
        type: 'radio',
        sublabels: [
          'True',
          'False'
        ],
        validation: {
          required: true,
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' }
        ]
      },
      {
        label: 'Select as Appropriate',
        type: 'checkbox',
        sublabels: [
          '12',
          '23',
          '24'
        ],
        validation: {
          required: true,
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' }
        ]
      },
      {
        label: 'Which of this describes the situation',
        type: 'dropdown',
        sublabels: [
          'Sexual Harrasment',
          'Physical abuse',
          'Brutality',
          'lorem ipsum',
          'ipsum lorem'
        ],
        validation: {
          required: true,
        },
        errorMessage: [
          { type: 'required', message: 'This is a required field' },
        ]
      },
    ]
  }

  const submit = data => console.log(data)


  return (
    <div className="App">
      <FormGenerator data={formData} onSubmit={submit} />
    </div>
  );
}
export default SampleForm;
