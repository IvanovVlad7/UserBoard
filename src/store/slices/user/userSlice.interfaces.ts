import { User } from "../../../services/api/fetchUsers.interfaces";
import { STATUS } from "./userSlice.constant";

export interface UsersState {
    data: User[];
    status: STATUS.IDLE | STATUS.LOADING | STATUS.SUCCEEDED | STATUS.FAILED;
    error: string | null;
}