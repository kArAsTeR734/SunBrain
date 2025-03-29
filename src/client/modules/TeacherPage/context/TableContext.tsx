// interface TableContextType {
//     editingDetail: IDetail | null;
//     setEditingDetail: (detail: IDetail | null) => void;
//     data: ItemProperties | undefined;
//     isLoading: boolean;
// }

// export const TableContext = createContext<TableContextType | null>(null);

// export const TableProvider: FC<PropsWithChildren> = ({children}) => {
    //const [editingDetail, setEditingDetail] = useState<IDetail | null>(null);
    // const {page, limit} = usePagination();
    // const {accessToken,fetchToken} = useLogin();
    //const {data, isLoading} = useFetching({
    //     queryKey: ["pageDetails"],
    //     callback: DetailService.fetchDetails,
    //     page: page,
    //     limit: limit,
    //     accessToken: accessToken,
    // });
    // console.log(accessToken);
    // useEffect(() => {
    //     fetchToken();
    // }, []);

    // return (
    //     <TableContext.Provider value={{editingDetail, setEditingDetail, data, isLoading}}>
    //         {children}
    //     </TableContext.Provider>
    // )
//};