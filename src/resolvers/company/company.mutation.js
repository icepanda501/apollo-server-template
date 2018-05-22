import {addCompany} from '../../data/company.data'

export default { 
    createCompany(root,{createCompanyInput}) {
        const company = addCompany(createCompanyInput)
        console.log(company)
        return company
    }
}