import dropStyles from "../styles/dropdown.module.css"
import Link from "next/link";
import {useRouter} from 'next/router'
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const Dropdown = () => {

  const router = useRouter();
  const [searchTerm, setSearchTerm]= useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
  
    router.push({
      pathname: `/search/${searchTerm}`
    });
    setSearchTerm("");
  }


  return <div className={dropStyles.container}>
  <ul className={dropStyles.navItem}>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/catagory/football'><a>Football</a></Link></li>
      <li><Link href='/catagory/cricket'><a>Cricket</a></Link></li>
      <li><Link href='/catagory/world'><a>World</a></Link></li>
      <li><Link href='/catagory/entertainment'><a>Entertainment</a></Link></li>
      <li><Link href='/catagory/racing'><a>Racing</a></Link></li>
      <li><Link href='/catagory/educational'><a>Educational</a></Link></li>
      <li><Link href='/catagory/basketball'><a>Basketball</a></Link></li>
  </ul>
  
        
  </div>;
};

export default Dropdown;
