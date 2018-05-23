import {getCustomer, getCustomerById}  from '../../data/customer.data'

export default{       
    Customer(root,{id}){
        return getCustomerById(id)
    },
    Customers(){
        return getCustomer()
    },
    
}