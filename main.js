//ideal settings to see maximum effect are fillArray:0.3/0.6 checkRed/checkBlue:3
//if use without randomizer then will clump to one side

$(document).ready(function () {
  arrayToDiv(fillArray(arrayWithinArray(50)));
});

$('.click').on('click', function() {
  delDiv();
  arrayToDiv(fillArray(arrayWithinArray(50)));
  console.log('done');
});

$('.next').on('click', function() {
  moveOut(z);
  delDiv();
  arrayToDiv(z);
  console.log('done');
})

$('.multi').on('click', function () {
  var i =0;
  while (i<1000) {
    moveOut(z);
    console.log('running');
    i = i+1;
  };
  console.log('done');
  delDiv();
  arrayToDiv(z);
})
//by changing the values in the above code one can change how big one wants
//the board to be

function newBoard(x) {
  let z = []
  for (let i=0;i<x;i++) {
    z.push(new Array(x))
    for (let j=0;j<x;j++) {
      let die = Math.random()
      if (die<0.45) {
        z[i][j] = "red"
      }
      else if (die<0.9) {
        z[i][j] = "blue"
      }
      else {
        z[i][j] = "white"
      }
    }
  }
  return z
};

function randomize(z) {
  let count = z.length
  while (count > 0) {
    let die = Math.floor(Math.random() * count);
    [z[count - 1], z[die]] = [z[die], z[count - 1]];
    count = count-1
  }
  return z
}

function newPath(x) {
  let out = []
  for (let h=0;h<3;h++) {
    let inside1 = []
    for (let i=0;i<x;i++) {
      for (let j=0;j<x;j++) {
        let inside2 = []
        inside2.push(i)
        inside2.push(j)
        inside1.push(inside2)
      }
    }
    inside1 = randomize(inside1)
    out.push(inside1)
  }
  return out
}
// here x is the path and z is the board
function traverse(x,z) {
  let count = x.length
  let die = Math.floor(Math.random() * count);
  for (i=0;i<x[die].length;i++) {
    if(){

    }
    else if(){

    }
    else {

    }
  }
}

// ^^^these three work

//by changing the values in the function below you can set the relative chance of
//spawning any of the three values
// function fillArray(z) {
//   var length = z.length;
//   for (i=0;i<length;i++) {
//     for (j=0;j<length;j++) {
//       var die = Math.random();
//       if (die<0.45) {
//         z[i][j] = "red";
//       }
//       else if (die<0.9) {
//         z[i][j] = "blue";
//       }
//       else {
//         z[i][j] = "white";
//       }
//     }
//   }
//   return z;
// };

function arrayToDiv(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        $('main').append('<div class="box x:'+i+' y:'+j+' red"></div>');
      }
      else if (z[i][j] == 'blue') {
        $('main').append('<div class="box x:'+i+' y:'+j+' blue"></div>');
      }
      else {
        $('main').append('<div class="box x:'+i+' y:'+j+' white"></div>');
      }
    }
  }
};

function delDiv() {
  $('main').find('*').remove();
};




// by changing the values in the code below one can change how reactive each piece is

function checkRed(z,i,j) {
  var count = 0;
  try {
    count = (z[i][j+1] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i][j-1] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i+1][j] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i-1][j] == 'red')? count+1 : count;
  } catch (e) {
  }
  return ((count ==1 )||(count == 2)||(count == 3))? true : false;
};

function checkBlue(z,i,j) {
  var count = 0;
  try {
    count = (z[i][j+1] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i][j-1] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i+1][j] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i-1][j] == 'blue')? count+1 : count;
  } catch (e) {
  }
  // console.log(count);
  return ((count ==1 )||(count == 2)||(count == 3))? true : false;
};

function getWhite(z) {
  let z1 = []
  for (let i=0;i<z.length;i++) {
    for (let j=0;j<z.length;j++) {
      if (z[i][j] == 'white') {
        z1.push({
          'x':i,
          'y':j
        })
      }
    }
  }
  return z1
}

function randomize(z) {
  let count = z.length
  while (count > 0) {
    let die = Math.floor(Math.random() * count);
    [z[count - 1], z[die]] = [z[die], z[count - 1]];
    count = count-1
  }
  return z
}





// this works ^^^^

