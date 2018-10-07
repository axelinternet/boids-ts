declare module 'gl-vec2' {
  export type vec2 = Float32Array | number[]
  export type vec3 = Float32Array | number[]
  export type mat2 = Float32Array | number[]
  export type mat2d = Float32Array | number[]
  export type mat3 = Float32Array | number[]
  export type mat4 = Float32Array | number[]

  /**
   * Creates a new, empty vec2
   *
   * @returns a new 2D vector
   */
  export function create(): vec2

  /**
   * Adds two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function add(out: vec2, a: vec2, b: vec2): vec2

  /**
   * Set the components of a vec2 to the given values
   *
   * @param out the receiving vector
   * @param x X component
   * @param y Y component
   * @returns out
   */
  export function set(out: vec2, x: number, y: number): vec2

  /**
   * Copy the values from one vec2 to another
   *
   * @param out the receiving vector
   * @param a the source vector
   * @returns out
   */
  export function copy(out: vec2, a: vec2 | number[]): vec2

  /**
   * Normalize a vec2
   *
   * @param out the receiving vector
   * @param a vector to normalize
   * @returns out
   */
  export function normalize(out: vec2, a: vec2 | number[]): vec2

  /**
   * Multiplies two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function multiply(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Multiplies two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function mul(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Creates a new vec2 initialized with values from an existing vector
   *
   * @param a a vector to clone
   * @returns a new 2D vector
   */
  export function clone(a: vec2 | number[]): vec2

  /**
   * Creates a new vec2 initialized with the given values
   *
   * @param x X component
   * @param y Y component
   * @returns a new 2D vector
   */
  export function fromValues(x: number, y: number): vec2

  /**
   * Subtracts vector b from vector a
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function subtract(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Subtracts vector b from vector a
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function sub(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Multiplies two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function mul(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Divides two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function divide(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Divides two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function div(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Math.ceil the components of a vec2
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a vector to ceil
   * @returns {vec2} out
   */
  export function ceil(out: vec2, a: vec2 | number[]): vec2

  /**
   * Math.floor the components of a vec2
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a vector to floor
   * @returns {vec2} out
   */
  export function floor(out: vec2, a: vec2 | number[]): vec2

  /**
   * Returns the minimum of two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function min(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Returns the maximum of two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function max(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Math.round the components of a vec2
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a vector to round
   * @returns {vec2} out
   */
  export function round(out: vec2, a: vec2 | number[]): vec2

  /**
   * Scales a vec2 by a scalar number
   *
   * @param out the receiving vector
   * @param a the vector to scale
   * @param b amount to scale the vector by
   * @returns out
   */
  export function scale(out: vec2, a: vec2 | number[], b: number): vec2

  /**
   * Adds two vec2's after scaling the second operand by a scalar value
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @param scale the amount to scale b by before adding
   * @returns out
   */
  export function scaleAndAdd(
    out: vec2,
    a: vec2 | number[],
    b: vec2 | number[],
    scale: number,
  ): vec2

  /**
   * Calculates the euclidian distance between two vec2's
   *
   * @param a the first operand
   * @param b the second operand
   * @returns distance between a and b
   */
  export function distance(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Calculates the euclidian distance between two vec2's
   *
   * @param a the first operand
   * @param b the second operand
   * @returns distance between a and b
   */
  export function dist(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Calculates the squared euclidian distance between two vec2's
   *
   * @param a the first operand
   * @param b the second operand
   * @returns squared distance between a and b
   */
  export function squaredDistance(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Calculates the squared euclidian distance between two vec2's
   *
   * @param a the first operand
   * @param b the second operand
   * @returns squared distance between a and b
   */
  export function sqrDist(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Calculates the length of a vec2
   *
   * @param a vector to calculate length of
   * @returns length of a
   */
  export function length(a: vec2 | number[]): number

  /**
   * Calculates the length of a vec2
   *
   * @param a vector to calculate length of
   * @returns length of a
   */
  export function len(a: vec2 | number[]): number

  /**
   * Calculates the squared length of a vec2
   *
   * @param a vector to calculate squared length of
   * @returns squared length of a
   */
  export function squaredLength(a: vec2 | number[]): number

  /**
   * Calculates the squared length of a vec2
   *
   * @param a vector to calculate squared length of
   * @returns squared length of a
   */
  export function sqrLen(a: vec2 | number[]): number

  /**
   * Negates the components of a vec2
   *
   * @param out the receiving vector
   * @param a vector to negate
   * @returns out
   */
  export function negate(out: vec2, a: vec2 | number[]): vec2

  /**
   * Returns the inverse of the components of a vec2
   *
   * @param out the receiving vector
   * @param a vector to invert
   * @returns out
   */
  export function inverse(out: vec2, a: vec2 | number[]): vec2

  /**
   * Calculates the dot product of two vec2's
   *
   * @param a the first operand
   * @param b the second operand
   * @returns dot product of a and b
   */
  export function dot(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Computes the cross product of two vec2's
   * Note that the cross product must by definition produce a 3D vector
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @returns out
   */
  export function cross(out: vec3, a: vec2 | number[], b: vec2 | number[]): vec2

  /**
   * Performs a linear interpolation between two vec2's
   *
   * @param out the receiving vector
   * @param a the first operand
   * @param b the second operand
   * @param t interpolation amount between the two inputs
   * @returns out
   */
  export function lerp(out: vec2, a: vec2 | number[], b: vec2 | number[], t: number): vec2

  /**
   * Generates a random unit vector
   *
   * @param out the receiving vector
   * @returns out
   */
  export function random(out: vec2): vec2

  /**
   * Generates a random vector with the given scale
   *
   * @param out the receiving vector
   * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns out
   */
  export function random(out: vec2, scale: number): vec2

  /**
   * Transforms the vec2 with a mat2
   *
   * @param out the receiving vector
   * @param a the vector to transform
   * @param m matrix to transform with
   * @returns out
   */
  export function transformMat2(out: vec2, a: vec2 | number[], m: mat2): vec2

  /**
   * Transforms the vec2 with a mat2d
   *
   * @param out the receiving vector
   * @param a the vector to transform
   * @param m matrix to transform with
   * @returns out
   */
  export function transformMat2d(out: vec2, a: vec2 | number[], m: mat2d): vec2

  /**
   * Transforms the vec2 with a mat3
   * 3rd vector component is implicitly '1'
   *
   * @param out the receiving vector
   * @param a the vector to transform
   * @param m matrix to transform with
   * @returns out
   */
  export function transformMat3(out: vec2, a: vec2 | number[], m: mat3): vec2

  /**
   * Transforms the vec2 with a mat4
   * 3rd vector component is implicitly '0'
   * 4th vector component is implicitly '1'
   *
   * @param out the receiving vector
   * @param a the vector to transform
   * @param m matrix to transform with
   * @returns out
   */
  export function transformMat4(out: vec2, a: vec2 | number[], m: mat4): vec2

  /**
   * Perform some operation over an array of vec2s.
   *
   * @param a the array of vectors to iterate over
   * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
   * @param offset Number of elements to skip at the beginning of the array
   * @param count Number of vec2s to iterate over. If 0 iterates over entire array
   * @param fn Function to call for each vector in the array
   * @param arg additional argument to pass to fn
   * @returns a
   */
  export function forEach(
    a: Float32Array,
    stride: number,
    offset: number,
    count: number,
    fn: (a: vec2 | number[], b: vec2 | number[], arg: any) => void,
    arg: any,
  ): Float32Array

  /**
   * Get the angle between two 2D vectors
   * @param a The first operand
   * @param b The second operand
   * @returns The angle in radians
   */
  export function angle(a: vec2 | number[], b: vec2 | number[]): number

  /**
   * Perform some operation over an array of vec2s.
   *
   * @param a the array of vectors to iterate over
   * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
   * @param offset Number of elements to skip at the beginning of the array
   * @param count Number of vec2s to iterate over. If 0 iterates over entire array
   * @param fn Function to call for each vector in the array
   * @returns a
   */
  export function forEach(
    a: Float32Array,
    stride: number,
    offset: number,
    count: number,
    fn: (a: vec2 | number[], b: vec2 | number[]) => void,
  ): Float32Array

  /**
   * Returns a string representation of a vector
   *
   * @param a vector to represent as a string
   * @returns string representation of the vector
   */
  export function str(a: vec2 | number[]): string

  /**
   * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
   *
   * @param {vec2} a The first vector.
   * @param {vec2} b The second vector.
   * @returns {boolean} True if the vectors are equal, false otherwise.
   */
  export function exactEquals(a: vec2 | number[], b: vec2 | number[]): boolean

  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   *
   * @param {vec2} a The first vector.
   * @param {vec2} b The second vector.
   * @returns {boolean} True if the vectors are equal, false otherwise.
   */
  export function equals(a: vec2 | number[], b: vec2 | number[]): boolean

  /**
   * Limit the magnitude of this vector to the value used for the `max`
   * parameter.
   *
   * @method limit
   * @param  {vec2} out the vector to limit
   * @param  {vec2} a the vector to limit
   * @param  {number} max the maximum magnitude for the vector
   * @returns {vec2} out
   */
  export function limit(out: vec2, a: vec2, max: number): vec2
}
