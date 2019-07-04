import React from 'react'
import styles from './Keyboard.module.scss'
interface Props {
  keyboard: string
  website?: string
}
interface State {
  website?: string,
  iconUrl?: string,
  reg: RegExp
}
class Keyboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const reg = /((https|http):\/\/|.)[0-9a-zA-Z.]*((?=\/)|.)/
    const iconUrl = props.website === undefined ? null : props.website.match(reg)
    this.state = {
      website: props.website,
      iconUrl: iconUrl === null ? undefined : iconUrl[0] + '/favicon.ico',
      reg: reg
    }
  }
  componentDidMount() {
    if(window.localStorage.getItem(this.props.keyboard) === null && this.state.website !== undefined) {
      window.localStorage.setItem(this.props.keyboard, this.state.website)
    }
    const website = window.localStorage.getItem(this.props.keyboard) === null ? this.state.website : window.localStorage.getItem(this.props.keyboard) as string
    const iconUrl = website === undefined ? null : website.match(this.state.reg)
    this.setState({
      website: website,
      iconUrl: iconUrl === null ? undefined : iconUrl[0] + '/favicon.ico'
    })
  }
  openWebsite = () => {
    if (this.state.website) {
      try {
        window.open(this.state.website)
      } catch (e) {
        console.log(e)
      }

    }
  }
  editWebsite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    const website = window.prompt('请输入想要设置的网址(请输入完整的带有https或http的URL)', this.state.website)
    if (website !== null) {
      window.localStorage.setItem(this.props.keyboard, website as string)
      const iconUrl = website.match(this.state.reg)
      this.setState({
        website: website,
        iconUrl: iconUrl === null ? undefined : iconUrl[0] + '/favicon.ico'
      })
    }
  }
  deleteWebsite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    window.localStorage.setItem(this.props.keyboard, '')
    this.setState({
      website: undefined,
      iconUrl: undefined
    })
  }
  render() {
    return (
      <div className={styles['keyboard-box']} onClick={this.openWebsite}>
        <div className={styles['action']}>
          <div className={styles['edit']} onClick={this.editWebsite}>E</div>
          <div className={styles['delete']} onClick={this.deleteWebsite}>D</div>
        </div>
        <span className={styles['key']}>{this.props.keyboard}</span>
        <img src={this.state.iconUrl} className={this.state.iconUrl !== undefined ? styles['icon'] : ''} alt="" />
      </div>
    )
  }
}

export default Keyboard