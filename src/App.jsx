import React, { useEffect, useState } from 'react'
import "./App.css"
import { io } from 'socket.io-client'
import MTlottary from './MTlottary';
import NumberChart from './NumberChart';

const socket = io.connect( 'http://localhost:5000', {
  transports: [ 'websocket' ],
} );
const App = () =>
{
  const [ message, setMessage ] = useState( 99 )
  const [ number, setNumber ] = useState( 5 )
  const [ serverMessage, setServerMessage ] = useState( '' )
  const clickHandler = ( e ) =>
  {
    console.log( socket )
    socket.emit( 'chat', {
      message
    } )
    setMessage( '' )
  }

  socket.on( 'update', ( updateData ) =>
  {
    // console.log('Received real-time update:', updateData);
    setNumber( updateData )
  } );
  useEffect( () =>
  {
    socket.emit( 'update', {
      number
    } )

    socket.on( 'chat', ( data ) =>
    {
      console.log( data )
      setServerMessage( data.message )
    } )

  }, [ socket ] );
  return (
    <div className="">
      <h1 className=' text-[40px] text-green-600'>{ number }</h1>
      <NumberChart number={ number } />
    </div>
  )
}

export default App