let btnColorGenerator = document.querySelector('section button')
let h1 = document.querySelector('h2 span')
let arr = ['a', '0', '1', 'b', '2', '3', 'c', '4', '5', 'd', '6', '7', 'e', '8', '9', 'f']


btnColorGenerator.addEventListener('click', () => {
  let newArr = []
  let count = 0

  while (count < 6) {
    let randomNum = parseInt(Math.random() * 16)
    newArr.push(arr[randomNum])
    count++
  }

  let result = `#${newArr.join().replaceAll(',', '')}`
  document.body.style.backgroundColor = result
  h1.innerHTML = result

})