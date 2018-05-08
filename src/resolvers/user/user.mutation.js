export default { 
    createUser(root,{createUserInput}) {
        return {
            firstName:createUserInput.firstName,
            lastName:createUserInput.lastName,
            fullName: createUserInput.firstName + " " +createUserInput.lastName,
            email:createUserInput.email
        }
    }
}