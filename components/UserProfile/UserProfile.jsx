import React, { useState } from "react"
import style from "./style.module.scss"
import { IoAdd, IoShareSocialOutline } from "react-icons/io5"
import { RxDiscordLogo } from "react-icons/rx"
import { BsGlobe, BsInstagram } from "react-icons/bs"
import { FiYoutube, FiTwitter } from "react-icons/fi"
import data from "../../data/nft_static"
import Cart from "../Cart/Cart"
import CollectionCart from "../CollectionCart/CollectionCart"

const UserProfile = () => {
    const [TypeSeclection, setTypeSeclection] = useState("Created")
    return (
        <>
            <div className={style.ProfileData}>
                <div className={style.ProfileImage}>
                    <div className={style.profileBg}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnawGzIE1hn-62HGO9p_dKFxK98qwHJVh2Q&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className={style.prfilePic}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                        />
                    </div>
                </div>
                <div className={style.PersonalData}>
                    <div className={style.Data}>
                        <h1>Animakid</h1>
                        <div className={style.Voulumes}>
                            <div className={style.volume}>
                                <h3>250K+</h3>
                                <h5>Volume</h5>
                            </div>
                            <div className={style.volume}>
                                <h3>50+</h3>
                                <h5>NFTs Sold</h5>
                            </div>
                            <div className={style.volume}>
                                <h3>3000</h3>
                                <h5>Followers</h5>
                            </div>
                        </div>
                        <div className={style.Bio}>
                            <h3>Bio</h3>
                            <p>The internet's friendliest designer kid.</p>
                        </div>
                        <div className={style.SocialShare}>
                            <h3>Links</h3>
                            <div className={style.SocialIcons}>
                                <RxDiscordLogo />
                                <BsGlobe />
                                <FiYoutube />
                                <FiTwitter />
                                <BsInstagram />
                            </div>
                        </div>
                    </div>
                    <div className={style.FollowSec}>
                        <div className={style.FollowBtn}>
                            <IoAdd />
                            Follow
                        </div>
                        <div className={style.FollowBtn}>
                            <IoShareSocialOutline />
                            Share
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.NFTSData}>
                <div className={style.NFTtype}>
                    <div className={style.coverUp}>
                        <div
                            className={`${style.Category} ${
                                TypeSeclection == "Created" && style.activeTab
                            }`}
                            onClick={() => {
                                setTypeSeclection("Created")
                            }}
                        >
                            Created
                            <div className={style.count}>382</div>
                        </div>
                        <div
                            className={`${style.Category} ${
                                TypeSeclection == "Owned" && style.activeTab
                            }`}
                            onClick={() => {
                                setTypeSeclection("Owned")
                            }}
                        >
                            Owned
                            <div className={style.count}>67</div>
                        </div>
                        <div
                            className={`${style.Category} ${
                                TypeSeclection == "Collection" && style.activeTab
                            }`}
                            onClick={() => {
                                setTypeSeclection("Collection")
                            }}
                        >
                            Collection
                            <div className={style.count}>4</div>
                        </div>
                    </div>
                </div>
                <div className={style.Nfts}>
                    {TypeSeclection == "Created"
                        ? data.map((item, index) => (
                              <div>
                                  <Cart item={item} />
                              </div>
                          ))
                        : TypeSeclection == "Owned"
                        ? data.map((item, index) => (
                              <div>
                                  <Cart item={item} />
                              </div>
                          ))
                        : data.map((item, index) => (
                              <div>
                                  <CollectionCart item={item}/>
                              </div>
                          ))}
                </div>
            </div>
        </>
    )
}

export default UserProfile
