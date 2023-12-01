declare namespace NodeJS{
    export type ProcessEnv={
        PORT:5000,
        DATABASE_URL:string,
        NOD_ENV:string,
        DEFAULT_PASSWORD:string,
        BCRYPT_SLAT_ROUND:string
    }
}