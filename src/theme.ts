import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            header: string
            body: string
            button: string
            hover: string
            text: string
            subText: string
            footerBackground: string
        }
        fontSize: {
            sm: string
            md: string
            lg: string
            xl: string
            xxl: string
        }
        fontWeight: {
            normal: string
            medium: string
            bold: string
        }
        fontFamily: {
            systemUi: string
            avenir: string
            helvetica: string
            arial: string
            sansSerif: string
        }
        spacing: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            xxl: string
            xxxl: string
            bar: string
        }
        borderRadius: {
            sm: string
            md: string
            lg: string
        }
    }
}

export const theme = {
    colors: {
        header: '#3b73b5',
        body: '#cdbefb',
        button: '#112e4f',
        text: '#FFFFFF',
        subText: '#212121',
        footerBackground: "#36454F",
    },
    fontSize: {
        sm: '0.875rem', // 14px
        md: '1rem',     // 16px
        lg: '1.25rem',  // 20px
        xl: '1.5rem',   // 24px
        xxl: '2rem',    // 32px
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
    },
    fontFamily: {
        systemUi: 'system-ui',
        avenir: 'Avenir',
        helvetica: 'Helvetica',
        arial: 'Arial',
        sansSerif: 'sans-serif',
    },
    spacing: {
        xs: '0.25rem',  // 4px
        sm: '0.5rem',   // 8px
        md: '1rem',     // 16px
        lg: '1.5rem',   // 24px
        xl: '2rem',     // 32px
        xxl: '2.5rem',  // 40px
        xxxl: '3rem',
        bar: '5rem',   // 160px
    },
    borderRadius: {
        sm: '0.25rem',  // 4px
        md: '0.5rem',   // 8px
        lg: '0.75rem',  // 12px
    },
}