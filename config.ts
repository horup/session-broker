const config ={
    REDIS_CONNECTION_STRING:process.env.REDIS_CONNECTION_STRING
}

console.log(process.env.REDIS_CONNECTION_STRING);

const error = (s:string)=>{
    console.log("Error:" + s);
}

const validate = ()=>{
    if (config.REDIS_CONNECTION_STRING == undefined)
    {
        error("REDIS_CONNECTION_STRING not defined");
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
