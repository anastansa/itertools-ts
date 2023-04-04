import {
  chunkwise,
  chunkwiseOverlap,
  compress,
  dropWhile,
  enumerate,
  filter,
  flatMap,
  flatten,
  groupBy,
  keys,
  limit,
  map,
  pairwise,
  repeat,
  skip,
  slice,
  sort,
  takeWhile,
  values,
  chunkwiseAsync,
  chunkwiseOverlapAsync,
  compressAsync,
  dropWhileAsync,
  enumerateAsync,
  filterAsync,
  flatMapAsync,
  flattenAsync,
  groupByAsync,
  keysAsync,
  limitAsync,
  mapAsync,
  pairwiseAsync,
  repeatAsync,
  skipAsync,
  sliceAsync,
  sortAsync,
  takeWhileAsync,
  valuesAsync,
} from "./single";

import {
  runningTotal,
  runningTotalAsync,
  runningProduct,
  runningProductAsync
} from "./math";

import {
  chain,
  zip,
  zipFilled,
  zipLongest,
  zipEqual,
  chainAsync,
  zipAsync,
  zipFilledAsync,
  zipLongestAsync,
  zipEqualAsync,
} from "./multi";

import {
  distinct,
  intersection,
  partialIntersection,
  symmetricDifference,
  union,
  distinctAsync,
  intersectionAsync,
  partialIntersectionAsync,
  symmetricDifferenceAsync,
  unionAsync,
} from "./set";

import {
  toAverage,
  toCount,
  toMax,
  toMin,
  toMinMax,
  toProduct,
  toSum,
  toValue,
  toFirst,
  toFirstAndLast,
  toLast,
  toAverageAsync,
  toCountAsync,
  toFirstAsync,
  toFirstAndLastAsync,
  toLastAsync,
  toMaxAsync,
  toMinAsync,
  toMinMaxAsync,
  toProductAsync,
  toSumAsync,
  toValueAsync,
} from "./reduce";

import { Stream } from "./stream";

import { AsyncStream } from "./async-stream";

import {
  allMatch,
  allUnique,
  anyMatch,
  isEmpty,
  isAsyncIterable,
  isIterable,
  isIterator,
  isReversed,
  isSorted,
  isString,
  noneMatch,
  same,
  sameCount,
  allMatchAsync,
  allUniqueAsync,
  anyMatchAsync,
  isEmptyAsync,
  isReversedAsync,
  isSortedAsync,
  noneMatchAsync,
  sameAsync,
  sameCountAsync,
} from "./summary";

import {
  tee,
  toArray,
  toAsyncIterable,
  toAsyncIterator,
  toIterable,
  toIterator,
  toMap,
  toSet,
  teeAsync,
  toArrayAsync,
  toMapAsync,
  toSetAsync,
} from "./transform";

import { InvalidArgumentError, LengthError } from "./exceptions";

import {
  AsyncFlatMapper,
  FlatMapper,
  Pair,
  Comparable,
  Comparator,
  RecordKey,
  ZipTuple,
} from "./types";

export const single = {
  chunkwise,
  chunkwiseOverlap,
  compress,
  dropWhile,
  enumerate,
  filter,
  flatMap,
  flatten,
  groupBy,
  keys,
  limit,
  map,
  pairwise,
  repeat,
  skip,
  slice,
  sort,
  takeWhile,
  values,
  chunkwiseAsync,
  chunkwiseOverlapAsync,
  compressAsync,
  dropWhileAsync,
  enumerateAsync,
  filterAsync,
  flatMapAsync,
  flattenAsync,
  groupByAsync,
  keysAsync,
  limitAsync,
  mapAsync,
  pairwiseAsync,
  repeatAsync,
  skipAsync,
  sliceAsync,
  sortAsync,
  takeWhileAsync,
  valuesAsync,
};

export const math = {
  runningTotal,
  runningTotalAsync,
  runningProduct,
  runningProductAsync
};

export const multi = {
  chain,
  zip,
  zipFilled,
  zipLongest,
  zipEqual,
  chainAsync,
  zipAsync,
  zipFilledAsync,
  zipLongestAsync,
  zipEqualAsync,
};

export const set = {
  distinct,
  intersection,
  partialIntersection,
  symmetricDifference,
  union,
  distinctAsync,
  intersectionAsync,
  partialIntersectionAsync,
  symmetricDifferenceAsync,
  unionAsync,
};

export const reduce = {
  toAverage,
  toCount,
  toFirst,
  toFirstAndLast,
  toLast,
  toMax,
  toMin,
  toMinMax,
  toProduct,
  toSum,
  toValue,
  toAverageAsync,
  toCountAsync,
  toFirstAsync,
  toFirstAndLastAsync,
  toLastAsync,
  toMaxAsync,
  toMinAsync,
  toMinMaxAsync,
  toProductAsync,
  toSumAsync,
  toValueAsync,
};

export const summary = {
  allMatch,
  allUnique,
  anyMatch,
  isEmpty,
  isAsyncIterable,
  isIterable,
  isIterator,
  isReversed,
  isSorted,
  isString,
  noneMatch,
  same,
  sameCount,
  allMatchAsync,
  allUniqueAsync,
  anyMatchAsync,
  isEmptyAsync,
  isReversedAsync,
  isSortedAsync,
  noneMatchAsync,
  sameAsync,
  sameCountAsync,
};

export const transform = {
  tee,
  toArray,
  toAsyncIterable,
  toAsyncIterator,
  toIterable,
  toIterator,
  toMap,
  toSet,
  teeAsync,
  toArrayAsync,
  toMapAsync,
  toSetAsync,
};

export { Stream, AsyncStream };

export type {
  AsyncFlatMapper,
  FlatMapper,
  Pair,
  Comparable,
  Comparator,
  RecordKey,
  ZipTuple,
};

export { InvalidArgumentError, LengthError };
