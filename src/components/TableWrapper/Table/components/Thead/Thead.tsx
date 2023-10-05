import {Th, Tr, Thead as ChakraThead} from "@chakra-ui/react";
import React from 'react';

export const Thead = () => (
    <ChakraThead>
        <Tr>
            <Th>
                Name
            </Th>
            <Th>
                Category
            </Th>
            <Th>
                Connector
            </Th>
        </Tr>
    </ChakraThead>
);
