import { Request, Response } from "express";
import * as companyService from "../services/company"

export const saveData = async (req:Request,res:Response) => {
    try {                
        const data = await companyService.saveData()
        return res.status(200).json({message:"data saved successfully", success:true, data})
    } catch (error) {
        res.send(error)
    }
}