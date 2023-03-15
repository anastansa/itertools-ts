// @ts-ignore
import { createGeneratorFixture, createIterableFixture, createIteratorFixture, createMapFixture } from "../fixture";
import { set } from "../../src";

describe.each([
  ...dataProviderForArrays(),
  ...dataProviderForGenerators(),
  ...dataProviderForIterables(),
  ...dataProviderForIterators(),
  ...dataProviderForStrings(),
  ...dataProviderForSets(),
  ...dataProviderForMixed(),
] as Array<[Array<Iterable<unknown>|Iterator<unknown>>, number, Array<unknown>]>)(
  "Set Partial Intersection Test",
  (
    input: Array<Iterable<unknown>|Iterator<unknown>>,
    minIntersectionCount: number,
    expected: Array<unknown>
  ) => {
    it("", () => {
      // Given
      const result = [];

      // When
      for (const item of set.partialIntersection(minIntersectionCount, ...input)) {
        result.push(item);
      }

      (result as Array<unknown>).sort();
      (expected as Array<unknown>).sort();

      // Then
      expect(result).toEqual(expected);
    });
  }
);

function dataProviderForArrays(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        [],
      ],
      1,
      [],
    ],
    [
      [
        [],
      ],
      2,
      [],
    ],
    [
      [
        [],
        [],
      ],
      1,
      [],
    ],
    [
      [
        [],
        [],
      ],
      2,
      [],
    ],
    [
      [
        [],
        [],
      ],
      3,
      [],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ],
      2,
      [1, 2, 3, 4, 5],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, '3', '4', 5],
      ],
      2,
      [1, 2, 5],
    ],
    [
      [
        ['1', '2', 3, 4, 5],
        ['1', 2, '3', '4', 5],
      ],
      2,
      ['1', 5],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, 5, 6],
        [1, 5, 5, 5, 5, 5, 5],
      ],
      2,
      [1, 5],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, '5', 6],
        [1, 5, 5, 5, 5, 5, 5],
      ],
      2,
      [1],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, 5, 6],
        [1, 5, 5, 5, 5, 5, 5],
      ],
      3,
      [1],
    ],
    [
      [
        [1, true, '1', 1.0, '1.0'],
        [true, true, true, true, true, true],
      ],
      2,
      [true],
    ],
    [
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ['1', '2', 3, 4, 5, 6, 7, '8', '9'],
        [1, 3, 5, 7, 9, 11],
      ],
      2,
      [1, 3, 4, 5, 6, 7, 9],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 10, 11],
        [1, 2, 3, 12],
        [1, 4, 13, 14],
      ],
      1,
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 10, 11],
        [1, 2, 3, 12],
        [1, 4, 13, 14],
      ],
      2,
      [1, 2, 3, 4],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 10, 11],
        [1, 2, 3, 12],
        [1, 4, 13, 14],
      ],
      3,
      [1, 2],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 10, 11],
        [1, 2, 3, 12],
        [1, 4, 13, 14],
      ],
      4,
      [1],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [1, 2, 10, 11],
        [1, 2, 3, 12],
        [1, 4, 13, 14],
      ],
      5,
      [],
    ],
    [
      [
        ['c++', 'java', 'c#', 'go', 'haskell'],
        ['php', 'python', 'javascript', 'perl'],
        ['c++', 'java', 'c#', 'go', 'php']
      ],
      2,
      ['c++', 'java', 'c#', 'go', 'php'],
    ],
    // multisets:
    [
      [
        [1, 1, 2],
        [2, 2, 3],
      ],
      2,
      [2],
    ],
    [
      [
        [1, 1, 1, 3],
        [1, 1, 2],
      ],
      2,
      [1, 1],
    ],
    [
      [
        [1, 1, 2, 4],
        [1, 1, 1, 2, 3],
      ],
      2,
      [1, 1, 2],
    ],
    [
      [
        [1, 1, 2, 2, 1, 1],
        [2, 2, 1, 1, 2, 2],
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        [1, 1, 2, 2, 1, 1],
        [2, 2, 1, 1, '2', '2'],
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        [1, 1, 2, 2, 1, 1],
        [2, 2, '1', '1', 2, 2],
      ],
      2,
      [2, 2],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        [5, 5, 5, 5, 5, 1, 5, 5, 1],
      ],
      2,
      [1, 1, 5, 5],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        [5, 5, 5, 5, 5, 1, 5, 5, 1],
      ],
      3,
      [1, 1],
    ],
    [
      [
        [1, 1, 1, 1, 'a'],
        [1, 2, 3, 4, 5, 'a', 2, 3, 4, 5],
        [5, 5, 5, 5, 5, 'a', 5, 5, 1],
      ],
      2,
      ['a', 1, 5, 5],
    ],
    [
      [
        ['l', 'l', 'm', 'n', 'p', 'q', 'q', 'r'],
        ['l', 'm', 'm', 'p', 'q', 'r', 'r', 'r', 'r']
      ],
      2,
      ['l', 'm', 'p', 'q', 'r'],
    ],
    [
      [
        [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
        [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9],
      ],
      2,
      [4, 4, 5, 5, 6, 6],
    ],
    [
      [
        ['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd'],
        ['b', 'b', 'c', 'c', 'c', 'd', 'd', 'e'],
      ],
      2,
      ['b', 'b', 'c', 'd', 'd'],
    ],
    [
      [
        [1, 2],
        [1],
      ],
      1,
      [1, 2],
    ],
    [
      [
        [1, 2],
        [1, 1],
      ],
      1,
      [1, 1, 2],
    ],
    [
      [
        [1, 1],
        [1, 1, 1, 2],
      ],
      1,
      [1, 1, 1, 2],
    ],
    [
      [
        [1, 1, 3, 5],
        [1, 2, 4, 5],
      ],
      1,
      [1, 1, 2, 3, 4, 5],
    ],
    [
      [
        [1, 1, 4, 7],
        [1, 2, 5, 7],
        [1, 3, 6, 8],
      ],
      1,
      [1, 1, 2, 3, 4, 5, 6, 7, 8],
    ],
  ];
}

