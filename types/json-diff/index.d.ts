// Type definitions for json-diff 0.7
// Project: https://github.com/andreyvit/json-diff
// Definitions by: Tommy Wong <https://github.com/wchtommy20013/>
//                 Jerryh001 <https://github.com/Jerryh001>
//                 Ruben van Urk <https://github.com/joxy379>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

  export interface DiffOptions {
    verbose?: boolean
    raw?: boolean
    keysOnly?: boolean
    full?: boolean
    sort?: boolean
    outputKeys?: string[]
    outputNewOnly?: boolean
  }
  export interface DiffStringOptions extends DiffOptions {
    color?: boolean
  }

  export interface Diff<T1, T2> {
    [key: string]: { __old: T1[keyof T1]; __new: T2[keyof T2] } | unknown
  }

  export function diff<T1, T2>(
    obj1: T1,
    obj2: T2,
    options?: DiffOptions
  ): Diff<T1, T2> | undefined

  export function diffString<T1, T2>(
    obj1: T1,
    obj2: T2,
    options?: DiffStringOptions
  ): string
