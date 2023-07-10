import React from "react"
import Image from "next/image"
import styles from "../../styles/nft_detail.module.css"
import { FaEye, FaShareAlt } from "react-icons/fa"
import { FcLike, FcApproval } from "react-icons/fc"
import { HiFire } from "react-icons/hi"
import picture from "../../assets/images/king3.jpg"
import Timer2 from "../../components/TimerComponent/Timer2"
import Dropdownn from "../../components/dropdown1"
import History from "../../components/dropdown2"
import NFTSlider from "../../components/slider"
import { useRouter } from "next/router"
import cards from "../../data/nft_static"
import NFT from "../../components/NFT_DETAIL/NFT"

const Nft_detail = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            {cards.map((item) => {
                if (item.id == id) {
                    return (
                        <>
                            <NFT item={item}/>
                        </>
                    )
                }
            })}
        </>
    )
}

export default Nft_detail