function dataProviderForGenerators(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        createGeneratorFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createGeneratorFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createGeneratorFixture([]),
        createGeneratorFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createGeneratorFixture([]),
        createGeneratorFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createGeneratorFixture([]),
        createGeneratorFixture([]),
      ],
      3,
      [],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 3, 4, 5]),
      ],
      2,
      [1, 2, 3, 4, 5],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, '3', '4', 5]),
      ],
      2,
      [1, 2, 5],
    ],
    [
      [
        createGeneratorFixture(['1', '2', 3, 4, 5]),
        createGeneratorFixture(['1', 2, '3', '4', 5]),
      ],
      2,
      ['1', 5],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 1]),
        createGeneratorFixture([1, 2, 3, 4, 5, 6]),
        createGeneratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1, 5],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 1]),
        createGeneratorFixture([1, 2, 3, 4, '5', 6]),
        createGeneratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 1]),
        createGeneratorFixture([1, 2, 3, 4, 5, 6]),
        createGeneratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      3,
      [1],
    ],
    [
      [
        createGeneratorFixture([1, true, '1', 1.0, '1.0']),
        createGeneratorFixture([true, true, true, true, true, true]),
      ],
      2,
      [true],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        createGeneratorFixture(['1', '2', 3, 4, 5, 6, 7, '8', '9']),
        createGeneratorFixture([1, 3, 5, 7, 9, 11]),
      ],
      2,
      [1, 3, 4, 5, 6, 7, 9],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 10, 11]),
        createGeneratorFixture([1, 2, 3, 12]),
        createGeneratorFixture([1, 4, 13, 14]),
      ],
      1,
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 10, 11]),
        createGeneratorFixture([1, 2, 3, 12]),
        createGeneratorFixture([1, 4, 13, 14]),
      ],
      2,
      [1, 2, 3, 4],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 10, 11]),
        createGeneratorFixture([1, 2, 3, 12]),
        createGeneratorFixture([1, 4, 13, 14]),
      ],
      3,
      [1, 2],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 10, 11]),
        createGeneratorFixture([1, 2, 3, 12]),
        createGeneratorFixture([1, 4, 13, 14]),
      ],
      4,
      [1],
    ],
    [
      [
        createGeneratorFixture([1, 2, 3, 4, 5]),
        createGeneratorFixture([1, 2, 10, 11]),
        createGeneratorFixture([1, 2, 3, 12]),
        createGeneratorFixture([1, 4, 13, 14]),
      ],
      5,
      [],
    ],
    [
      [
        createGeneratorFixture(['c++', 'java', 'c#', 'go', 'haskell']),
        createGeneratorFixture(['php', 'python', 'javascript', 'perl']),
        createGeneratorFixture(['c++', 'java', 'c#', 'go', 'php']),
      ],
      2,
      ['c++', 'java', 'c#', 'go', 'php'],
    ],
    // multisets:
    [
      [
        createGeneratorFixture([1, 1, 2]),
        createGeneratorFixture([2, 2, 3]),
      ],
      2,
      [2],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 3]),
        createGeneratorFixture([1, 1, 2]),
      ],
      2,
      [1, 1],
    ],
    [
      [
        createGeneratorFixture([1, 1, 2, 4]),
        createGeneratorFixture([1, 1, 1, 2, 3]),
      ],
      2,
      [1, 1, 2],
    ],
    [
      [
        createGeneratorFixture([1, 1, 2, 2, 1, 1]),
        createGeneratorFixture([2, 2, 1, 1, 2, 2]),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createGeneratorFixture([1, 1, 2, 2, 1, 1]),
        createGeneratorFixture([2, 2, 1, 1, '2', '2']),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createGeneratorFixture([1, 1, 2, 2, 1, 1]),
        createGeneratorFixture([2, 2, '1', '1', 2, 2]),
      ],
      2,
      [2, 2],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 1]),
        createGeneratorFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createGeneratorFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      2,
      [1, 1, 5, 5],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 1]),
        createGeneratorFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createGeneratorFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      3,
      [1, 1],
    ],
    [
      [
        createGeneratorFixture([1, 1, 1, 1, 'a']),
        createGeneratorFixture([1, 2, 3, 4, 5, 'a', 2, 3, 4, 5]),
        createGeneratorFixture([5, 5, 5, 5, 5, 'a', 5, 5, 1]),
      ],
      2,
      ['a', 1, 5, 5],
    ],
    [
      [
        createGeneratorFixture(['l', 'l', 'm', 'n', 'p', 'q', 'q', 'r']),
        createGeneratorFixture(['l', 'm', 'm', 'p', 'q', 'r', 'r', 'r', 'r']),
      ],
      2,
      ['l', 'm', 'p', 'q', 'r'],
    ],
    [
      [
        createGeneratorFixture([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
        createGeneratorFixture([4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]),
      ],
      2,
      [4, 4, 5, 5, 6, 6],
    ],
    [
      [
        createGeneratorFixture(['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd']),
        createGeneratorFixture(['b', 'b', 'c', 'c', 'c', 'd', 'd', 'e']),
      ],
      2,
      ['b', 'b', 'c', 'd', 'd'],
    ],
    [
      [
        createGeneratorFixture([1, 2]),
        createGeneratorFixture([1]),
      ],
      1,
      [1, 2],
    ],
    [
      [
        createGeneratorFixture([1, 2]),
        createGeneratorFixture([1, 1]),
      ],
      1,
      [1, 1, 2],
    ],
    [
      [
        createGeneratorFixture([1, 1]),
        createGeneratorFixture([1, 1, 1, 2]),
      ],
      1,
      [1, 1, 1, 2],
    ],
    [
      [
        createGeneratorFixture([1, 1, 3, 5]),
        createGeneratorFixture([1, 2, 4, 5]),
      ],
      1,
      [1, 1, 2, 3, 4, 5],
    ],
    [
      [
        createGeneratorFixture([1, 1, 4, 7]),
        createGeneratorFixture([1, 2, 5, 7]),
        createGeneratorFixture([1, 3, 6, 8]),
      ],
      1,
      [1, 1, 2, 3, 4, 5, 6, 7, 8],
    ],
  ];
}

