import React, {ReactNode, useEffect, useState} from 'react';
import {GlobalStoreStateContext} from "./context";
import {GlobalStoreDispatchContext} from "./context"
import {AppStoreType} from "../redux/redux-store";

type StoreProviderProps = {
    children: ReactNode
    store: AppStoreType
}

const StoreProvider: React.FC<StoreProviderProps> = ({children, store}) => {
    const [state, setState] = useState(store.getState())
    const dispatch = store.dispatch

    useEffect(() => {
        return store.subscribe(() => {
            setState(store.getState())
        })
    }, [store])

    return (
        <GlobalStoreStateContext.Provider value={state}>
            <GlobalStoreDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalStoreDispatchContext.Provider>
        </GlobalStoreStateContext.Provider>
    )
}

export default StoreProvider