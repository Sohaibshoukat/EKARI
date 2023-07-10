import { ConnectButton } from "web3uikit"
import Link from "next/link"
import styles from "./header.module.css"
import logo from "../../assets/images/Logo/Logo.png"
import Image from "next/image"

export default function Header() {
    return (
        <nav className={styles.header}>
            <div className={styles.row}>
                <Image className={styles.logo} src={logo} width={50} height={50} />
                <h1 className={styles.LogoText}>
                    Ekari
                </h1>
            </div>
            <div className={styles.NavBarLinks}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a>Sell NFT</a>
                </Link>
                <Link href="/Mint_NFT">
                    <a>Mint NFT</a>
                </Link>
                <Link href="/blog">
                    <a>Blogs</a>
                </Link>
                <Link href="/User">
                    <a>User</a>
                </Link>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/signup">
                    <a>Register</a>
                </Link>
                <div className={styles.connected}>
                    <ConnectButton className={styles.connectionButton} moralisAuth={false}/>
                </div>
            </div>
        </nav>
    )
}
