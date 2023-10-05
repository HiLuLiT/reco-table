export interface TableData {
    appRows: AppRow[]
    totalCount: number
}

export type appSource = "APP_SOURCE_GOOGLE" | "APP_SOURCE_MSFT"

export interface AppRow {
    appId: string
    appName: string
    appSources: appSource[]
    category: string
}
