import jwt from "jsonwebtoken"
import User from "../models/auth.js";

export const protect = async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(`header authorization is ${token}`);
    next();
}