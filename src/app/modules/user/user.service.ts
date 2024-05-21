import { IUser } from "./user.interface"
import User from "./user.model"

// export const createUserToDB = async()=>{
//     const user = await new User({
//         id: "100000",
//         role:"student",
//         password: "jhakanaka",
//         name: {
//             firstName: "Tenda",
//             middleName: "Karim",
//             lastName: "Hridoy"
//         },
//         gender: "male",
//         email: "rfxhridoy@gmail.com",
//         contactNo: "017777",
//         emergencyContactNo: "018888",
//         presentAddress: "Uganda",
//         permanentAddress: "USA",
//     })

//     await user.save()
//     return user
// } 

export const createUserToDB = async(payload: IUser)
:Promise<IUser> =>{
    const user = await new User(payload)
    await user.save()
    return user
} 

export const getUsersFromDB = async(): Promise<IUser[]> => {
    const users = await User.find() 
    return users
}

export const getUserByIdFromDB = async(payload: string)
:Promise<IUser | null> => {
    const user = await User.findOne({ id:payload }, {name: 1}); // Field Filtering
    return user
}