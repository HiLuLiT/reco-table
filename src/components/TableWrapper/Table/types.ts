import {AppOverview} from "src/models/AppOverview.ts";
import {AppUsers} from "src/models/AppUsers.ts";
import {TableData} from "src/models/Table.ts";

export interface TableProps {
    data: TableData['appRows'] | null
    onDrawerOpen: () => void
    onAppOverviewDataFetched: (overview: AppOverview) => void
    onAppUsersDataFetched: (users: AppUsers['appUsers']) => void
}
