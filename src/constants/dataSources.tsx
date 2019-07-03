interface keyBoardSource {
  keyboard: string
  website?: string
  shiftKeyboard?: string
  
}
export const HEADERLINE: keyBoardSource[] = [
  { keyboard: 'Q', website: 'https://www.qq.com/' },
  { keyboard: 'W'},
  { keyboard: 'E'},
  { keyboard: 'R'},
  { keyboard: 'T'},
  { keyboard: 'Y'},
  { keyboard: 'U'},
  { keyboard: 'I'},
  { keyboard: 'O'},
  { keyboard: 'P'},
  { keyboard: '[', shiftKeyboard: '{'},
  { keyboard: ']', shiftKeyboard: '}'}
]

export const MIDDLELINE: keyBoardSource[] = [
  { keyboard: 'A'},
  { keyboard: 'S'},
  { keyboard: 'D'},
  { keyboard: 'F'},
  { keyboard: 'G'},
  { keyboard: 'H'},
  { keyboard: 'J'},
  { keyboard: 'K'},
  { keyboard: 'L'},
  { keyboard: ';', shiftKeyboard: ':'},
  { keyboard: '\'', shiftKeyboard: '"'}
]

export const FOOTERLINE: keyBoardSource[] = [
  { keyboard: 'Z'},
  { keyboard: 'X'},
  { keyboard: 'C'},
  { keyboard: 'V'},
  { keyboard: 'B'},
  { keyboard: 'N'},
  { keyboard: 'M'},
  { keyboard: ',', shiftKeyboard: '<'},
  { keyboard: '.', shiftKeyboard: '>'},
  { keyboard: '/', shiftKeyboard: '?'}
]
