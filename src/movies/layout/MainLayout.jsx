// componente 
import { Header } from "../components/Header";
import { Box } from '@mui/material'

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Box sx={{
                padding: '68px 1rem 1rem 1rem',
                // backgroundColor: '#4f3c4c',
            }}>
                {children}
            </Box>
            {/* {diferentes componentes}
             {footer}  */}
        </>
    )
}