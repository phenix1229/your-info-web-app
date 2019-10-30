function separateDate(birthDate) {
    birthDay = Number(birthDate.substring(2, 4));
    birthMonth = Number(birthDate.substring(0, 2))
    birthYear = Number(birthDate.substring(4));

    return birthDay, birthMonth, birthYear;
}

function age(birthDate){
  separateDate(birthDate);
  
  today = new Date();

  if (today.getMonth() +1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) { age =    today.getFullYear() - birthYear - 1;
  } else{
    age = (today.getFullYear() - birthYear);
  }
  return 'You are ' + age + ' years old.';
}

function zodiacSign(birthDate) {
  separateDate(birthDate);

  sign = 'Your Zodiac sign is ';
  
  if (birthMonth === 3 && birthDay >= 21 || birthMonth === 4 && birthDay <= 20) {
    return sign + 'Aries.';
  } else if (birthMonth === 4 && birthDay >= 21 || birthMonth === 5 && birthDay <= 20) {
    return sign + 'Taurus.';
  } else if (birthMonth === 5 && birthDay >= 21 || birthMonth === 6 && birthDay <= 20) {
    return sign + 'Gemini.';
  } else if (birthMonth === 6 && birthDay >= 21 || birthMonth === 7 && birthDay <= 22) {
    return sign + 'Cancer.';
  } else if (birthMonth === 7 && birthDay >= 23 || birthMonth === 8 && birthDay <= 22) {
    return sign + 'Leo.';
  } else if (birthMonth === 8 && birthDay >= 23 || birthMonth === 9 && birthDay <= 22) {
    return sign + 'Virgo.';
  } else if (birthMonth === 9 && birthDay >= 23 || birthMonth === 10 && birthDay <= 22) {
    return sign + 'Libra.';
  } else if (birthMonth === 10 && birthDay >= 23 || birthMonth === 11 && birthDay <= 22) {
    return sign + 'Scorpio.';
  } else if (birthMonth === 11 && birthDay >= 23 || birthMonth === 12 && birthDay <= 21) {
    return sign + 'Sagittarius.';
  } else if (birthMonth === 12 && birthDay >= 22 || birthMonth === 1 && birthDay <= 19) {
    return sign + 'Capricorn.';
  } else if (birthMonth === 1 && birthDay >= 20 || birthMonth === 2 && birthDay <= 19) {
    return sign + 'Aquarius.';
  } else {
    return sign + 'Pisces.';
  }
}

function birthStone(birthDate) {
  separateDate(birthDate);
  
  if (birthMonth === 1) {
        stone = 'Garnet.';
    } else if (birthMonth === 2) {
        stone = 'Amethyst.';
    } else if (birthMonth === 3) {
        stone = 'Aquamarine.';
    } else if (birthMonth === 4) {
        stone = 'Diamond.';
    } else if (birthMonth === 5) {
        stone = 'Emerald.';
    } else if (birthMonth === 6) {
        stone = 'Alexandrite.';
    } else if (birthMonth === 7) {
        stone = 'Ruby.';
    } else if (birthMonth === 8) {
        stone = 'Peridot.';
    } else if (birthMonth === 9) {
        stone = 'Sapphire.';
    } else if (birthMonth === 10) {
        stone = 'Pink Tourmaline.';
    } else if (birthMonth === 11) {
        stone = 'Citrine.';
    } else {
        stone = 'Blue Topaz.';
    }
  reply = 'Your birthstone is ' + stone;
  return reply; 
}


const readline =
require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("What is your birth date (mmddyyyy)?\n",
  (birthDate) => {
    readline.setPrompt("What would you like to know?\n1 = Age\n2 = Zodiac sign\n3 = Birthstone\n4 = All of the above\nPress any other key and 'Enter' to exit\n");
    readline.prompt();
    readline.on('line', (userInput) => {
      if (userInput.trim() == "1"){
        console.log(age(birthDate));
      } else if (userInput.trim() == "2"){
        console.log(zodiacSign(birthDate));
      } else if (userInput.trim() == "3"){
        console.log(birthStone(birthDate));
      } else if(userInput.trim() == '4'){
        console.log(age(birthDate), zodiacSign(birthDate), birthStone(birthDate));
      } else {
        console.log("Goodbye")}
      readline.close()})
  })

  function yourInfo(optionNum){
    if (optionNum === "1"){
      return age(birthDate);
    } else if (optionNum === "2"){
      return zodiacSign(birthDate);
    } else if (optionNum === "3"){
      return birthStone(birthDate);
    } else if(optionNum === '4'){
      return `${age(birthDate)}\n ${zodiacSign(birthDate)}\n ${birthStone(birthDate)}`;
    } else {
      return "Goodbye"}
  }

  module.exports = {
    separateDate,
    age,
    zodiacSign,
    birthStone,
    yourInfo
  }