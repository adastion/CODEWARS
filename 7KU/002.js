// function friend(friends) {
//   let newArr = friends.map(item=> item)
//   .filter((item) => {

//     if ( isNaN(item) && item.length <= 4 && !item.includes(' ')) {
//       return item;
//     }
//   });

//   return newArr;
// }

//Refactoring

function friend(friends) {
  return friends
  .map((item) => item)
  .filter((item) => (isNaN(item) && item.length <= 4 && !item.includes(' ') ? item : !item));
}

  console.log(friend(["Ryan", "Kieran", "Mark"])); //["Ryan", "Mark"]
  console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]
  console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]
