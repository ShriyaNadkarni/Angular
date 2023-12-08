export const errors = {
    error: {
        required: '* This filed is required',
        valid_name: '* The minimum length for the name is 3 characters',
        password_length: '* Password should be 12 charaters',
        valid_phonenumber: '* Please enter  phone number',
        valid_education: '* Please enter  education',
        valid_names : 'Numbers are not allowed for name',
        valid_email: '* Please enter valid Email (eg: EMP001)',
    },
    pattern: {
        empId : "/^EMP\d{3}$/",
        name: "/^[a-zA-Z ]*$/", 
        phoneNumberPattern : "/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    }
}