import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
        <div className='container'>
            <div className='column'>
               <div className='card'>
                    <img src='assets/images/cr.jpg'/>
                    <h4>Cristiano Ronaldo</h4>
                    <p className='title' > Manchester United</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>
            <div className='column'>
               <div className='card'>
                    <img src='assets/images/kante.jpg'/>
                    <h4>Kante</h4>
                    <p className='title' > Chelsea</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>
            <div className='column'>
               <div className='card'>
                    <img src='assets/images/messi.jpg'/>
                    <h4>Messi</h4>
                    <p className='title' >PSG</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>
            
            <div className='column'>
               <div className='card'>
                    <img src='assets/images/neymar.jpg'/>
                    <h4>Neymar</h4>
                    <p className='title' >PSG</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>
            <div className='column'>
               <div className='card'>
                    <img src='assets/images/kane.jpg'/>
                    <h4>Kane</h4>
                    <p className='title' >Tottemham</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>

            <div className='column'>
               <div className='card'>
                    <img src='assets/images/haaland.jpg'/>
                    <h4>Haaland</h4>
                    <p className='title' >Manchester City</p>
                    <p>
                        <button>Detail</button>
                    </p>
               </div>
            </div>
        </div>
        // <div className='container'>
        //     {Players.map( (player) => (
        //         <div className='column'>
        //         <div className='card'>
        //             <img src={player.img}></img>
        //             <h4>{player.name}</h4>
        //             <p className={player.club}></p>
        //             <p>
        //                 <button>Detail</button>
        //             </p>
    
        //         </div>
    
        //     </div>

        //     )

        //     )
        //     }
        // </div>

        

    )
  }
}
