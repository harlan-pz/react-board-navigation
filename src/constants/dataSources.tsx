interface keyBoardSource {
  keyboard: string
  website?: string
}
export const HEADERLINE: keyBoardSource[] = [
  { keyboard: 'Q', website: 'http://www.qq.com' },
  { keyboard: 'W'},
  { keyboard: 'E'},
  { keyboard: 'R'},
  { keyboard: 'T'},
  { keyboard: 'Y'},
  { keyboard: 'U'},
  { keyboard: 'I'},
  { keyboard: 'O'},
  { keyboard: 'P'}
]

export const MIDDLELINE: keyBoardSource[] = [
  { keyboard: 'A'},
  { keyboard: 'S'},
  { keyboard: 'D'},
  { keyboard: 'F'},
  { keyboard: 'G', website: 'https://www.google.com'},
  { keyboard: 'H'},
  { keyboard: 'J'},
  { keyboard: 'K'},
  { keyboard: 'L'}
]

export const FOOTERLINE: keyBoardSource[] = [
  { keyboard: 'Z'},
  { keyboard: 'X'},
  { keyboard: 'C'},
  { keyboard: 'V'},
  { keyboard: 'B', website: 'http://www.baidu.com'},
  { keyboard: 'N'},
  { keyboard: 'M'}
]
