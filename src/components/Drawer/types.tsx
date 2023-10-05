import {AppOverview} from "src/models/AppOverview.ts";
import {AppUsers} from "src/models/AppUsers.ts";

export interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    overviewData: AppOverview | null
    usersData: AppUsers['appUsers'] | null
}
