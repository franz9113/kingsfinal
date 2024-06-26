
import { db } from "../index";
import { addDoc, collection, getDocs } from "firebase/firestore"; 

// collection name
const COLLECTION_NAME = "users";

// mapping the user document
export type User = {
    email: string;
};

// retrieve all users
export const getUsers = async (): Promise<Array<User>> => {
    
    const snapshot = await getDocs(collection(db,COLLECTION_NAME));
    const data: Array<any> = [];

    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, // because id field in separate function in firestore
            ..._data.data(), // the remaining fields
        });
    });

    // return and convert back it array of user
    return data as Array<User>;
};

// create a user
export const createUser = async (user: User): Promise<User> => {
    try {
    const docRef = await addDoc(collection(db,COLLECTION_NAME), {
        ...user
      });
      console.log("Document written with ID: ", docRef.id);

    // return new created user
      return {
        id: docRef.id,
        ...user,
    } as User;

    } catch (e) {
      console.error("Error adding document: ", e);
      return {
        id: null,
        ...user,
    } as User;
    
    }
   
};