import { Behavior } from './types'

export const only = <A>(value: A): Behavior<A> => new Only<A>(value)

export class Only<A> implements Behavior<A> {
  protected value: A

  constructor(value: A) {
    this.value = value
  }
}
