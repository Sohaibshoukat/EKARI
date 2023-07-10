import React, { useRef } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import style from "./style.module.scss"
import Cart from "../Cart/Cart"
import CollectionCart from "../CollectionCart/CollectionCart"
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi"

const Carousel = ({ data, title, type }) => {
    const carouselContainer = useRef(null)
    // const { url } = useSelector((state) => state.home)
    // const navigate = useNavigate()

    const Navigation = (dir) => {
        const container = carouselContainer.current

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20)

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <div className={style.carousel}>
            <div className={style.head}>
                <div className={style.carouselTitle}>{title && <div>{title}</div>}</div>
                <div className={style.Arrows}>
                    <HiOutlineArrowSmLeft
                        className={`${style.carouselLeftNav} ${style.arrow}`}
                        onClick={() => Navigation("left")}
                    />
                    <HiOutlineArrowSmRight
                        className={`${style.carouselRightNav} ${style.arrow}`}
                        onClick={() => Navigation("right")}
                    />
                </div>
            </div>
            <div className={style.carouselItems} ref={carouselContainer}>
                {data?.map((item) => {
                    return type == "Collection" ? (
                        <CollectionCart item={item} />
                    ) : (
                        <Cart item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
