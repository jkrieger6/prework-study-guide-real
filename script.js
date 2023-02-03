var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
<<<<<<< HEAD
for(var x=0; x < topics.length; x++){
}
/*
if (topic === 'HTML'); {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
}else if (topic === "JavaScript") {
=======
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (var x=0; x< topics.length; x++) {
        console.log(topics[x]);
    }
}
for(var x=0; x < topics.length; x++){
}
function selectTopic() {
if (randonmTopic === 'HTML'); {
    console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
}else if (randomTopic === "JavaScript") {
>>>>>>> 0d3959be6ea6727273677baaf28526ce2a5e6aff
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
}
<<<<<<< HEAD
*/
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
}
=======
}
console.log('Here are the topics we learned through Prework');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
>>>>>>> 0d3959be6ea6727273677baaf28526ce2a5e6aff
