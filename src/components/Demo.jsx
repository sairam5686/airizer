import React, { useEffect, useState } from 'react'
import { articleapi, useLazyGetsummaryQuery } from '../Services/article'

function Demo() {

  
    const [inp, setinp] = useState({url:'',summary:''})
    const [allArticle, setallArticle] = useState([])

    const [getsummary,{error,isfetching}]=useLazyGetsummaryQuery();

    useEffect(() => {
      const localStoragefromAritcle = JSON.parse(localStorage.getItem('inp'))
      if (localStoragefromAritcle) {
        setallArticle(localStoragefromAritcle)}
    }, [])
    


    const Form_Handler = async (e)=>{

      e.preventDefault();
      const {data} = await getsummary({articleUrl: inp.url})



      if(data?.summary){
         const newArticle = {...inp, summary : data.summary}
         const updatedarticles = [newArticle,...allArticle]
        setinp(newArticle)
        setallArticle(updatedarticles)
        localStorage.getItem('article',JSON.stringify(updatedarticles))
        
      }
    }
  
  
    return (
    <section className='demo-parent-container'>
        <h1 className='font-start'>Get Started</h1>
                
        <form onSubmit={Form_Handler}>
          <div className='input-box-btn'>
         <input className="input" type="url" placeholder="    😁 Enter the URL that you wanna summarize 😁    "  value={inp.url} onChange={(e)=>{setinp({ ...inp , url:e.target.value})}} required />
      
        <button className='btn-sub' type='submit'>submit</button>
        </div>

        <div className='result_display_container' >
        {isfetching ? (<p>Loading...</p>) : error ? <p>Error: {error.message}</p> 
        : (inp.summary
          && ( <div className='result-container'>
            <div className='result_block'>
            <h2 className='aritcelsum'>Summary  <span className='art_font'>Article</span></h2><br />
              <p>{inp.summary}</p></div>
          </div> )
        ) 
        }
        </div>
     </form>
    </section>
  )
}

export default Demo