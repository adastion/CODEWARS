function covfefe(str) {
  str = str.toLowerCase();
  if (!str.includes('coverage')) {
    return (str = str + ' ' + 'covfefe');
  }
  return str.replaceAll('coverage', 'covfefe');
}

// console.log(covfefe('coverage')); //'covfefe'
// console.log(covfefe('coverage coverage')); //'covfefe covfefe'
// console.log(covfefe('nothing')); //'nothing covfefe'
// console.log(covfefe('double space ')); //'double space  covfefe'
// console.log(covfefe('covfefe')); //'covfefe covfefe'
