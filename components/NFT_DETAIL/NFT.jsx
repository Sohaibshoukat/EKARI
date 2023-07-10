import React, { useState } from "react"
import style from "./style.module.scss"
import { FaEye, FaShareAlt } from "react-icons/fa"
import { FcLike, FcApproval } from "react-icons/fc"
import { HiFire } from "react-icons/hi"
import Timer from "../TimerComponent/Timer2"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { TbListDetails } from "react-icons/tb"
import { MdDescription } from "react-icons/md"
import Historydetails from "../../data/HIstorydetails"
import Carousel from "../Carousel/Carousel"
import card from "../../data/nft_static"
import { AiOutlineAppstoreAdd } from "react-icons/ai"

const NFT = ({ item }) => {
    const [DetailDropdown, setDetailDropdown] = useState(true)
    const [Description, setDescription] = useState(true)
    const [LatestOffer, setLatestOffer] = useState(true)
    const [History, setHistory] = useState(true)

    return (
        <>
            <div className={style.MainContent}>
                <div className={style.nftDetail}>
                    <h3>{item.collection_name}</h3>
                    <h1>
                        {item.collection_name} {item.collection_id}
                    </h1>
                    <div className={style.OwnerShip}>
                        <div className={style.creater}>
                            <div className={style.creater_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={style.creater_text}>
                                <h2>Creater</h2>
                                <p>0xe9ba...c78c</p>
                            </div>
                        </div>
                        <div className={style.creater}>
                            <div className={style.creater_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={style.creater_text}>
                                <h2>Creater</h2>
                                <p>0xe9ba...c78c</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icons}>
                        <FaEye style={{ cursor: `pointer` }} />
                        <FcLike style={{ cursor: `pointer` }} />
                        <FaShareAlt style={{ cursor: `pointer` }} />
                    </div>
                    <div className={style.NFT_box}>
                        <div className={style.PricingBox}>
                            <div className={style.price_box}>
                                <h3>Price</h3>
                                <h2>{item.price}</h2>
                                <h4>{item.amount}</h4>
                            </div>
                            <div className={style.offer_box}>
                                <h3>Highest Offer</h3>
                                <h2>{item.highest_offer} wETH</h2>
                                <h4 className={style.highest_offer}>by {item.address}</h4>
                            </div>
                        </div>
                        <div className={style.PriceSection}>
                            <button className={style.BuyBtn} type="button">
                                Buy Now for {item.price}
                            </button>
                            <button className={style.CartBtn} type="button">
                                Add to Cart
                            </button>
                            <button className={style.OfferBtn} type="button">
                                Make Offer <HiFire style={{ color: `black` }} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.NFTSection}>
                    <div className={style.NFTimage}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcj0BdNL6beCLSRLzwYD6oMzkiRLgCvUs0w&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className={style.NFT_sale}>
                        <h3>Sale Ends in</h3>
                        <Timer />
                    </div>
                </div>
            </div>

            <div className={style.NFTDropdown}>
                <div className={style.DescriptionSide}>
                    <div className={style.DetailsdDropDown}>
                        <div className={`${style.Heading} ${!DetailDropdown && style.HeadingCLose}`}>
                            <h1>
                                <TbListDetails /> Details
                            </h1>
                            <TiArrowSortedDown
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setDetailDropdown(!DetailDropdown)
                                }}
                            />
                        </div>
                        {DetailDropdown && (
                            <div className={style.DetailList}>
                                <ul>
                                    <li>
                                        <h5>Category</h5>
                                        <p>Collectible</p>
                                    </li>
                                    <li>
                                        <h5>Creator</h5>
                                        <p>MutantApeYachiClub</p>
                                    </li>
                                    <li>
                                        <h5>Owner</h5>
                                        <p>EC357</p>
                                    </li>
                                    <li>
                                        <h5>Network</h5>
                                        <p>ETH</p>
                                    </li>
                                    <li>
                                        <h5>Contact Address</h5>
                                        <p>0x60e404adf7</p>
                                    </li>
                                    <li>
                                        <h5>Token ID</h5>
                                        <p>7104</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className={style.DetailsdDropDown}>
                        <div className={`${style.Heading} ${!Description && style.HeadingCLose}`}>
                            <h1>
                                <MdDescription /> Description
                            </h1>
                            <TiArrowSortedDown
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setDescription(!Description)
                                }}
                            />
                        </div>
                        {Description && (
                            <div className={style.descriptionList}>
                                <p>
                                    The ultimate NFT project for those who live and breathe the
                                    crypto world. Discover the digital representations of your
                                    Saved Soul and be a part of a community.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={style.DetailsdDropDown}>
                        <div className={`${style.Heading} ${!LatestOffer && style.HeadingCLose}`}>
                            <h1>
                                <MdDescription /> Latest Offer
                            </h1>
                            <TiArrowSortedDown
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setLatestOffer(!LatestOffer)
                                }}
                            />
                        </div>
                        {LatestOffer && (
                            <div className={style.descriptionList}>
                                <p>
                                    The ultimate NFT project for those who live and breathe the
                                    crypto world. Discover the digital representations of your
                                    Saved Soul and be a part of a community.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.HistorySide}>
                    <div className={style.DetailsdDropDown}>
                        <div className={`${style.Heading} ${!History && style.HeadingCLose}`}>
                            <h1>
                                <TbListDetails /> Details
                            </h1>
                            <TiArrowSortedDown
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setHistory(!History)
                                }}
                            />
                        </div>
                        {History && (
                            <div className={style.DetailList}>
                                <ul>
                                    <li>
                                        <h5>Price</h5>
                                        <h5>USD Price</h5>
                                        <h5>Quantity</h5>
                                        <h5>Floor Difference</h5>
                                        <h5>Expiration</h5>
                                        <h5>From</h5>
                                    </li>
                                    {Historydetails?.map((item) => (
                                        <li>
                                            <p>{item.Price}</p>
                                            <p>{item.USD}</p>
                                            <p>{item.Quantity}</p>
                                            <p>{item.Floor}</p>
                                            <p>{item.TimeStamp}</p>
                                            <p>{item.From}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={style.MoreNFT}>
                <div className={style.head}>
                    <AiOutlineAppstoreAdd size={25} />
                    <h1>More From Collection</h1>
                </div>
                <div className={style.NFTCarousel}>
                    <Carousel data={card} type={"NFT"} />
                </div>
            </div>
        </>
    )
}

export default NFT
