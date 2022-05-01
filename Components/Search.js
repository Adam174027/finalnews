import React from 'react'
import Link from 'next/link'
import SearchStyles from '../styles/Search.module.css'

const Search = ({product}) => {
  return (
    <div className={SearchStyles.container}>
      <img src={product.image_url} className={SearchStyles.image}/>
      <Link href={product.id}>
      <a className={SearchStyles.headline}>{product.headline}</a>
      </Link>
       
        <p className={SearchStyles.intro}>{product.intro}</p>
    </div>
  )
}

export default Search