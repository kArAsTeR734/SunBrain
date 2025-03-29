// import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
// import {DetailService} from "../API/DetailService.ts";
// import {useFetching} from "../hooks/useFetching.ts";
// import {getTotalCount} from "../utils/GetTotalCount.ts";
// import {usePageArray} from "../hooks/usePageArray.ts";
// import {useLogin} from "../hooks/useLogin.ts";
//
// interface PaginationContextType {
//     page: number;
//     limit: number;
//     changePage: (page: number) => void;
//     changeLimit: (limit: number) => void;
//     pagesArray: number[];
// }
//
// export const PaginationContext = createContext<PaginationContextType | null>(null);
//
// export const PaginationProvider: FC<PropsWithChildren> = ({children}) =>     {
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(10);
//     const [totalCount,setTotalCount] = useState<number>(0);
//     const {accessToken,fetchToken} = useLogin();
//
//     const {data} = useFetching({
//         queryKey: ["allDetails"],
//         callback: DetailService.getAllDetails,
//         page,
//         limit,
//         accessToken,
//     });
//
//     const pagesCount:number = getTotalCount(totalCount, limit);
//     const pagesArray:number[] = usePageArray(pagesCount);
//
//     const changeLimit = (limit: number) => {
//         setLimit(limit);
//         console.log(limit);
//         window.scrollTo({top: 0});
//     }
//     const changePage = (page: number) => {
//         setPage(page);
//         window.scrollTo({top: 0});
//     }
//
//     useEffect(() => {
//         fetchToken();
//
//         if (data) {
//             setTotalCount(data.total);
//             setLimit(limit);
//         }
//     }, [data,limit,page]);
//     return (
//         <PaginationContext.Provider value={{page, changePage, changeLimit, limit,pagesArray}}>
//             {children}
//         </PaginationContext.Provider>
//     )
//
// };