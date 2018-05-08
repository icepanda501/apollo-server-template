import { getUserById , addUsers , getUsers} from '../../data/user.data'

export default {
    user(root,{id}){
        return getUserById(id)
    },
    users(){
        return getUsers()
    },
}