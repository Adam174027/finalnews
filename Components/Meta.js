import React from 'react'
import Head from 'next/head'

const Meta = ({title, description, keywords, author}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>

        </Head>
    </div>
  )
}

export default Meta