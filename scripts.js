function CreateMatchup(numPlayers, baseGame, expansion1, expansion2, expansion3) {
  //Creating the list of elligible characters based on user suggestions
  var characters = new Array();
  if (baseGame) {
    characters.Push("Captain Hook");
    characters.Push("Jafar");
    characters.Push("Maleficent");
    characters.Push("Prince John");
    characters.Push("Queen of Hearts");
    characters.Push("Ursula");
  }
  if (expansion1) {
    characters.Push("Dr Facielier");
    characters.Push("Evil Queen");
    characters.Push("Hades");
  }
  if (expansion2) {
    characters.Push("Ratigan");
    characters.Push("Scar");
    characters.Push("Yzma");
  }
  if (expansion3) {
    characters.Push("Cruella de Vil");
    characters.Push("Mother Gothel");
    characters.Push("Pete");
  }

    //verifying that inputs were valid
  if (numPlayers > characters.length) {
    alert("More players than eligible characters");
  }

  characters = shuffle(characters);

  for(int i = 0; i < numPlayer; i++) {
    alert(characters[i]);
  }
}

//Using the Fisher-Yates shuffle Alg, found on github/stackOverflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
