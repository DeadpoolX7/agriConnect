import { databases, DATABASE_ID } from './Appwrite';

export const COMPANY_CONTRACTS_COLLECTION_ID = '66cc5588000cc3c9f791';


//goes to company
export const createContract = async (contractData) => {
    try {
        return await databases.createDocument(DATABASE_ID, COMPANY_CONTRACTS_COLLECTION_ID, 'unique()', contractData);
    } catch (error) {
        throw error;
    }
};


//goes to admin
export const getContracts = async () => {
    try {
        const contracts =  await databases.listDocuments(DATABASE_ID, COMPANY_CONTRACTS_COLLECTION_ID);
        return contracts.documents;
    } catch (error) {
        throw error;
    }
};

export const updateContract = async (contractId, updateData) => {
    try {
        return await databases.updateDocument(DATABASE_ID, COMPANY_CONTRACTS_COLLECTION_ID, contractId, updateData);
    } catch (error) {
        throw error;
    }
};


//goes to company
export const deleteContract = async (contractId) => {
    try {
        return await databases.deleteDocument(DATABASE_ID, COMPANY_CONTRACTS_COLLECTION_ID, contractId);
    } catch (error) {
        throw error;
    }
};