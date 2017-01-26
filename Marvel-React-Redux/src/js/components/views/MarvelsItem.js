import React from 'react';
import { Link } from 'react-router';

const MarvelsItem = ({marvel}) => 
  (
    <li className="small-12 medium-6 large-4 columns">
        <div className="marvelItem">
            <div className="marvelItem__img">
                <Link className="cta-more" to={'characters/' + marvel.id }>
                    <img src={marvel.thumbnail.path + "." + marvel.thumbnail.extension} alt={marvel.name}/>
                </Link>
            </div>
            <div className="marvelItem__txt">
                <Link to={'characters/' + marvel.id }>
                    <div className="marvelItem__name"> {marvel.name} </div>
                </Link>
                <Link className="cta-more" to={'characters/' + marvel.id }>detail</Link>
            </div>
            
        </div>
    </li>
  )


export default MarvelsItem