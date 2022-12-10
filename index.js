class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstLetter = string.slice(0,1)
    const restOfWord = string.slice(1)
    const array = [firstLetter.toUpperCase(), restOfWord]
    return (array.join(''))
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ']/g, '');
  }
  static titleize(string) {
    const words = string.split(' ')
    words[0] = this.capitalize(words[0])
    const newWords = words.map(word => {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        return word = this.capitalize(word)
        debugger
      }
      else {
        return word
      }
    })//.bind(this)
    return newWords.join(' ')
    //console.log(words)
    //console.log(newWords)
  }
}

