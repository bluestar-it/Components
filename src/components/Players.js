import React, { Component } from 'react'
import { PlayersList } from '../shared/ListOfPlayers'

export default class Players extends Component {
  render() {
    return (
       
        <div className='container'>
            {PlayersList.map( (player) => (
                <div className='column'>
                <div className='card'>
                    <img src={player.img}></img>
                    <h4>{player.name}</h4>
                    <p className="title">{player.club}</p>
                    <p>
                        <button>Detail</button>
                    </p>
    
                </div>
    
            </div>

            )

            )
            }
        </div>

        

    )
  }
}
