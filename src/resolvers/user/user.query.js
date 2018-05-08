import userData from '../../data/user.data'

export default {
    user(root,{id}){
        return userData[0]
    },
    users(){
        return userData
    },
}