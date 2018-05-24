import {addCustomers} from '../../data/customer.data'

export default { 
    createCustomer(root,{createCustomerInput}) {
        const Customer = addCustomers(createCustomerInput)
        return Customer
    }
}