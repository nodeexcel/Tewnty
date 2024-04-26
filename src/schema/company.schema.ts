import { Schema } from "mongoose"

export const company = new Schema({
    _id:String,
    name:String,
    createdAt: String,
    updatedAt: String,
    domainName: String,
    address: String,
    employees: Number,
    idealCustomerProfile: Boolean,
    position: Number,
    accountOwnerId: String,
    type: String,
    linkedinLink: { label: String, url: String },
    xLink: { label: String, url: String },
    annualRecurringRevenue: { amountMicros: String, currencyCode: String },
    activityTargets: [String],
    favorites: [String],
    attachments: [String],
    timelineActivities: [String],
    accountOwner: {
      id: String,
      createdAt: String,
      updatedAt: String,
      colorScheme: String,
      locale: String,
      avatarUrl: String,
      userEmail: String,
      userId: String,
      name: [String]
    }
  })