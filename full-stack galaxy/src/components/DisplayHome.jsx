import React from 'react';
import Navbar from './Navbar';
import Albumitem from './Albumitem';
import Songitem from './Songitem';
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';
const DisplayHome=() => {

   const {songsData,albumsData} = useContext(PlayerContext);
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
