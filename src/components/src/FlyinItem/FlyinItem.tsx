import React, { useEffect, useState } from 'react'

interface FlyinItemProps {
  image: string;
  transition?: string;
  startPosition: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  endPosition: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  zIndex?: number;
}

const FlyinItem = ({ image, startPosition, endPosition, zIndex = 0, transition = 'all 1s ease-in-out' }: FlyinItemProps) => {
  const pos = {
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    ...startPosition
  }

  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    if (!pageLoaded) {
      const onPageLoad = () => {
        setPageLoaded(true)
        window.removeEventListener('load', onPageLoad)
      }
      
      if (document.readyState === 'complete') {
        onPageLoad()
      } else {
        window.addEventListener('load', onPageLoad)
      }
    }
  }, [pageLoaded])

  return (
        <img className='flyin' alt="" src={image} style={{ transition: transition, ...pos, ...(pageLoaded ? endPosition : {}), zIndex }} />
  )
}

export {
  FlyinItem
}
