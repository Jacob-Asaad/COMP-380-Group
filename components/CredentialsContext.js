// Here in this new file we are importing our createContext from react
import {createContext} from 'react';

// credentials context
         // now the createContext will take an object
        // and for now we pass two parameters to it
        // the 1st is our stored credentials and the 
        // 2nd will be a method to set the values of
        // our stored credentials, we will use the same name
        // as the state variables in our app.js file
                                                // init empt obj        init empt func body
export const CredentialsContext = createContext({storedCredentials: {}, setStoredCredentials: () => {}})
// now lets import the CredentialsContext in our app.js file