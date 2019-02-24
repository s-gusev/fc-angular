declare module jasmine {
  interface Matchers<T> {
    toStartWith(expected: string): boolean;
  }
}
