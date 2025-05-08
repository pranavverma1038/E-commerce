import { Client,Account,Databases } from 'appwrite';
import conf from './conf/conf';

const client = new Client();
client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const databases = new Databases(client);
export const account = new Account(client);

export  {Client,databases};