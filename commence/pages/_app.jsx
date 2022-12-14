import Head from 'next/head'
import 'styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Commence</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="commence" />
			</Head>

			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default App
