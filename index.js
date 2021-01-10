function shout (string) { 
  return string.toUpperCase();
}
function whisper (string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(shout(string));
<<<<<<< HEAD
}
function logWhisper(string) {
    console.log(whisper(string));
}
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
=======
>>>>>>> 6a98f3c3003d6763405e1a3b0491a8ca04a437b6
}