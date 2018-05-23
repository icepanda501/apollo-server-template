import {addCustomers} from '../../data/customer.data'

export default { 
    createCustomer(root,{createCustomerInput}) {
        const Customer = addCustomers(createCustomerInput)
        console.log(Customer)
        return Customer
    }
}