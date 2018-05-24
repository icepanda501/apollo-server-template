import {userGetCompanyById} from '../../data/company.data'

export default {
    company(object){
        return userGetCompanyById(object.id)
    }
    
}