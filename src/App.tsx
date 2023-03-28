import React, { useEffect, useState } from 'react';
import { FlyinItem, FlyinWrapper } from '@markenkema/react-flyin'
import './App.css';

const state = {
  panda: {
    start: {
      top: '-500px',
      left: '100px',
    },
    end: {
      top: '100px',
      left: '650px',
    }
  },
  skateboard: {
    start: {
      top: '100px',
      left: '1900px',
    },
    end: {
      top: '-10px',
      left: '1223px',
    }
  },
  veil: {
    start: {
      top: '100px',
      left: '-300px',
    },
    end: {
      top: '-40px',
      left: '503px',
    }
  },
  tinyBlur: {
    start: {
      top: '400px',
      left: '-500px',
    },
    end: {
      top: '300px',
      left: '400px',
    }
  }
}

function App() {
  return (
    <Flyin />
  )
}

function Flyin(){
  return(
    <div>
      <FlyinWrapper>
        <FlyinItem 
          image='panda.png' 
          startPosition={{ ...state.panda.start }}
          endPosition={{ ...state.panda.end }} 
          transition="all .5s ease-in-out"
          />
        <FlyinItem 
          image='skateboard.png' 
          startPosition={{ ...state.skateboard.start }}
          endPosition={{ ...state.skateboard.end }} 
          transition="all 1s ease-in-out"
          />
        <FlyinItem 
          image='veil.png' 
          startPosition={{ ...state.veil.start }}
          endPosition={{ ...state.veil.end }} 
          transition="all 1.5s ease-in-out"
          />
        <FlyinItem 
          image='tiny-blur.png' 
          startPosition={{ ...state.tinyBlur.start }}
          endPosition={{ ...state.tinyBlur.end }} 
          transition="all .5s ease-in-out"
          />
      </FlyinWrapper>
    </div>
  )
}

export default App;
