import React, {useCallback, useMemo} from 'react';
import {Tbody, Table as ChakraTable, Tr, Td} from "@chakra-ui/react";
import {Thead} from "src/components/TableWrapper/Table/components/Thead/Thead.tsx";
import {TableProps} from "src/components/TableWrapper/Table/types.ts";
import {AppRow} from "src/models/Table.ts";
import {ApiClient} from "src/network/ApiClient.ts";

export const Table = ({data, onDrawerOpen, onAppOverviewDataFetched, onAppUsersDataFetched}: TableProps) => {

    const handleRowClick = useCallback(async (appId: string) => {
        try {
            const appOverviewData = await ApiClient.fetchAppOverview(appId)
            const appUsersData = await ApiClient.fetchAppUsers(appId)
            onAppOverviewDataFetched(appOverviewData)
            onAppUsersDataFetched(appUsersData.appUsers)
        } catch (error) {
            console.error('error fetching app overview:', error)
        }
        onDrawerOpen();
    }, [onDrawerOpen, onAppOverviewDataFetched, onAppUsersDataFetched]);

    const rows = useMemo(() => {
        return data?.map((row: AppRow) => (
            <Tr key={row.appId} onClick={() => handleRowClick(row.appId)}>
                <Td>{row.appName}</Td>
                <Td>{row.category}</Td>
                <Td>{row.appSources}</Td>
            </Tr>
        ));
    }, [data, handleRowClick])

    return (
        <ChakraTable variant='striped'>
            <Thead/>
            <Tbody>
                {rows}
            </Tbody>
        </ChakraTable>
    );
};
