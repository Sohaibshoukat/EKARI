import React from "react"
import style from "./style.module.scss"
import Image from "next/image"
import img from "../../assets/images/AccountCreation/AccountCreation.png"
import { BsPerson } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlineLock } from "react-icons/ai"

const signUp = () => {
    return (
        <>
            <div className={style.SignUpSection}>
                <div className={style.ImageSection}>
                    <Image src={img} className={style.Image} />
                </div>
                <div className={style.formSection}>
                    <h1>Create Account</h1>
                    <h4>
                        Welcome! enter your details and start creating, collecting and selling
                        NFTs.
                    </h4>
                    <form action="/api/register" method="post">
                        <div className={style.InputField}>
                            <BsPerson className={style.Icon} />
                            <input 
                                name="name" 
                                type="text" 
                                placeholder="Username" 
                                required />
                        </div>
                        <div className={style.InputField}>
                            <HiOutlineMail className={style.Icon} />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className={style.InputField}>
                            <AiOutlineLock className={style.Icon} />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className={style.InputField}>
                            <AiOutlineLock className={style.Icon} />
                            <input
                                name="confirmpassword"
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <div className={style.SubmitBTN}>
                            <input
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                value="Create Account"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signUp
