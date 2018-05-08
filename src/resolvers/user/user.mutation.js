import { getUserById , addUsers , getUsers} from '../../data/user.data'

export default { 
    createUser(root,{createUserInput}) {
        const user = addUsers(createUserInput)
        return user
    }
}