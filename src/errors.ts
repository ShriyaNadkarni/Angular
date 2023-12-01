export const errors = {
    error: {
        required: '* This filed is required',
        valid_name: '* The minimum length for the name is 3 characters',
        password_length: '* Password should be 12 charaters',
        valid_department: '* Please enter  department',
        valid_jobtitle: '* Please enter  Job title',
        valid_names : 'Numbers are not allowed for name',
        valid_emplyId: '* Please enter valid Employee ID (eg: EMP001)',
    },
    pattern: {
        empId : "/^EMP\d{3}$/",
        name: "/^[a-zA-Z ]*$/", 
    }
}