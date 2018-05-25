import {addCustomers} from '../../data/customer.data'
import pubsub from '../pubsub'
export default { 
    createCustomer(root,{createCustomerInput}) {
        const Customer = addCustomers(createCustomerInput)
        pubsub.publish('customer', { customerSubscription: Customer })//
        return Customer
    }
}