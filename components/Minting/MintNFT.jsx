import React, { useState } from "react"
import style from "./style.module.scss"
import Image from "next/image"
import Live from "../../assets/images/MINTING/Minting.png"
import Cart from "../Cart/Cart"
import { BsTagFill } from "react-icons/bs"
import { HiOutlineUserGroup } from "react-icons/hi"
import { AiFillUnlock, AiOutlineClockCircle } from "react-icons/ai"

const MintNFT = () => {
    const item = {
        id: 1,
        heading: "Narukami-crone",
        heading_number: "#01299",
        price: "71.87 ETH",
        time: "End in 2 days",
        amount: "$12,712",
        collection_name: "Mutant Ape Yacht Club",
        collection_id: "#4730",
        creater: "Beeple",
        creater_add: "0xe9ba...c78c",
        owner: "Mark Cuban",
        owner_add: "0xe9ac...2ca0",
        highest_offer: "82.33",
        address: "0xe3b7...ce9a",
        contract_add: "0x8abe...2ac9",
    }

    const [MethodSelected, setMethodSelected] = useState("Fixed Price")
    const [OnceUnlock, setOnceUnlock] = useState(false)

    return (
        <>
            <div className={style.Heading}>
                <h1>Mint NFT</h1>
                <div className={style.Img}>
                    <Image src={Live} />
                </div>
            </div>
            <div className={style.MintingData}>
                <div className={style.NFTupload}>
                    <div className={style.imgUpload}>
                        <h3>Upload File</h3>
                        <div className={style.upload_btn}>
                            <button className={style.btn}>
                                PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                                <div className={style.BrowseBtn}>
                                    Browse Files
                                </div>
                            </button>
                            <input type="file" name="myfile" />
                        </div>
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Select Method</h3>
                        <div className={style.MethodList}>
                            <div
                                className={`${style.Method} ${
                                    MethodSelected == "Fixed Price" && style.ActiveMethod
                                }`}
                                onClick={() => {
                                    setMethodSelected("Fixed Price")
                                }}
                            >
                                <BsTagFill className={style.Tag} />
                                <p>Fixed Price</p>
                            </div>
                            <div
                                className={`${style.Method} ${
                                    MethodSelected == "Time Auction" && style.ActiveMethod
                                }`}
                                onClick={() => {
                                    setMethodSelected("Time Auction")
                                }}
                            >
                                <AiOutlineClockCircle className={style.Tag} />
                                <p>Time Auction</p>
                            </div>
                            <div
                                className={`${style.Method} ${
                                    MethodSelected == "Open For Bid" && style.ActiveMethod
                                }`}
                                onClick={() => {
                                    setMethodSelected("Open For Bid")
                                }}
                            >
                                <HiOutlineUserGroup className={style.Tag} />
                                <p>Open For Bid</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Price</h3>
                        <div className={style.PriceInput}>
                            <input type="number" placeholder="Enter Price for one item(ETH)" />
                            <div className={style.PurchaseBox}>
                                <div className={style.PurchaseText}>
                                    <div className={style.LockText}>
                                        <AiFillUnlock className={style.lock} />
                                        <h3>Unlock once purchased</h3>
                                    </div>
                                    <h4>Unlock content after successful transaction.</h4>
                                </div>
                                <div className={style.unlockBtn}>
                                    <div
                                        className={style.switch}
                                        onClick={() => {
                                            setOnceUnlock(!OnceUnlock)
                                        }}
                                    >
                                        <div
                                            className={`${style.Switchbtn} ${
                                                OnceUnlock && style.SwitchOn
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Choose Collection</h3>
                        <h4>Unlock content after successful transaction.</h4>
                        <div className={style.PriceInput}>
                            <select
                                className={style.selection}
                                // onChange={(e) => dispatch(addPropertyType(e.target.value))}
                            >
                                <option value="">Select Collection</option>
                                <option>Frog</option>
                                <option>Monkey</option>
                                <option>King</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Title</h3>
                        <input type="text" placeholder="e.g: Crypto Funk" />
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Description</h3>
                        <input type="text" placeholder="e.g: This is very limited item" />
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Creator/Owned By</h3>
                        <input type="text" />
                    </div>
                    <div className={style.FormSelection}>
                        <h3>Price</h3>
                        <input
                            type="text"
                            placeholder="suggested: 0, 10%,20%, 30%, Maxium is 70%"
                        />
                    </div>
                    <div className={style.btn}>
                        Create item
                    </div>
                </div>
                <div className={style.NFTprview}>
                    <h3>Preview</h3>
                    <Cart item={item} />
                </div>
            </div>
        </>
    )
}

export default MintNFT
