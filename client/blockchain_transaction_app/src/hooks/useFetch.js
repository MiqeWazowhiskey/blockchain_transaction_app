import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
const useFetch = ({keyword}) => {
    const [url,setUrl]=useState("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")
    const fetch =  async()=>{
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.VITE_GIFY}&q=${keyword.split(" ").join("")}&limit=1`)
        .then(res=>{
            console.log(res)
            setUrl(res.data.data[0].images.downsized_medium.url)

         })
        .catch()
    }
    useEffect(()=>{if(keyword)fetch()},[])
    return(url)
}

export default useFetch