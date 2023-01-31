import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";

const AppContext = createContext();
const initialState = {
    language: localStorage.getItem('language') || 'fa'
};

const AppProvider = ({children}) => {
    const {i18n} = useTranslation();
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeLanguage = (language) => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: language});
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
    }, [state.language])

    return <AppContext.Provider value={{...state, changeLanguage}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider}