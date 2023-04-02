import {
  createAsyncGeneratorFixture,
  createAsyncIterableFixture,
  createAsyncIteratorFixture,
  createGeneratorFixture,
  // @ts-ignore
} from '../fixture';
import { AsyncTeeIterator } from '../../src/tools';
import { toAsyncIterator } from "../../src/transform";

describe.each(dataProvider() as Array<[Array<unknown>, boolean]>)(
  "Tools Async Tee Iterator Test",
  (input: Array<unknown>, expected: boolean) => {
    it("", async () => {
      // Given
      const iterator = new AsyncTeeIterator(toAsyncIterator(input), 3);
      const iterables = iterator.getRelatedIterables();

      // When
      for (const iterable of iterables) {
        const current1 = await iterator.current(iterable);
        const current2 = await iterable.current();

        // Then
        expect(current1).toEqual(expected);
        expect(current2).toEqual(expected);
      }
    });
  }
);

function dataProvider(): Array<unknown> {
  return [
    [
      createAsyncGeneratorFixture([]),
      undefined,
    ],
    [
      createGeneratorFixture([undefined]),
      undefined,
    ],
    [
      [null],
      null,
    ],
    [
      createAsyncGeneratorFixture([1]),
      1,
    ],
    [
      createAsyncIterableFixture([1, 2, 3]),
      1,
    ],
    [
      createAsyncIteratorFixture(['a', 'a', 'a']),
      'a'
    ],
  ];
}
