import express from 'express'
import * as companyController from '../controller/company'

export const companyRouter = express.Router();

companyRouter.post("/create", companyController.saveData)