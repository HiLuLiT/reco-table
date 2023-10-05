import axios, {AxiosRequestConfig} from "axios";
import {PAGE_NUMBER, PAGE_SIZE} from "src/constants/table.ts";
import {AppOverview} from "src/models/AppOverview.ts";
import {AppUsers} from "src/models/AppUsers.ts";
import {TableData} from "src/models/Table.ts";

export class ApiClient {
    static async request<Res>(requestConfig: AxiosRequestConfig) {
        try {
            const {data} = await axios.request<Res>({
                ...requestConfig,
                headers: {
                    ...requestConfig.headers,
                    'ngrok-skip-browser-warning': '69420'
                }
            })
            return data
        } catch (error) {
            throw error
            // handle errors any way we'd like
        }
    }

    static fetchTableData() {
        return ApiClient.request<TableData>({
            baseURL: '/api',
            method: 'PUT',
            url: '/v1/app-service/get-apps',
            data: {
                pageNumber: PAGE_NUMBER,
                pageSize: PAGE_SIZE,
            },
            withCredentials: true
        })
    }

    static fetchAppOverview(appId: string) {
        return ApiClient.request<AppOverview>({
            baseURL: '/api',
            method: 'GET',
            url: `/v1/app-service/get-app-overview/${appId}`,
        })
    }

    static fetchAppUsers(appId: string) {
        return ApiClient.request<AppUsers>({
            baseURL: '/api',
            method: 'GET',
            url: `/v1/app-service/get-app-overview-users/${appId}`
        })
    }
}
