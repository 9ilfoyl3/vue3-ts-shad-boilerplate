import { createPinia } from 'pinia'

const pinia = createPinia()

export { useCounterStore } from './modules/counter'
export default pinia
