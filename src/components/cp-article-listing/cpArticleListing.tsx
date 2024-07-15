import React, { useEffect, useState } from 'react'
import styles from './cpArticleListing.module.scss';

type MediaMetadata = {
  url: string;
  height: number;
  width: number;
};

type Media = {
  type: string;
  'media-metadata': MediaMetadata[]; // Use quotes and hyphens in brackets
};

type resultProps = {
  title: string;
  source: string;
  published_date: string;
  url: string;
  abstract: string;
  media: Media[];
};


const CpArticleListing = () =>{
    const [result, setResult] = useState<resultProps[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=WV5mBWo5fY5zO1T3AUpPKeeqlzDHKeNr", {
                method: "GET"
          });
          const jsonData = await data.json();
          setResult(jsonData.results);
        };
    
        api();
      }, []);

    return(
        <>
        <div className="container">
      <div className={`${styles['article-list']}`}>
        {result.map((value) => {
          return (
            <a href={value.url} className={`${styles['article-list-item']}`} target='_blank' rel="noreferrer">
            <div >
            {value.media[0] && value.media[0]['media-metadata'] && value.media[0]['media-metadata'].length >= 3 && (
                <img src={value.media[0]['media-metadata'][2].url} alt={value.title} className={`${styles['article-img']}`} />
            )}  
            <h2 className={`${styles['article-title']}`}>{value.title}</h2>
              <h3 className={`${styles['article-date']}`}>{value.published_date}</h3>
              <p className={`${styles['desc']}`}>{value.abstract}</p>
              
            </div>
            </a>
          );
        })}
      </div>
    </div>
        </>
    )
}

export default CpArticleListing