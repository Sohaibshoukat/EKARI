import styles from "../styles/globals.css"
import "../styles/Home.module.css"
import "../styles/Component/_custom-slick.scss"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"

const APP_ID = process.env.NEXT_PUBLIC_APPLICATION_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

console.log(APP_ID)
console.log(SERVER_URL)

function MyApp({ Component, pageProps }) {
    return (
        <div id="__next">
            <Head>
                <title className="title">NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <div className={styles.head}>
                        <Header />
                        <center>
                            <Component {...pageProps} />
                        </center>
                        <Footer />
                    </div>
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
