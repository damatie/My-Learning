import { createContext,useContext, useReducer } from "react";

export  const AppContext =  createContext();


export function AppWrapper({reducer,initialState,children}) {
    // let sharedGlobalState = {}
    // const [user, setUser] = useState('hello')

    return (
        <AppContext.Provider value={useReducer(reducer,initialState )}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppData = ()  => useContext(AppContext);