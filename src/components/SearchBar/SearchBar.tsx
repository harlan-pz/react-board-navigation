import React from 'react'
import styles from './SearchBar.module.scss'

interface State {
  searchWord: string
}
class SearchBar extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      searchWord: ''
    }
  }
  onInput = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchWord: event.currentTarget.value
    })
  }
  baidu = () => {
    window.open('http://www.baidu.com/s?wd=' + this.state.searchWord)
  }
  google = () => {
    window.open('http://www.google.com/search?q=' + this.state.searchWord)
  }
  render() {
    return (
      <div className={styles['box']}>
        <div className={styles['search']}>
          <input type="text" onInput={this.onInput} className={styles['search-bar']} />
          <button type="button" onClick={this.baidu} className={styles['search-baidu']}>百度一下</button>
          <button type="button" onClick={this.google} className={styles['search-google']}>谷歌搜索</button>
        </div>
      </div>
    )
  }
}

export default SearchBar