import { Client,Account,Databases } from 'appwrite';


const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6818f678001d923d430a');

const databases = new Databases(client);
export const account = new Account(client);

export  {Client,databases};