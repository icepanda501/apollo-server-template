import {addCompany} from '../../data/company.data'

export default { 
    createCompany(root,{createCompanyInput}) {
        const company = addCompany(createCompanyInput)
        return company
    }
}