import React from 'react'

const FlyinWrapper = ({ style, children }: { style?: React.CSSProperties, children?: React.ReactNode }) => {
    return (
      <div className='flyinWrapper' style={{ position: 'relative', ...style }}>
        {children}
      </div>
    )
}

export { FlyinWrapper }
