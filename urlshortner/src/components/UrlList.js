import {logEvent} from "../utils/logger";
import { useEffect,useState } from "react";
function UrlList(){
    const[urls,setUrls]=useState([]);
    useEffect(()=>{
        const stored=JSON.parse(localStorage.getItem("shortener:urls"))||[];
        setUrls(stored);
        logEvent("Viewed stored URLs",{count:stored.length});
    })
    return(
        <div className="url-list">
            <h3>Stored URLs</h3>
            {urls.length===0?(
                <p>No URLs have been shortened yet.</p>
            ):(
                <ul>
                    {urls.map((u)=>(
                        <li key={u.id}>
                            <a href={u.original}>{u.original}</a>
                            <a href={u.short}>{u.short}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default UrlList;