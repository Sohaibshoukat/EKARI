import React from "react"
import style from "./style.module.scss"
import Image from "next/image"
import ETH from "../../assets/images/CartLogo/ETH.png"
import Verify from "../../assets/images/CartLogo/Verify.png"
import Link from "next/link";

const Cart = ({ item }) => {
    return (
        <Link href={`/nft_detail/${item?.id}`}>
        <div key={item.id} className={style.SingleCard}>
            <div className={style.Card_Image}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAwAcdw6Qclhpu9LYBmgVA5bxnZc-1LFXfw&usqp=CAU"
                    alt=""
                />
            </div>

            <div className={style.CardText}>
                <div className={style.name}>
                    <h4>{item?.collection_name}</h4>
                    <Image src={Verify} className={style.verify} />
                </div>
                <h2>
                    {item?.heading} {item?.heading_number}
                </h2>
                <div className={style.CardPrice}>
                    <h4>Price</h4>
                    <div className={style.Pricsection}>
                        <h4 className={style.price}>{item?.price}</h4>
                        <Image src={ETH} className={style.priceImage} />
                    </div>
                </div>
            </div>
        </div>
         </Link>
    )
}

export default Cart
