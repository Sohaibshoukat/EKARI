import React from "react"
import style from "./style.module.scss"
import { Link } from "react-router-dom"
import Image from "next/image"
import collection from "../../assets/images/Collections/Dog.png"
import img from "../../assets/images/CollectionLogo/Collectionlogo.png"

const CollectionCart = ({ item }) => {
    return (
        <div className={style.SingleCard}>
            <div className={style.Card_Image}>
                <img src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1623270212425-BKBOSVBQQ4YQJGHKQJXW/Vader24_0001_PINK_blue.jpg?format=1000w" alt="" />
            </div>
            <div className={style.CardText}>
                <div className={style.cardInfo}>
                    <div className={style.CollectionImg}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbMl2-dHQBMkojBBCU7GYm1dIP3cy-enuvA&usqp=CAU" alt="" />
                    </div>
                    <div className={style.Collectiontext}>
                        <h2>Abstract Mania</h2>
                        <h4>by Arkhan</h4>
                    </div>
                </div>
                <div className={style.Itmes}>Total 25 items</div>
            </div>
        </div>
    )
}

export default CollectionCart
