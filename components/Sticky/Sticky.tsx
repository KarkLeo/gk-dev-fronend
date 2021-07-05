import React, { useEffect, useRef, useState } from 'react'
import s from './Sticky.module.css'
import classNames from 'classnames'

interface StickyProps {
  top?: number
  fullWidth?: boolean
}

const Sticky: React.FC<StickyProps> = ({
  top = 0,
  fullWidth = false,
  children,
}) => {
  const root = useRef<HTMLDivElement>(null)
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const stickyWatcher = () => {
      if (root.current) {
        const rect = root.current.getBoundingClientRect()
        root.current.style.setProperty('--height', rect.height + 'px')
        root.current.style.setProperty('--left', rect.left + 'px')
        root.current.style.setProperty('--top', top + 'px')
        root.current.style.setProperty(
          '--width',
          fullWidth ? '100%' : rect.width + 'px'
        )
        root.current.style.setProperty(
          '--position',
          rect.top < top ? 'fixed' : 'static'
        )
        setSticky(rect.top < top)
      }
    }
    stickyWatcher()
    window.addEventListener('scroll', stickyWatcher)
    !fullWidth && window.addEventListener('resize', stickyWatcher)
    return () => {
      window.removeEventListener('scroll', stickyWatcher)
      !fullWidth && window.removeEventListener('resize', stickyWatcher)
    }
  }, [top, fullWidth, root, setSticky])

  return (
    <div ref={root} className={s.root}>
      <div className={classNames(s.body, { sticky: isSticky })}>{children}</div>
    </div>
  )
}

export default Sticky
