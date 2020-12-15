// edit for making sure every question is filled with mcq
const validation = Yup.object().shape({
    firstName: Yup.string()
        .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
        .required()
        .max(35),
    lastName: Yup.string()
        .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
        .required()
        .max(35),
    address: Yup.string()
        .required(),
    city: Yup.string()
        .matches(alpha, {message: "Enter Valid city", excludeEmptyString: true })
        .required(),
    occupation: Yup.string()
        .test('county', 'cannot be empty', value => value !== 'Please Select')
        .required('required'),
    message: Yup.string()
        .required('required'),
    terms: Yup.string()
        .test('terms', 'you must agree to terms', value => value !== false)
        .required('required'),
    });
