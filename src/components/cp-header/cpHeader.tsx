/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useState } from 'react'
import styles from './cpHeader.module.scss';
import '../../styles/baseglobal.scss'
interface prop {
    headerData: any;
}
const CpHeader = (props:prop) =>{
    const [menuClick, setMenuClick] = useState(false);
    const [scrollVal, setScrollVal] = useState(0);
    //const windowWidth = useWindowWidth();
  
    const navMenuFunc = (event: React.SyntheticEvent) => {
        event.stopPropagation();
        setMenuClick(!menuClick);
      }; 

    return(
        <>
            <header className={`${styles['cp-header']}`}>
                <div className={`${styles['container']} container`}>
                    <button aria-label="Open Menu" className= {`${styles['hamburger']}`} onClick={(e) => navMenuFunc(e)}  aria-expanded="false" aria-controls="navListWrap">
                        <span className= {`${styles['hamburgerMenu']} `} ></span>
                        <span className={`${styles['hamburgerMenu']}`}></span>
                        <span className={`${styles['hamburgerMenu']}`}></span>
                    </button>
                    <a className={`${styles['logo']}`} href="#">NY Times <span className={`${styles['highlight-text']}`}>Articles</span></a>
                    <nav className={`${styles['main-nav']} ${menuClick ? styles['active'] : ''}`}  role="navigation" >
                     
                        <ul className={`${styles['main-nav-list']}`}>
                        {props?.headerData?.map((item: any, index: number) => {
                            return (  
                            <li className={`${styles['nav-item']}`} key={index}>
                                <a href={item.url} className={`${styles['nav-link']}`}>{item.label}</a>
                            </li>
                            )}
                        )}
                        </ul>
                          
                    </nav>
                                
                </div>
            </header>
        </>
    )
}
export default CpHeader;