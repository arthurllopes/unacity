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
            }
        }

    },
    fonts: {
        heading: 'DM Sans',
        body: 'DM Sans'
    },
    layerStyles: {
        title: {
          fontWeight: '700',
        },
        text: {
            fontWeight: '500',
        },
        description: {
            fontWeight: '400',
        },
    },
})