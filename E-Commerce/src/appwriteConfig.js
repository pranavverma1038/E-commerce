import { Client,Account } from 'appwrite';


const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6818f678001d923d430a');

export const account = new Account(client);

export default Client;