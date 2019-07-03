import React from 'react'
import styles from './Keyboard.module.scss'
interface Props {
  keyboard: string
  website?: string
  shiftKeyboard?: string
}
class Keyboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={styles['keyboard-box']}>
        <span className={this.props.shiftKeyboard ? styles['shift-top'] : styles['key']}>{this.props.keyboard}</span>
        <span className={this.props.shiftKeyboard ? styles['shift-bottom'] : ''}>{this.props.shiftKeyboard}</span>
      </div>
    )
  }
}

export default Keyboard