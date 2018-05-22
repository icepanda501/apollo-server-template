const users = [{
    id:1,
    firstName:"Cherprang",
    lastName:"Areekul",
    fullName: "Cherprang Areekul",
    email:"cherprang@bnk.com",
},{
    id:2,
    firstName:"Praewa",
    lastName:"Suthamphong",
    fullName: "Praewa Suthamphong",
    email:"Praewa@bnk.com",
},{
    id:3,
    firstName:"Chadatan",
    lastName:"Dankul",
    fullName: "Chadatan Dankul",
    email:"Chadatan@sweat.com",
}]



export const getUsers = ()=>{
    return users
}

export const addUsers = (user)=>{
    user.fullName = user.firstName + " " + user.lastName
    users.push(user)
    return user
}

export const getUserById = (id)=>{
    return users.filter(user=>user.id===id)[0]
}