import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const useTableData = () => {
    const users = useSelector((state: RootState) => state.users.data);
    const status = useSelector((state: RootState) => state.users.status);
    const error = useSelector((state: RootState) => state.users.error);

    return {
        users,
        status,
        error
    }
}