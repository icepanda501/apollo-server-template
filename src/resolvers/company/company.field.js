import { getUsers , getUserById} from '../../data/user.data'
import { companyGetCustomerById, getCustomerById } from '../../data/customer.data';

export default {
    users(company){
        return company.userId.map(userId=> getUserById(userId))  
    },
    customers(company){
        return company.customerId.map(customerId => companyGetCustomerById(customerId))
    }
}