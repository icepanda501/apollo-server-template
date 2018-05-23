const companies =  [{
    id: 1,
    name:"bnk48",
    userId: [1,2]
},{
    id:2,
    name:"sweat16",
    userId: [3]
}]


export const getCompany = ()=>{
    return companies
}

export const addCompany = (company)=>{
    companies.push(company)
    return company
}

export const getCompanyById =(aaa)=>{

    const checkcompany = (value) => {
        console.log("aaa.id",aaa.id)
        if(value.userId.indexOf(aaa.id)>=0){
          return true;
        }
        return false;
      }
      
      
      const result = companies.filter(checkcompany);
      console.log(result)
    return result
}