// function checkWhite(z,i,j) {
//   var dir = null;
//   try {
//     dir = (z[i][j+1] == 'white')? i+":"+(j+1) : dir;
//   } catch(e) {
//   }
//   try {
//     dir = (z[i][j-1] == 'white')? i+":"+(j-1) : dir;
//   } catch(e) {
//   }
//   try {
//     dir = (z[i+1][j] == 'white')? (i+1)+":"+j : dir;
//   } catch(e) {
//   }
//   try {
//     dir = (z[i-1][j] == 'white')? (i-1)+":"+j : dir;
//   } catch(e) {
//   }
//   return (dir == null)? false : true;
// };
//
// function switchWhiteRan(z,i,j) {
//   var die = Math.random();
//   if (die < 0.25) {
//     switchWhite1(z,i,j);
//   }
//   else if (die < 0.5) {
//     switchWhite2(z,i,j)
//   }
//   else if (die < 0.75) {
//     switchWhite3(z,i,j)
//   }
//   else {
//     switchWhite4(z,i,j)
//   }
//
// }

// function switchWhite1(z,i,j) {
//   try {
//     if (z[i][j+1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j+1];
//       var val2 = z[i][j];
//       z[i][j+1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j-1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j-1];
//       var val2 = z[i][j];
//       z[i][j-1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i+1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i+1][j];
//       var val2 = z[i][j];
//       z[i+1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i-1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i-1][j];
//       var val2 = z[i][j];
//       z[i-1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//
// };
//
// function switchWhite2(z,i,j) {
//   try {
//     if (z[i-1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i-1][j];
//       var val2 = z[i][j];
//       z[i-1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j+1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j+1];
//       var val2 = z[i][j];
//       z[i][j+1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j-1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j-1];
//       var val2 = z[i][j];
//       z[i][j-1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i+1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i+1][j];
//       var val2 = z[i][j];
//       z[i+1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//
// };
//
// function switchWhite3(z,i,j) {
//   try {
//     if (z[i+1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i+1][j];
//       var val2 = z[i][j];
//       z[i+1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i-1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i-1][j];
//       var val2 = z[i][j];
//       z[i-1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j+1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j+1];
//       var val2 = z[i][j];
//       z[i][j+1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j-1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j-1];
//       var val2 = z[i][j];
//       z[i][j-1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
// };
//
// function switchWhite4(z,i,j) {
//   try {
//     if (z[i][j-1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j-1];
//       var val2 = z[i][j];
//       z[i][j-1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i+1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i+1][j];
//       var val2 = z[i][j];
//       z[i+1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i-1][j] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i-1][j];
//       var val2 = z[i][j];
//       z[i-1][j] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//   try {
//     if (z[i][j+1] == 'white') {
//       // console.log(i+":"+j);
//       var val1 = z[i][j+1];
//       var val2 = z[i][j];
//       z[i][j+1] = val2;
//       z[i][j] = val1;
//     }
//   } catch(e) {
//   }
//
// };

//maybe in the future come back and take a look at this, make it so that when count != 3
// the code randomly selects which one of the white matches it moves to.

// function moveOutRan(z) {
//   var die = Math.random();
//   if (die < 0.25) {
//     moveOut1(z);
//   }
//   else if (die < 0.5) {
//     moveOut2(z);
//   }
//   else if (die < 0.75) {
//     moveOut3(z);
//   }
//   else {
//     moveOut4(z);
//   }
// }
//
function moveOut(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          let move = randomize(getWhite(z))
          let swap = z[i][j]
          z[i][j] = z[move[0].x][move[0].y]
          z[move[0].x][move[0].y] = swap
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          let move = randomize(getWhite(z))
          let swap = z[i][j]
          z[i][j] = z[move[0].x][move[0].y]
          z[move[0].x][move[0].y] = swap
        }
      }
    }
  }
};

// function moveOut2(z) {
//   var length = z.length;
//   for (i=length-1;i>=0;i--) {
//     for (j=length-1;j>=0;j--) {
//       if (z[i][j] == 'red') {
//         if (checkBlue(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//       else if (z[i][j] == 'blue') {
//         if (checkRed(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//     }
//   }
// };
//
// function moveOut3(z) {
//   var length = z.length;
//   for (i=0;i<length;i++) {
//     for (j=length-1;j>=0;j--) {
//       if (z[i][j] == 'red') {
//         if (checkBlue(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//       else if (z[i][j] == 'blue') {
//         if (checkRed(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//     }
//   }
// };
//
// function moveOut4(z) {
//   var length = z.length;
//   for (i=length-1;i>=0;i--) {
//     for (j=0;j<length;j++) {
//       if (z[i][j] == 'red') {
//         if (checkBlue(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//       else if (z[i][j] == 'blue') {
//         if (checkRed(z,i,j)) {
//           if (checkWhite(z,i,j)) {
//             switchWhiteRan(z,i,j);
//           }
//         }
//       }
//     }
//   }
// };
