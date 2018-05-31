import { addUsers} from '../../data/user.data'
import pubsub from '../pubsub'

export default { 
    createUser(root,{createUserInput}) {
        const user = addUsers(createUserInput)
        pubsub.publish('user', { userSubscription: user })//
        return user
    }
}