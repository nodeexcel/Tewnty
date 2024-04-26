import mongoose from 'mongoose'
import {company} from "../schema/company.schema"

export const companyModel = ()=>{
    mongoose.model('companyModel',company)
}