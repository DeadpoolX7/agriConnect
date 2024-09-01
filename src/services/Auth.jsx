import { account } from './Appwrite';
import {v4 as uuidv4 } from 'uuid';

export const registerUser = async (data) => {
    try {
        const userId = uuidv4().toString();
        console.log(userId)
        const response = await account.create(userId, data.email, data.password, data.name);
        alert('sucessful signup')
        //await account.createSession(data.email, data.password);
       // await account.updatePrefs({ role });
        return response;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (data) => {
    try {
        return await account.createEmailPasswordSession(data.email, data.password);
    } catch (error) {
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        return await account.deleteSession('current');
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        return await account.get();
    } catch (error) {
        throw error;
    }
};