function dataProviderForIterables(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        createIterableFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createIterableFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createIterableFixture([]),
        createIterableFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createIterableFixture([]),
        createIterableFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createIterableFixture([]),
        createIterableFixture([]),
      ],
      3,
      [],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 3, 4, 5]),
      ],
      2,
      [1, 2, 3, 4, 5],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, '3', '4', 5]),
      ],
      2,
      [1, 2, 5],
    ],
    [
      [
        createIterableFixture(['1', '2', 3, 4, 5]),
        createIterableFixture(['1', 2, '3', '4', 5]),
      ],
      2,
      ['1', 5],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 1]),
        createIterableFixture([1, 2, 3, 4, 5, 6]),
        createIterableFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1, 5],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 1]),
        createIterableFixture([1, 2, 3, 4, '5', 6]),
        createIterableFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 1]),
        createIterableFixture([1, 2, 3, 4, 5, 6]),
        createIterableFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      3,
      [1],
    ],
    [
      [
        createIterableFixture([1, true, '1', 1.0, '1.0']),
        createIterableFixture([true, true, true, true, true, true]),
      ],
      2,
      [true],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        createIterableFixture(['1', '2', 3, 4, 5, 6, 7, '8', '9']),
        createIterableFixture([1, 3, 5, 7, 9, 11]),
      ],
      2,
      [1, 3, 4, 5, 6, 7, 9],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 10, 11]),
        createIterableFixture([1, 2, 3, 12]),
        createIterableFixture([1, 4, 13, 14]),
      ],
      1,
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 10, 11]),
        createIterableFixture([1, 2, 3, 12]),
        createIterableFixture([1, 4, 13, 14]),
      ],
      2,
      [1, 2, 3, 4],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 10, 11]),
        createIterableFixture([1, 2, 3, 12]),
        createIterableFixture([1, 4, 13, 14]),
      ],
      3,
      [1, 2],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 10, 11]),
        createIterableFixture([1, 2, 3, 12]),
        createIterableFixture([1, 4, 13, 14]),
      ],
      4,
      [1],
    ],
    [
      [
        createIterableFixture([1, 2, 3, 4, 5]),
        createIterableFixture([1, 2, 10, 11]),
        createIterableFixture([1, 2, 3, 12]),
        createIterableFixture([1, 4, 13, 14]),
      ],
      5,
      [],
    ],
    [
      [
        createIterableFixture(['c++', 'java', 'c#', 'go', 'haskell']),
        createIterableFixture(['php', 'python', 'javascript', 'perl']),
        createIterableFixture(['c++', 'java', 'c#', 'go', 'php']),
      ],
      2,
      ['c++', 'java', 'c#', 'go', 'php'],
    ],
    // multisets:
    [
      [
        createIterableFixture([1, 1, 2]),
        createIterableFixture([2, 2, 3]),
      ],
      2,
      [2],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 3]),
        createIterableFixture([1, 1, 2]),
      ],
      2,
      [1, 1],
    ],
    [
      [
        createIterableFixture([1, 1, 2, 4]),
        createIterableFixture([1, 1, 1, 2, 3]),
      ],
      2,
      [1, 1, 2],
    ],
    [
      [
        createIterableFixture([1, 1, 2, 2, 1, 1]),
        createIterableFixture([2, 2, 1, 1, 2, 2]),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createIterableFixture([1, 1, 2, 2, 1, 1]),
        createIterableFixture([2, 2, 1, 1, '2', '2']),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createIterableFixture([1, 1, 2, 2, 1, 1]),
        createIterableFixture([2, 2, '1', '1', 2, 2]),
      ],
      2,
      [2, 2],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 1]),
        createIterableFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createIterableFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      2,
      [1, 1, 5, 5],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 1]),
        createIterableFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createIterableFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      3,
      [1, 1],
    ],
    [
      [
        createIterableFixture([1, 1, 1, 1, 'a']),
        createIterableFixture([1, 2, 3, 4, 5, 'a', 2, 3, 4, 5]),
        createIterableFixture([5, 5, 5, 5, 5, 'a', 5, 5, 1]),
      ],
      2,
      ['a', 1, 5, 5],
    ],
    [
      [
        createIterableFixture(['l', 'l', 'm', 'n', 'p', 'q', 'q', 'r']),
        createIterableFixture(['l', 'm', 'm', 'p', 'q', 'r', 'r', 'r', 'r']),
      ],
      2,
      ['l', 'm', 'p', 'q', 'r'],
    ],
    [
      [
        createIterableFixture([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
        createIterableFixture([4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]),
      ],
      2,
      [4, 4, 5, 5, 6, 6],
    ],
    [
      [
        createIterableFixture(['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd']),
        createIterableFixture(['b', 'b', 'c', 'c', 'c', 'd', 'd', 'e']),
      ],
      2,
      ['b', 'b', 'c', 'd', 'd'],
    ],
    [
      [
        createIterableFixture([1, 2]),
        createIterableFixture([1]),
      ],
      1,
      [1, 2],
    ],
    [
      [
        createIterableFixture([1, 2]),
        createIterableFixture([1, 1]),
      ],
      1,
      [1, 1, 2],
    ],
    [
      [
        createIterableFixture([1, 1]),
        createIterableFixture([1, 1, 1, 2]),
      ],
      1,
      [1, 1, 1, 2],
    ],
    [
      [
        createIterableFixture([1, 1, 3, 5]),
        createIterableFixture([1, 2, 4, 5]),
      ],
      1,
      [1, 1, 2, 3, 4, 5],
    ],
    [
      [
        createIterableFixture([1, 1, 4, 7]),
        createIterableFixture([1, 2, 5, 7]),
        createIterableFixture([1, 3, 6, 8]),
      ],
      1,
      [1, 1, 2, 3, 4, 5, 6, 7, 8],
    ],
  ];
}

