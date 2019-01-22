export const input = [1, 1, 1, 1, 1, 1, 3, 4, 3, 4, 5, 11, 8, 7, 6, 4]

const remove = (index, list) => {
  return [ ...list.slice(0, index), ...list.slice(index + 1, list.length)]
}

export const findSubsetSum = (N, list) => {
  for (let i = 0; i < list.length; i++) {
    const nextList = remove(i, list)
    const value = list[i]

    if (N === 0)
      return 1
    if (N < 0)
      return 0
    return findSubsetSum(N - value, nextList)
  }
}
