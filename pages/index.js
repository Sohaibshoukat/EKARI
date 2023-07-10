// Importing core libraries used in index.js
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMoralisQuery, useMoralis } from "react-moralis"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "reactjs-popup/dist/index.css"
// Importing modules from other pages within the Project
import styles from "../styles/Home.module.css"
import Banner from "../assets/images/Banner/Banner.png"
import vip from "../assets/images/CollectionType/vip.png"
import music from "../assets/images/CollectionType/music.png"
import gamepad from "../assets/images/CollectionType/gamepad.png"
import camera from "../assets/images/CollectionType/camera.png"
import art from "../assets/images/CollectionType/art.png"
import Carousel from "../components/Carousel/Carousel"
import card from "../data/nft_static"

export default function Home() {
    const handleCardClick = (cardId) => { }
    const { isWeb3Enabled } = useMoralis()
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // TableName
        // Function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )

    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        speed: 1200,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className="container">
                <div className={styles.banner_sec}>
                    <div className={styles.Banner_text}>
                        <h1>Discover Unique Digital Treasure.</h1>
                        <h5>Explore Collect & Sell</h5>
                        <h4>Get in touch with world of imagination</h4>
                        <button className={styles.btn_classic}>Explore Now</button>
                        <div className={styles.RankingCounts}>
                            <div className={styles.Count}>
                                <h1>98K+</h1>
                                <h5>Artwork</h5>
                            </div>
                            <div className={styles.Count}>
                                <h1>12K+</h1>
                                <h5>Auction</h5>
                            </div>
                            <div className={styles.Count}>
                                <h1>15K+</h1>
                                <h5>Artist</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.banner_img}>
                        <Image
                            className={styles.img2}
                            src={Banner}
                        />
                    </div>
                </div>

                <div className={styles.TypesCollection}>
                    <div className={styles.Collection}>
                        <div className={styles.collectionimg}>
                            <Image
                                className={styles.typeImg}
                                src={vip}
                            />
                        </div>
                        <h3>Membership</h3>
                    </div>
                    <div className={styles.Collection}>
                        <div className={styles.collectionimg}>
                            <Image
                                className={styles.typeImg}
                                src={gamepad}
                            />
                        </div>
                        <h3>Gaming</h3>
                    </div>
                    <div className={styles.Collection}>
                        <div className={styles.collectionimg}>
                            <Image
                                className={styles.typeImg}
                                src={camera}
                            />
                        </div>
                        <h3>Photography</h3>
                    </div>
                    <div className={styles.Collection}>
                        <div className={styles.collectionimg}>
                            <Image
                                className={styles.typeImg}
                                src={art}
                            />
                        </div>
                        <h3>Art</h3>
                    </div>
                    <div className={styles.Collection}>
                        <div className={styles.collectionimg}>
                            <Image
                                className={styles.typeImg}
                                src={music}
                            />
                        </div>
                        <h3>PFPs</h3>
                    </div>
                </div>

            <div className={styles.TrendingSection}>
                <Carousel title={'Top Trending'} data={card} type={"NFT"}/>
            </div>

            <div className={styles.TrendingSection}>
                <Carousel title={'Top Collection'} data={card} type={"Collection"}/>
            </div>
            
            
            <h1
                className="py-4 px-4 font-bold text-2xl"
                style={{ marginLeft: `-83.5%`, marginTop: `2%`, marginBottom: `-0.5%` }}
            >
                Trending
            </h1>
            <div className={styles.cards_container}>
            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    maxWidth: `100%`,
                    margin: `2% 0% 2% 4%`,
                }}
            >
                {card.slice(0, 4).map((item) => (
                    <div className={styles.card1} onClick={() => handleCardClick(item.id)}>
                        <div className={styles.card1_1} style={{ alignItems: `center` }}>
                            <center>
                                <Link href={`/nft_detail/${item.id}`}>
                                    <Image
                                        className={styles.card1_1img}
                                        width={310}
                                        height={250}
                                        src={item.pic}
                                    />
                                </Link>
                            </center>
                            <div className={styles.cardheading}>
                                <h5 className={styles.inside}>
                                    {item.heading} {item.heading_number}
                                </h5>
                                <h6 className={styles.inside}>{item.price}</h6>
                                <p className={styles.inside}>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    maxWidth: `100%`,
                    margin: `2% 0% 2% 4%`,
                }}
            >
                {card.slice(4, 8).map((item) => (
                    <div className={styles.card1}>
                        <div className={styles.card1_1} style={{ alignItems: `center` }}>
                            <center>
                                <Link href={`/nft_detail/${item.id}`}>
                                    <Image
                                        className={styles.card1_1img}
                                        width={310}
                                        height={250}
                                        src={item.pic}
                                    ></Image>
                                </Link>
                            </center>
                            <div className={styles.cardheading}>
                                <h5 className={styles.inside}>
                                    {item.heading} {item.heading_number}
                                </h5>
                                <h6 className={styles.inside}>{item.price}</h6>
                                <p className={styles.inside}>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            </div>
            
            {/* <h1 className="py-4 px-4 font-bold text-2xl" style={{ marginLeft: `-80%` }}>
                Recently Listed
            </h1>
            <RecentlyUpload />
            <div className={styles.back}>
                {isWeb3Enabled ? (
                    fetchingListedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.map((nft) => {
                            console.log(nft.attributes)
                            const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                                nft.attributes
                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div> */}
        </div>
    )
}
