import { HydratedDocument, Model } from "mongoose";

export interface IUser{
    id: string,
    role:"student",
    password: string,
    name: {
        firstName: string,
        middleName?: string,
        lastName: string
    },
    dateOfBirth?: string,
    gender: "male" | "female",
    email?: string,
    contactNo: number,
    emergencyContactNo: number,
    presentAddress: string,
    permanentAddress: string,
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, 
    IUserMethods>>;
  }

// to create instance methods
export interface IUserMethods {
    fullName(): string;
}