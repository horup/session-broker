import { v4 as uuidv4 } from 'uuid';

const config ={
    REDIS_CONNECTION_STRING:process.env.REDIS_CONNECTION_STRING,
    PORT:Number.parseInt(process.env.PORT),
    ID:uuidv4() as string
}

const error = (s:string)=>{
    console.log("Error:" + s);
}

const validate = ()=>{
    if (config.REDIS_CONNECTION_STRING == undefined)
    {
        error("REDIS_CONNECTION_STRING not defined");
        return false;
    }
    if (config.PORT == undefined)
    {
        error("PORT not defined");
        return false;
    }

    return true;
}

if (!validate())
{
    console.log("Existing with error code 1")
    process.exit(1);
}

export default config;
