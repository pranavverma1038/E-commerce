import React, {useState,useEffect,useContext,createContext, Children}from 'react'
import { account } from '../appwriteConfig'
import { ID } from 'appwrite'


const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [loading, setLaoding] = useState(true)
    const [user, setUser] = useState(null)


    useEffect(()=>{
        checkUserStatus()
        
    },[])

    const loginUser = async (userInfo) =>{
        setLaoding(true)
        try{
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetail = await account.get()
            setUser(accountDetail)

        }catch(error){
            console.error(error)
        }
        setLaoding(false)
    }

    const logoutUser= () =>{
        account.deleteSession('current')
        setUser(null)
    }

    const registerUser= async (userInfo)=>{
        setLaoding(true)
        try{
            let response = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password1,
            userInfo.name
            )

            await createEmailPasswordSession(
                userInfo.email,
                userInfo.password1
            )
            let accountDetail = await account.get()
            setUser(accountDetail)

        }catch(error){
            console.error(error)
        }
        setLaoding(false)
    }

    const checkUserStatus= async ()=>{
        try{
            let accountDetails = await account.get() 
            setUser(accountDetails)



        }catch(error){

        }
        setLaoding(false)
    }
    

    const contextData={
        user,
        loginUser,
        logoutUser,
        registerUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>loading</p> : children}
        </AuthContext.Provider>
    )
    
}
  
export const useAuth=()=>{return useContext(AuthContext)}

export default AuthContext