import React, { useEffect, useState } from 'react'

const PageWrapper = ({ children, className = '' }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <>
      <style>{`
        @keyframes pageSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .page-enter {
          animation: pageSlideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className={`${animate ? 'page-enter' : 'opacity-0'} ${className}`} >
        {children}
      </div>
    </>
  )
}

export default PageWrapper