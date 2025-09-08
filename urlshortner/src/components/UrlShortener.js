import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {logEvent} from "../utils/logger";
import "../styles/App.css";
function URLShortner(){
    const[url,setUrl]=useState("");
    const[shortenedUrl,setShortenedUrl]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!url) return;
        const shortCode=uuidv4().slice(0,6);
        const newShortUrl=`${window.location.origin}/${shortCode}`;
        const urls=JSON.parse(localStorage.getItem("shortener:urls"))||[];
        urls.push({id:shortCode,original:url,short:newShortUrl});
        localStorage.setItem("shortener:urls",JSON.stringify(urls));
        setShortenedUrl(newShortUrl);
        logEvent("Shortened new URL",{original:url,short:newShortUrl});
        setUrl("");
    };
    return(
        <div className="shortener">
            <h3>Shorten your URL</h3>
            <form onSubmit={handleSubmit}>
                <input type="url" value={url} placeholder="Enter URL here.."
                onChange={(e)=>setUrl(e.target.value)}
                required/>
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && (
                <p>
                    Short URL:<a href={shortenedUrl}>{shortenedUrl}</a>
                </p>
            )}
        </div>
    )

}
export default URLShortner;