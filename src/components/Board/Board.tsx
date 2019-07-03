import React from 'react'
import Keyboard from '../Keyboard/Keyboard'
import { HEADERLINE, MIDDLELINE, FOOTERLINE } from '../../constants/dataSources'
import styles from './Board.module.scss'

const Board: React.FC = () => {
  return (
    <div>
      <div className={styles['boder-top-line']}>
        {
          HEADERLINE.map((value, index) => {
            return (
              <Keyboard keyboard={value.keyboard} key={index} shiftKeyboard={value.shiftKeyboard} website={value.website} />
            )
          })
        }
      </div>
      <div className={styles['boder-middle-line']}>
        {
          MIDDLELINE.map((value, index) => {
            return (
              <Keyboard keyboard={value.keyboard} key={index} shiftKeyboard={value.shiftKeyboard} website={value.website} />
            )
          })
        }
      </div>
      <div className={styles['boder-bottom-line']}>
        {
          FOOTERLINE.map((value, index) => {
            return (
              <Keyboard keyboard={value.keyboard} key={index} shiftKeyboard={value.shiftKeyboard} website={value.website} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Board
