import {getCustomer, getCustomerById}  from '../../data/customer.data'

export default{       
    customer(root,{id}){
        return getCustomerById(id)
    },
    customers(){
        return getCustomer()
    },
    
}