import {chakra} from "@chakra-ui/react";

export const StyledTableContainer = chakra("div", {
    baseStyle: {
        width: '80%',
        margin: '0 auto',
        padding: '20px'
    }
})

export const Title = chakra("h1", {
    fontSize: '20px',
    color: 'black',
    padding: '10px 0',
})