function dataProviderForIterators(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        createIteratorFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createIteratorFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createIteratorFixture([]),
        createIteratorFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        createIteratorFixture([]),
        createIteratorFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        createIteratorFixture([]),
        createIteratorFixture([]),
      ],
      3,
      [],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 3, 4, 5]),
      ],
      2,
      [1, 2, 3, 4, 5],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, '3', '4', 5]),
      ],
      2,
      [1, 2, 5],
    ],
    [
      [
        createIteratorFixture(['1', '2', 3, 4, 5]),
        createIteratorFixture(['1', 2, '3', '4', 5]),
      ],
      2,
      ['1', 5],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 1]),
        createIteratorFixture([1, 2, 3, 4, 5, 6]),
        createIteratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1, 5],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 1]),
        createIteratorFixture([1, 2, 3, 4, '5', 6]),
        createIteratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 1]),
        createIteratorFixture([1, 2, 3, 4, 5, 6]),
        createIteratorFixture([1, 5, 5, 5, 5, 5, 5]),
      ],
      3,
      [1],
    ],
    [
      [
        createIteratorFixture([1, true, '1', 1.0, '1.0']),
        createIteratorFixture([true, true, true, true, true, true]),
      ],
      2,
      [true],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        createIteratorFixture(['1', '2', 3, 4, 5, 6, 7, '8', '9']),
        createIteratorFixture([1, 3, 5, 7, 9, 11]),
      ],
      2,
      [1, 3, 4, 5, 6, 7, 9],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 10, 11]),
        createIteratorFixture([1, 2, 3, 12]),
        createIteratorFixture([1, 4, 13, 14]),
      ],
      1,
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 10, 11]),
        createIteratorFixture([1, 2, 3, 12]),
        createIteratorFixture([1, 4, 13, 14]),
      ],
      2,
      [1, 2, 3, 4],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 10, 11]),
        createIteratorFixture([1, 2, 3, 12]),
        createIteratorFixture([1, 4, 13, 14]),
      ],
      3,
      [1, 2],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 10, 11]),
        createIteratorFixture([1, 2, 3, 12]),
        createIteratorFixture([1, 4, 13, 14]),
      ],
      4,
      [1],
    ],
    [
      [
        createIteratorFixture([1, 2, 3, 4, 5]),
        createIteratorFixture([1, 2, 10, 11]),
        createIteratorFixture([1, 2, 3, 12]),
        createIteratorFixture([1, 4, 13, 14]),
      ],
      5,
      [],
    ],
    [
      [
        createIteratorFixture(['c++', 'java', 'c#', 'go', 'haskell']),
        createIteratorFixture(['php', 'python', 'javascript', 'perl']),
        createIteratorFixture(['c++', 'java', 'c#', 'go', 'php']),
      ],
      2,
      ['c++', 'java', 'c#', 'go', 'php'],
    ],
    // multisets:
    [
      [
        createIteratorFixture([1, 1, 2]),
        createIteratorFixture([2, 2, 3]),
      ],
      2,
      [2],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 3]),
        createIteratorFixture([1, 1, 2]),
      ],
      2,
      [1, 1],
    ],
    [
      [
        createIteratorFixture([1, 1, 2, 4]),
        createIteratorFixture([1, 1, 1, 2, 3]),
      ],
      2,
      [1, 1, 2],
    ],
    [
      [
        createIteratorFixture([1, 1, 2, 2, 1, 1]),
        createIteratorFixture([2, 2, 1, 1, 2, 2]),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createIteratorFixture([1, 1, 2, 2, 1, 1]),
        createIteratorFixture([2, 2, 1, 1, '2', '2']),
      ],
      2,
      [2, 1, 2, 1],
    ],
    [
      [
        createIteratorFixture([1, 1, 2, 2, 1, 1]),
        createIteratorFixture([2, 2, '1', '1', 2, 2]),
      ],
      2,
      [2, 2],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 1]),
        createIteratorFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createIteratorFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      2,
      [1, 1, 5, 5],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 1]),
        createIteratorFixture([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        createIteratorFixture([5, 5, 5, 5, 5, 1, 5, 5, 1]),
      ],
      3,
      [1, 1],
    ],
    [
      [
        createIteratorFixture([1, 1, 1, 1, 'a']),
        createIteratorFixture([1, 2, 3, 4, 5, 'a', 2, 3, 4, 5]),
        createIteratorFixture([5, 5, 5, 5, 5, 'a', 5, 5, 1]),
      ],
      2,
      ['a', 1, 5, 5],
    ],
    [
      [
        createIteratorFixture(['l', 'l', 'm', 'n', 'p', 'q', 'q', 'r']),
        createIteratorFixture(['l', 'm', 'm', 'p', 'q', 'r', 'r', 'r', 'r']),
      ],
      2,
      ['l', 'm', 'p', 'q', 'r'],
    ],
    [
      [
        createIteratorFixture([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
        createIteratorFixture([4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]),
      ],
      2,
      [4, 4, 5, 5, 6, 6],
    ],
    [
      [
        createIteratorFixture(['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd']),
        createIteratorFixture(['b', 'b', 'c', 'c', 'c', 'd', 'd', 'e']),
      ],
      2,
      ['b', 'b', 'c', 'd', 'd'],
    ],
    [
      [
        createIteratorFixture([1, 2]),
        createIteratorFixture([1]),
      ],
      1,
      [1, 2],
    ],
    [
      [
        createIteratorFixture([1, 2]),
        createIteratorFixture([1, 1]),
      ],
      1,
      [1, 1, 2],
    ],
    [
      [
        createIteratorFixture([1, 1]),
        createIteratorFixture([1, 1, 1, 2]),
      ],
      1,
      [1, 1, 1, 2],
    ],
    [
      [
        createIteratorFixture([1, 1, 3, 5]),
        createIteratorFixture([1, 2, 4, 5]),
      ],
      1,
      [1, 1, 2, 3, 4, 5],
    ],
    [
      [
        createIteratorFixture([1, 1, 4, 7]),
        createIteratorFixture([1, 2, 5, 7]),
        createIteratorFixture([1, 3, 6, 8]),
      ],
      1,
      [1, 1, 2, 3, 4, 5, 6, 7, 8],
    ],
  ];
}

