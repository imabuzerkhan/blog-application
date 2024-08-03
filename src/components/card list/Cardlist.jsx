import React from 'react'
import styles from './cardlist.modules.css'
import Pagination from '../pagination/Pagination'
const Cardlist = () => {
  return (
    <div className={styles.container}  >
      <Pagination/>
    </div>
  )
}

export default Cardlist
