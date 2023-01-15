import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
const useFetch = ({keyword}) => {
    const [url,setUrl]=useState('')
    const fetch =  ()=>{
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIFY}&q=${keyword.split(" ").join("")}&limit=1`)
        .then(res=>{
            setUrl(res[0]?.images?.downsized_medium?.url)
        })
        .catch(error=>setUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"))
    }
    useEffect(()=>{if(keyword)fetch()},[keyword])
    return(url)
}

export default useFetch