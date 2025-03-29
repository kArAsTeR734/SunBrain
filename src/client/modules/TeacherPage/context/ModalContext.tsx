// import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
// import {IDetail} from "../models/IDetail.ts";
// import {DetailService} from "../API/DetailService.ts";
// import {useMutation, useQueryClient} from "@tanstack/react-query";
// import {useLogin} from "../hooks/useLogin.ts";
//
// interface ModalContextType {
//     ChangeItem: (item: IDetail | undefined) => void
//     CreateItem: (item: IDetail) => void,
//     CancelItem: () => void,
//     modal: boolean,
//     setActive: (active: boolean) => void,
// }
//
// export const ModalContext = createContext<ModalContextType | null>(null);
//
// export const ModalProvider: FC<PropsWithChildren> = ({children}) => {
//
//     const queryClient = useQueryClient();
//     const [modal, setModal] = useState(false);
//     const {accessToken,fetchToken} = useLogin();
//     useEffect(() => {
//         fetchToken();
//     }, []);
//     const createMutation = useMutation({
//         mutationFn: (newItem: IDetail) => DetailService.createDetail(accessToken, newItem),
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ["pageDetails", "allDetails"],
//             });
//             setModal(false);
//         }
//     });
//
//     const editMutation = useMutation({
//         mutationFn: (editingDetail: IDetail) => DetailService.editDetail(accessToken, editingDetail),
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ["pageDetails", "allDetails"],
//             });
//             setModal(false);
//         }
//     });
//
//     const CreateItem = (item: IDetail) => {
//         createMutation.mutate(item);
//     }
//
//     const ChangeItem = (detail: IDetail | undefined) => {
//         if (detail){
//             editMutation.mutate(detail);
//         }
//     };
//
//     const CancelItem = () => {
//         setModal(modal);
//     }
//
//     const setActive = () => {
//         setModal(!modal);
//     }
//     return (
//         <ModalContext.Provider value={{CreateItem, ChangeItem, CancelItem, modal, setActive}}>
//             {children}
//         </ModalContext.Provider>
//     )
// };