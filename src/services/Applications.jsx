import { databases, DATABASE_ID } from "./Appwrite";
import { v4 as uuidv4 } from "uuid";
const FARMER_APPLICATION_COLLECTIONS_ID = import.meta.env.VITE_APPWRITE_FARMER_APPLICATIONS;

//postApplication
//getApplications

export const postApplication = async (applicationData)=>{
    try {
        return await databases.createDocument(DATABASE_ID, FARMER_APPLICATION_COLLECTIONS_ID, uuidv4(), applicationData);
    } catch (error) {
        console.log(error)
    }
}

export const getApplications = async ()=>{
    try {
        const appliDocs =  await databases.listDocuments(DATABASE_ID, FARMER_APPLICATION_COLLECTIONS_ID);
        return appliDocs.documents;
    } catch (error) {
        console.log(error)
    }
}