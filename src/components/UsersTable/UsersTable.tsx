import {Table, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
import {UsersTableProps} from "src/components/UsersTable/types.ts";

function UsersTable({users}: UsersTableProps) {
    console.log('users:', users)
    return (
        <TableContainer overflowY='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <th>UserName</th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users?.map((userEmail, index) => (
                        <Tr key={index}>
                            <Td>{userEmail}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
