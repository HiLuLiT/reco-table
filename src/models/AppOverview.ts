import {appSource} from "src/models/Table.ts";

export interface AppOverview {
    appOverview: {
        appId: string
        appName: string
        appSources: appSource[]
        category: string
    }
}
