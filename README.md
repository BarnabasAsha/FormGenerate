# Form Generator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is hosted on [Formgenerate](https://formgenerate.netlify.app)

A form Generator component that can be used to generate a basic form.
It takes in two props the form fields data and the function that handles the form submission.

### Using formgenerate
```jsx
import FormGenerator from '../form-generator/form_generator'
    function App() {
        return <FormGenerator data="Your Data" onSubmit="Your Handle Submit function" />
    }

    export default App;
```

### Form fields data structure
```jsx
//The data structure schematic is represented thus: 

const data = {
    title: 'The form title',
    description: 'A description of the form'
    fields: [
         {
        label: 'Form Label',
        type: 'text',

        //If no validation is required it can be omitted
        validation: {
          required: true, //Either true or false
          minLength: 2    //A number
        },

        //If no errorMessage is required it can be omitted
        errorMessage: [
          { type: 'required', message: 'This is a required field' },
          { type: 'minLength', message: 'The minimum length for this field is 2 characters' }
        ]
      },
    ]
}
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