function dataProviderForStrings(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        '',
      ],
      1,
      [],
    ],
    [
      [
        '',
      ],
      2,
      [],
    ],
    [
      [
        '',
        '',
      ],
      1,
      [],
    ],
    [
      [
        '',
        '',
      ],
      2,
      [],
    ],
    [
      [
        '',
        '',
      ],
      3,
      [],
    ],
    [
      [
        '12345',
        '12345',
      ],
      2,
      ['1', '2', '3', '4', '5'],
    ],
    [
      [
        '11111',
        '123456',
        '1555555',
      ],
      2,
      ['1', '5'],
    ],
    [
      [
        '11111',
        '123456',
        '1555555',
      ],
      3,
      ['1'],
    ],
    [
      [
        '12345',
        '12ab',
        '123c',
        '14de',
      ],
      1,
      ['1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e'],
    ],
    [
      [
        '12345',
        '12ab',
        '123c',
        '14de',
      ],
      2,
      ['1', '2', '3', '4'],
    ],
    [
      [
        '12345',
        '12ab',
        '123c',
        '14de',
      ],
      3,
      ['1', '2'],
    ],
    [
      [
        '12345',
        '12ab',
        '123c',
        '14de',
      ],
      4,
      ['1'],
    ],
    [
      [
        '12345',
        '12ab',
        '123c',
        '14de',
      ],
      5,
      [],
    ],
    // multisets:
    [
      [
        '112',
        '223',
      ],
      2,
      ['2'],
    ],
    [
      [
        '1113',
        '112',
      ],
      2,
      ['1', '1'],
    ],
    [
      [
        '1124',
        '11123',
      ],
      2,
      ['1', '1', '2'],
    ],
    [
      [
        '112211',
        '221122',
      ],
      2,
      ['2', '1', '2', '1'],
    ],
    [
      [
        '11111',
        '1234512345',
        '555551551',
      ],
      2,
      ['1', '1', '5', '5'],
    ],
    [
      [
        '11111',
        '1234512345',
        '555551551',
      ],
      3,
      ['1', '1'],
    ],
    [
      [
        '1111a',
        '12345a2345',
        '55555a551',
      ],
      2,
      ['a', '1', '5', '5'],
    ],
    [
      [
        'llmnpqqr',
        'lmmpqrrrr',
      ],
      2,
      ['l', 'm', 'p', 'q', 'r'],
    ],
    [
      [
        '112233445566',
        '445566778899',
      ],
      2,
      ['4', '4', '5', '5', '6', '6'],
    ],
    [
      [
        'aabbbcdd',
        'bbccdde',
      ],
      2,
      ['b', 'b', 'c', 'd', 'd'],
    ],
    [
      [
        '12',
        '1',
      ],
      1,
      ['1', '2'],
    ],
    [
      [
        '12',
        '11',
      ],
      1,
      ['1', '1', '2'],
    ],
    [
      [
        '11',
        '1112',
      ],
      1,
      ['1', '1', '1', '2'],
    ],
    [
      [
        '1135',
        '1245',
      ],
      1,
      ['1', '1', '2', '3', '4', '5'],
    ],
    [
      [
        '1147',
        '1257',
        '1368',
      ],
      1,
      ['1', '1', '2', '3', '4', '5', '6', '7', '8'],
    ],
  ];
}

