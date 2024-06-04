import React, { useState } from "react";
import NewsCard from "./newsCard";
import { useEffect } from "react";
import axios from "axios";
import Header from "./header";
export default function NewsPage(){
const key='5233005f8fa44186b33dc9aeecf8918a';
async function scrapeSite(apiKey) {
    const url = `https://newsapi.org/v2/everything?q=law&apiKey=${apiKey}&sortBy=relevance&pagesize=14`;
    const { data } = await axios.get(url);
    setNews(data)
    return data  // new addition
}
const initial_news=[]
const[news,setNews]=useState(initial_news);
useEffect(()=>{

scrapeSite(key).then((res)=>{
    setNews(res);
   // console.log(res)
});
},[])

return(
    <>
<div>
<Header/>
<NewsCard news={news.articles}/>


</div>
    </>
)
}
