export interface CounterState {
  count: number
}

export interface CounterGetters {
  [key: string]: (state: CounterState) => any
  doubleCount: (state: CounterState) => number
}

export interface CounterActions {
  increment: () => void
  decrement: () => void
}
