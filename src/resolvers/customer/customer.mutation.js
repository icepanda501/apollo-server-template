import {addCustomers} from '../../data/customer.data'

export default { 
    createUser(root,{createUserInput}) {
        const Customer = addCustomers(createUserInput)
        return Customer
    }
}