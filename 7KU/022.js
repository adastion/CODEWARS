// function order(words){
//   let mainArr = words.split(' ')
//   let res = []
//   for (let el of mainArr) {
//     res.push(el.split('').map((item, i) => !isNaN(item) ? +item : item).filter((item, i) => typeof item === "number" ? i : item))
//   }

//   res.sort((a,b)=> a-b)

//   return res
// }

//   console.log(order('is2 Thi1s T4est 3a')) // 'Thi1s is2 3a T4est');
//   console.log(order('4of Fo1r pe6ople g3ood th5e the2')) // 'Fo1r the2 g3ood 4of th5e pe6ople');
//   console.log(order('')) // '', 'empty input should return empty string');