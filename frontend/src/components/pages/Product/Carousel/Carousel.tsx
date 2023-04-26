import { useEffect, useState } from 'react'
import styles from './Carousel.module.scss'

export const Carousel = (props: any) => {
  const { children } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
      }
      
      if(currentIndex === length - 1) {
        setCurrentIndex(prevState => prevState = 0)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }

    if (currentIndex === 0){
      setCurrentIndex(prevState => prevState = length -1)
    }
}


  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <button onClick={() => prev()} className={styles.leftArrow}>
          &lt;
        </button>

        <div className={styles.carouselContentWrapper}>
            <div
              className={styles.carouselContent}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
        </div>
      </div>

      <button onClick={() => next()} className={styles.rightArrow}>
        &gt;
      </button>

    </div>
  )
}

