import { UserTableDesktop } from './desktop';
import { UserTableMobile } from './mobile';
import { WithAdaptiveComponents } from "../../utils/withAdaptiveComponents/withAdaptiveComponents"

export const UserTable = () => WithAdaptiveComponents(<UserTableDesktop />, <UserTableMobile />)