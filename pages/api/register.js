import {connectMongoDB} from "../../lib/mongodb"
import User from "../../model/schema.js"

connectMongoDB()

export default async function handler(req, res) {
    try {
        const user = await User.create(req.body)
        res.redirect("/login")
        if (!user) {
            return res.json({ code: "User not created" })
        }
    } catch (error) {
        res.status(400).json({ status: "Not able to create a new user" })
    }
}
