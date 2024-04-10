import React from 'react'

import './App.css'

import { Component } from 'react'

import sound from "./assets/sound.m4a"

import Lottie from 'lottie-react'

import cbox from './box/cbox.json'

import obox from './box/obox.json'
  
const quotes=[
  {
    name:"The only way to do great work is to love what you do.",
    id:0
  },
  {
    name: "If you can't explain it simply, you don't understand it well enough.",
    id:1
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand.",
    id:2
  },
  {
    name:"The only way to do great work is to love what you do.",
    id:3
  },
  {
    name:"If you can't explain it simply, you don't understand it well enough.",
    id:4
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand",
    id:5
  },
  {
    name:"If you can't explain it simply, you don't understand it well enough.",
    id:6
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand.",
    id:7
  },
  {
    name:"The only way to do great work is to love what you do",
    id:8
  },
]



class App extends Component{


  state={
    val:false,
    text:""
  }

  changeImg=()=>{
  

    const{val}=this.state

  
    this.setState({val:!val});
    
    this.setState({text:""})
    
  }
  changeImg1=()=>{
    const{val}=this.state
    this.setState({val:!val});
    const randomNumber = Math.floor(Math.random()*7);
   
    const  quote = quotes[randomNumber];
    setTimeout(() => {this.setState({text:quote.name})}, 3000);
    

    new Audio(sound).play()
    
  }

  render(){

    const {val,text}=this.state

    return(
      <div className='card'>
        
        {val? <h1 className='text'>{text}</h1>:<h1 className='text'>Tap the box</h1>}
        {val? <Lottie  className='img' animationData={obox}/>:<Lottie onClick={this.changeImg1} className='img' animationData={cbox}/>}
        {val &&(<button onClick={this.changeImg} className='btn'>Retry</button>)}
      </div>
    )
  }
}

export default App