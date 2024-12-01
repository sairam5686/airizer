//create an api and fetch an api using redux 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const Rapid_Api_Key = import.meta.env.RAPID_API_KEY ;

export const articleapi = createApi({
    reducerPath: 'articleapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        //prepare an header function
        prepareHeaders: (headers)=>{
            headers.set('x-rapidapi-key',"ENTER_YOUR_API_KEY"),
            headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');
           
            return headers;
        }
        }),
    endpoints:(builder)=>(
        {getsummary:builder.query(
            {query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=25`

            })
        })

    
})

export const {useLazyGetsummaryQuery} = articleapi;
