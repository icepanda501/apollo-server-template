import {getCompanyById} from '../../data/company.data'

export default {
    company(object){
        return getCompanyById(object.id)
    }
    
}