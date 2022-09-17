/**
 * 
 * @param promise 
 * @param promise 
 * @returns 
 */
// Promise 的泛型T代表promise变成成功态之后resolve的值， resolve(value)
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }

      return [err, undefined]
    })

}

export default to