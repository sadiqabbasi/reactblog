import React,{ useContext } from 'react'
import {fit} from './APIs/ApiFit'

const Fitness = () => {
  const [dataFit] = useContext(fit);
  return (
    <>
    <div className="contentPage">
      
      {dataFit.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="FitnessImg" />
              <p>{item.title}</p>
              <hr />
              <p>{item.description}</p>
              <p>{item.author}{item.publishedAt}</p>
            </div>
            </a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  )
}

export default Fitness