import {
    Box,
    Button,
    Drawer as ChakraDrawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import React, {useMemo} from "react";
import {DrawerProps} from "src/components/Drawer/types.tsx";
import UsersTable from "src/components/UsersTable/UsersTable.tsx";
import * as S from './styles.ts'

export const Drawer = ({isOpen, onClose, overviewData, usersData}: DrawerProps) => {

    const users = useMemo(() => {
        return usersData
    }, [usersData]);

    return (
        <>
            <ChakraDrawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>App Overview</DrawerHeader>

                    <DrawerBody>
                        <S.StyledBox>
                            <Box> AppName: {overviewData?.appOverview.appName}</Box>
                            <Box> Category: {overviewData?.appOverview.category}</Box>
                            <Box> App sources: {overviewData?.appOverview.appSources}</Box>
                            <Box> AppName: {overviewData?.appOverview.appId}</Box>
                        </S.StyledBox>

                        <UsersTable users={users}/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </ChakraDrawer>
        </>
    )
}
