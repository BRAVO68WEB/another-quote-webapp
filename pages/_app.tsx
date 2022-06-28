import { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import GlobalStyle from '../styles/main'

interface QuoteAppProps extends AppProps {}

const QuoteApp: React.FC<QuoteAppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SWRConfig
                    value={{
                        fetcher: (url: string) =>
                            fetch(url).then((r) => r.json()),
                    }}
                >
                    <Component {...pageProps} />
                </SWRConfig>
                <GlobalStyle />
            </ThemeProvider>
        </>
    )
}

export default QuoteApp
