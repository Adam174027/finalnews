import Head from "next/head";
import navStyles from "../styles/nav.module.css" 
import { FaAlignLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'



const Nav = () => {
     const router = useRouter();
    const [click, setClick] = useState(false);
    const [searchTerm, setSearchTerm]= useState("");
    const [homeclick, setHomeclick] = useState('home');
    


const handleClick = () => {
    setClick(!click);
    
}

const handleSubmit=(e)=>{
  e.preventDefault();

  router.push({
    pathname: `/search/${searchTerm}`
  });
  setSearchTerm("");
}


  return <div>
      <div className={navStyles.container}>
      <div className={navStyles.logo}>
        <img src="/logo.png" className={navStyles.logoimg}/>
        <h1 className={navStyles.logotxt}>They<span className={navStyles.are}>Are</span><span className={navStyles.say}>Say</span></h1>
      </div>

      <div className={navStyles.navItem}>
        <ul>
          <li ><Link href="/"><a onClick={()=>{setHomeclick('home')}} className={homeclick=='home'?'clicked':''}>Home</a></Link></li>
          <li ><Link href="/catagory/football"><a onClick={()=>{setHomeclick('football')}} className={homeclick=='football'?'clicked':''}>Football</a></Link></li>
          <li ><Link href="/catagory/cricket"><a onClick={()=>{setHomeclick('cricket')}} className={homeclick=='cricket'?'clicked':''}>Cricket</a></Link></li>
          <li ><Link href="/catagory/world"><a onClick={()=>{setHomeclick('world')}} className={homeclick=='world'?'clicked':''}>World</a></Link></li>
          <li ><Link href="/catagory/entertainment"><a onClick={()=>{setHomeclick('entertainment')}} className={homeclick=='entertainment'?'clicked':''}>Entertainment</a></Link></li>
          <li ><Link href="/catagory/racing"><a onClick={()=>{setHomeclick('racing')}} className={homeclick=='racing'?'clicked':''}>Racing</a></Link></li>
          <li ><Link href="/catagory/educational"><a onClick={()=>{setHomeclick('educational')}} className={homeclick=='educational'?'clicked':''}>Educational</a></Link></li>
          <li ><Link href="/catagory/basketball"><a onClick={()=>{setHomeclick('basketball')}} className={homeclick=='basketball'?'clicked':''}>NBA</a></Link></li>
          <style jsx>
         {`
         
         .clicked{
           color:red;
           text-decoration:underline;
         }`}
        </style>
        </ul>
      </div>
      <div className={navStyles.search}>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Search" onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm}/>
        
        </form>
        <div className={navStyles.searchIcons}>
        <FaSearch onClick={handleSubmit}/>
      </div>
      
        
      </div>
      <div className={navStyles.menubar}>
        <FaAlignLeft className={navStyles.menu} onClick={handleClick}/>
        <div className={click ? 'show':'hide'}>
        <style jsx>
         {`
         .show{
           display: block;
           transition: display 2s;
         }
         .hide{
           display:none;
         }
         .clicked{
           color:red;
         }`}
        </style>
        <Dropdown/>
        
        
    

        </div>
        </div>
     </div>
  </div>;
};




export default Nav;
