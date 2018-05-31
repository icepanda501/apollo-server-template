import pubsub from '../pubsub'
export default {
    userSubscription:{
        subscribe: () => pubsub.asyncIterator('user')
      },
}