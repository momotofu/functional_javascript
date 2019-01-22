const japanese = ['bochi', 'yakumo', 'shinshi', 'mushi', 'hottori']

const addJapanese = (list, ...words) => {
  return [].concat(list, ...words)
}

module.exports = { japanese, addJapanese }
