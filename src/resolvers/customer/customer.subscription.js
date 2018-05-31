import pubsub from '../pubsub'
export default {
    customerSubscription:{
        subscribe: () => pubsub.asyncIterator('customer')
      },
}