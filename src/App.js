import './App.css'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header.tsx'
import TableWrapper from './components/TableWrapper/TableWrapper'

function App () {
  return (
    <ChakraProvider>
      <Header/>
      <TableWrapper/>
    </ChakraProvider>
  )
}

export default App
