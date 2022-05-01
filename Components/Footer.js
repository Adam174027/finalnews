import React from 'react'
import FooterStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
        <ul className={FooterStyles.list}>
            <li className={FooterStyles.item}>Sports</li>
            <li className={FooterStyles.item}>World</li>
            <li className={FooterStyles.item}>Entertainment</li>
            <li className={FooterStyles.item}>Privacy-policy</li>
            <li className={FooterStyles.item}>About us</li>
            <li className={FooterStyles.item}>Contact</li>
            <li className={FooterStyles.item}>Video Gallary</li>
            <li className={FooterStyles.item}>Photo Library</li>
            <li className={FooterStyles.item}>Sitemap</li>
        </ul>

        <h4 className={FooterStyles.copyright}>Copyright @2020 all right reserved</h4>
    </div>
  )
}

export default Footer