function dataProviderForSets(): Array<unknown> {
  return [
    // sets:
    [
      [],
      1,
      [],
    ],
    [
      [],
      2,
      [],
    ],
    [
      [
        new Set([]),
      ],
      1,
      [],
    ],
    [
      [
        new Set([]),
      ],
      2,
      [],
    ],
    [
      [
        new Set([]),
        new Set([]),
      ],
      1,
      [],
    ],
    [
      [
        new Set([]),
        new Set([]),
      ],
      2,
      [],
    ],
    [
      [
        new Set([]),
        new Set([]),
      ],
      3,
      [],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 3, 4, 5]),
      ],
      2,
      [1, 2, 3, 4, 5],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, '3', '4', 5]),
      ],
      2,
      [1, 2, 5],
    ],
    [
      [
        new Set(['1', '2', 3, 4, 5]),
        new Set(['1', 2, '3', '4', 5]),
      ],
      2,
      ['1', 5],
    ],
    [
      [
        new Set([1, 1, 1, 1, 1]),
        new Set([1, 2, 3, 4, 5, 6]),
        new Set([1, 5, 5, 5, 5, 5, 5]),
      ],
      2,
      [1, 5],
    ],
    [
      [
        new Set([1, true, '1', 1.0, '1.0']),
        new Set([true, true, true, true, true, true]),
      ],
      2,
      [true],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        new Set(['1', '2', 3, 4, 5, 6, 7, '8', '9']),
        new Set([1, 3, 5, 7, 9, 11]),
      ],
      2,
      [1, 3, 4, 5, 6, 7, 9],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 10, 11]),
        new Set([1, 2, 3, 12]),
        new Set([1, 4, 13, 14]),
      ],
      1,
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 10, 11]),
        new Set([1, 2, 3, 12]),
        new Set([1, 4, 13, 14]),
      ],
      2,
      [1, 2, 3, 4],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 10, 11]),
        new Set([1, 2, 3, 12]),
        new Set([1, 4, 13, 14]),
      ],
      3,
      [1, 2],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 10, 11]),
        new Set([1, 2, 3, 12]),
        new Set([1, 4, 13, 14]),
      ],
      4,
      [1],
    ],
    [
      [
        new Set([1, 2, 3, 4, 5]),
        new Set([1, 2, 10, 11]),
        new Set([1, 2, 3, 12]),
        new Set([1, 4, 13, 14]),
      ],
      5,
      [],
    ],
    [
      [
        new Set(['c++', 'java', 'c#', 'go', 'haskell']),
        new Set(['php', 'python', 'javascript', 'perl']),
        new Set(['c++', 'java', 'c#', 'go', 'php']),
      ],
      2,
      ['c++', 'java', 'c#', 'go', 'php'],
    ],
  ];
}

