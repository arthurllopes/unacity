import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        brand: {
            purple: "#B588EB",
            bebe: "#97F5E2",
            yellow: "#EDD258",
            pink: "#F098CF",
            blue: "#8F98EB",
        },
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                fontWeight: '500'
            }
        }

    },
    fonts: {
        heading: 'DM Sans',
        body: 'DM Sans'
    },
    layerStyles: {
        title: {
          fontWeight: 'normal',
        },
        text: {
            fontWeight: '200',
        },
        description: {
            fontWeight: '400',
            color: '#838589',
            fontSize: '0.875rem'
        },
    },
})