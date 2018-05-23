import {getCompanyById} from '../../data/company.data'

export default {
    company(aaa){
        return getCompanyById(aaa)
    },
    eao(aaa){
        console.log(aaa)
        return "eao"
    }
    
}