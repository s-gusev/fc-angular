export const startWithMatcher: jasmine.CustomMatcherFactories = {
  toStartWith: (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>) => {
    return {
      compare: (actual: string, expected: string): jasmine.CustomMatcherResult => {
        let result: jasmine.CustomMatcherResult = {
          pass: false,
          message: `expected to start with '${expected}' but was '${actual}'`,
        };

        if (actual.startsWith(expected)) {
          result.pass = true;
          result.message = 'Passed';
        }

        return result;
      }
    }
  }
};
