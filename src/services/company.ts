import {company} from "../schema/company.schema"
import { companyModel } from '../config/dbConfig'

export const saveData = async () : Promise<any> => {
    try {
        const response = await fetch('https://api.twenty.com/rest/companies',{ headers: {"Authorization" : `Bearer ${process.env.TOKEN}`} })
        const companyData = await response.json()
        const data:[] = duplicate(companyData.data.companies)
        // const count = companyData.data.companies.filter(() => true).length;
        // console.log(data);

        
        const  cData = await companyModel.insertMany(data);
        return cData
    } catch (error) {
        console.log(error);
    }
}

const duplicate = (array:[]) =>{

    // Use reduce to create an array of unique IDs
    const uniqueArray = array.reduce((acc:any, current:any) => {
        if (!acc.includes(current.id)) {
            acc.push(current);
        }
        return acc;
    }, []);
    return uniqueArray
}