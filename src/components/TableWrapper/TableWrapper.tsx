import React, {useEffect, useState} from 'react';

import {useDisclosure} from "@chakra-ui/react";
import {Drawer} from "src/components/Drawer/Drawer.tsx";
import {Table} from "src/components/TableWrapper/Table/Table.tsx";
import {AppOverview} from "src/models/AppOverview.ts";
import {AppUsers} from "src/models/AppUsers.ts";
import {TableData} from "src/models/Table.ts";
import {ApiClient} from "src/network/ApiClient.ts";

import * as S from './styles.ts'

function TableWrapper() {
    const [data, setData] = useState<TableData['appRows'] | null>(null)
    const [overviewData, setOverviewData] = useState<AppOverview | null>(null);
    const [usersData, setUsersData] = useState<AppUsers['appUsers'] | null>(null)
    const {isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose} = useDisclosure()

    const handleAppOverviewData = (overview: AppOverview) => {
        setOverviewData(overview);
    };

    const handleAppUsersData = (users: AppUsers['appUsers']) => {
        setUsersData(users)
    }


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await ApiClient.fetchTableData()
                setData(result.appRows)
            } catch (error) {
                console.log('error fetching table data')
            }
        }

        fetchData()
    }, []);


    return (
        <S.StyledTableContainer>
            <S.Title>App Inventory</S.Title>
            <Table data={data} onDrawerOpen={onDrawerOpen} onAppOverviewDataFetched={handleAppOverviewData}
                   onAppUsersDataFetched={handleAppUsersData}/>
            <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} overviewData={overviewData} usersData={usersData}/>
        </S.StyledTableContainer>
    );
}

export default TableWrapper;