function dataProviderForMixed(): Array<unknown> {
  return [
    [
      [
        [],
        createGeneratorFixture([]),
        createIterableFixture([]),
        createIteratorFixture([]),
      ],
      1,
      [],
    ],
    [
      [
        [],
        createGeneratorFixture([]),
        createIterableFixture([]),
        createIteratorFixture([]),
      ],
      2,
      [],
    ],
    [
      [
        [],
        createGeneratorFixture([]),
        createIterableFixture([]),
        createIteratorFixture([]),
      ],
      3,
      [],
    ],
    [
      [
        [],
        createGeneratorFixture([]),
        createIterableFixture([]),
        createIteratorFixture([]),
      ],
      4,
      [],
    ],
    [
      [
        [],
        createGeneratorFixture([]),
        createIterableFixture([]),
        createIteratorFixture([]),
      ],
      5,
      [],
    ],
    [
      [
        [1, 5],
        createGeneratorFixture([2, 6]),
        createIterableFixture([3, 7]),
        createIteratorFixture([4]),
      ],
      1,
      [1, 2, 3, 4, 5, 6, 7],
    ],
    [
      [
        [1, 5],
        createGeneratorFixture([2, 6]),
        createIterableFixture([3, 7]),
        createIteratorFixture([4]),
      ],
      2,
      [],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        createGeneratorFixture(['1', '1.0', 1, 1.0, 'a', 'b', 'c']),
        createIterableFixture([1, '1', 1, '1']),
        createIteratorFixture([1, 1]),
      ],
      2,
      [1, '1', 1],
    ],
    [
      [
        [1, 1, 1, 1, 1],
        createGeneratorFixture(['1', '1.0', 1, 1.0, 'a', 'b', 'c']),
        createIterableFixture([1, '1', 1, '1']),
        createIteratorFixture([1, 1]),
      ],
      3,
      [1, 1],
    ],
  ];
}
