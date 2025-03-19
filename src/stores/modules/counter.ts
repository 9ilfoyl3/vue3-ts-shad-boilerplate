import { defineStore } from 'pinia'
import type { CounterState, CounterGetters, CounterActions } from '../types/counter'

export const useCounterStore = defineStore<'counter', CounterState, CounterGetters, CounterActions>(
  'counter',
  {
    state: (): CounterState => ({
      count: 0,
    }),
    getters: {
      doubleCount: state => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      },
    },
  }
)
