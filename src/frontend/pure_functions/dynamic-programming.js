export const input = [1, 8, 7, 6, 4]

const remove = (index, list) => {
  return [ ...list.slice(0, index), ...list.slice(index + 1, list.length) ]
}

const addFunction = (funcString, times) => {
  let output = ''
}

export const findSubsetSum = (N, list, memo = []) => {
  if (N === 0)
    return 1
  else if (N < 0)
    return 0

  let index = 0
  let output = ''

  while (index < list.length) {
    const nextList = remove(index, list)
    const value = list[index]
    const operator = index === list.length - 1 ? '' : '+'

    //memo.push(nextList)
    //console.log('memo: ', memo)
    output += findSubsetSum(N - value, nextList, memo)
    index++
  }

  return output
}
