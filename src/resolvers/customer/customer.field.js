import {customerGetCompanyById} from '../../data/company.data'

export default {
    company(object){
        return customerGetCompanyById(object.id)
    }
    
}