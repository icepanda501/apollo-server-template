const companies =  [{
    id: 1,
    name:"bnk48",
    userId: [1,2],
    customerId: [1,2]
},{
    id:2,
    name:"sweat16",
    userId: [3],
    customerId: [2,3]
}]


export const getCompany = ()=>{
    return companies
}

export const addCompany = (company)=>{
    companies.push(company)
    return company
}


export const userGetCompanyById =(id)=>{
    const checkcompany = (value) => {
        return value.userId.indexOf(id)>=0
    }
      const result = companies.filter(checkcompany);     
    return result
}

export const customerGetCompanyById =(id)=>{
    const checkcompany = (value) => {
        return value.customerId.indexOf(id)>=0
    }
      const result = companies.filter(checkcompany);     
    return result
}