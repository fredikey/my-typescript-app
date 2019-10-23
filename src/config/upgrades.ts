/* list of upgrades*/
import { IUpgrade } from '../types'
const upgrades: Array<IUpgrade> = [
  {
    id: 0,
    addiction: 1,
    title: 'Click upgrade',
    type: 'click',
    price: 20
  },
  {
    id: 1,
    addiction: 0.5,
    title: 'Per sec upgrade',
    type: 'sec',
    price: 20
  }
]

export default upgrades
