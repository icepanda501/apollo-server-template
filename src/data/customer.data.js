const Customers = [{
    id:1,
    firstName:"jordan",
    lastName:"mastakee",
    fullName: "jordan mastakee",
    email:"jordan@jordan.com",
    website:"https://www.jordan.com",
},{
    id:2,
    firstName:"Perawat",
    lastName:"sumphong",
    fullName: "Perawat sumphong",
    email:"Praewa@bnk.com",
    website:"https://www.Perawat.com",
},{
    id:3,
    firstName:"Chadaporn",
    lastName:"Dankam",
    fullName: "Chadaporn Dankam",
    email:"Chadaporn@Dankam.com",
    website:"https://www.Dankam.com",
}]

export const getCustomer = ()=>{
    return Customers
}

export const getCustomerById = (id)=>{
    return Customers.filter(Customers=>Customers.id===id)[0]
}

export const addCustomers = (Customer)=>{
    Customers.push(Customer)
    return Customer
}
