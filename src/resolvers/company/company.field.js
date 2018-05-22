import { getUsers , getUserById} from '../../data/user.data'

export default {
    users(company){
        return company.userId.map(userId=> getUserById(userId))  
    }
}