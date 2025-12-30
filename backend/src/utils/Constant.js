import dotenv from "dotenv";

dotenv.config();


export const Constant = {
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT,
    USER_MODEL:"User",
    ROLE_USER: "User",
    ROLE_ADMIN: "Admin",
     AccessTokenSecretKey:process.env.TODO_ACCESS_TOKEN_SECRET_KEY,
    RefreshTokenSecretKey:process.env.REFRESH_TOKEN_SECRET_KEY,
    AccessTokenExpirationTime:process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    RefreshTokenExpirationTime:process.env.REFRESH_TOKEN_EXPIRATION_TIME,
}