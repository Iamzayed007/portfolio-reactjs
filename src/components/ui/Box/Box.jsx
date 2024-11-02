import React from 'react'

const Box = ({className,children}) => {
  return (
    <div className={`border-2 border-gray-600 bg-gray-400 ${className ? className : ''} `}>
        <div className={`border-2 border-gray-600 mt-3 ml-3 bg-gray-600 z-20 ${className ? className : ""}`}>
        {children}
    </div>
</div>
  )
}

export default Box