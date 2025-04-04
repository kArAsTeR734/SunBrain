import {createContext, FC, PropsWithChildren, useState} from "react";

interface ModalContextType {
    modal: boolean,
    setActive: (active: boolean) => void,
    CancelItem: () => void,
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: FC<PropsWithChildren> = ({children}) => {

    const [modal, setModal] = useState(false);

    const CancelItem = () => {
        setModal(modal);
    }

    const setActive = () => {
        setModal(!modal);
    }
    return (
        <ModalContext.Provider value={{CancelItem, modal, setActive}}>
            {children}
        </ModalContext.Provider>
    )
};