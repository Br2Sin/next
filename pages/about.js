import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from 'next/router'

function Blog( props ) {
    console.log(props.data.results)
    const [results, setResult] = useState([])
    
    return (
      <ul>
        {props.data.results.map((data, idx) => (
          <li key={idx}>{data.name}</li>
        ))}
      </ul>
    )
  }
  
  
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://127.0.0.1:8000/polls')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  
  export default Blog