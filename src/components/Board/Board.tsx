import React from 'react'
import Keyboard from '../Keyboard/Keyboard'
import { HEADERLINE, MIDDLELINE, FOOTERLINE } from '../../constants/dataSources'
import styles from './Board.module.scss'

class Board extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      const website = window.localStorage.getItem(event.key.toUpperCase())
      if(website) {
        try {
          window.open(website as string)
        } catch(e) {
          console.log(e)
        }
        
      }
    })
  }
  render() {
    return (
      <div className={styles['board']}>
        <div className={styles['boder-top-line']}>
          {
            HEADERLINE.map((value, index) => {
              return (
                <Keyboard keyboard={value.keyboard} key={index} website={value.website} />
              )
            })
          }
        </div>
        <div className={styles['boder-middle-line']}>
          {
            MIDDLELINE.map((value, index) => {
              return (
                <Keyboard keyboard={value.keyboard} key={index} website={value.website} />
              )
            })
          }
        </div>
        <div className={styles['boder-bottom-line']}>
          {
            FOOTERLINE.map((value, index) => {
              return (
                <Keyboard keyboard={value.keyboard} key={index} website={value.website} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Board
