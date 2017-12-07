// target sections
let section = document.querySelector('article');
// target h1 tag
let header = document.getElementById('page-title');
// target input field
let inputArea = document.getElementById('keypress-input');
// target output field
let output = document.getElementById('output-target');
// target guinea pig div
let pig = document.getElementById('guinea-pig');

// target buttons
let color = document.getElementById('add-color');
let large = document.getElementById('make-large');
let border = document.getElementById('add-border');
let round = document.getElementById('add-rounding');

// when any section is clicked the output target text should be "You clicked on the {text of the section} section"
section.addEventListener("click", function() {
  let txtOfSection = event.target.innerHTML;
  output.innerHTML = (`You clicked on the ${txtOfSection} section`);
});

// when the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
header.addEventListener("mouseenter", function() {
  output.innerHTML = ('You moved your mouse over the header.');
});

// when the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
header.addEventListener("mouseleave", function() {
  output.innerHTML = ('You left me!!');
});


// when you type characters into the input field, the output element should mirror the text in the input field.
inputArea.addEventListener("input", function() {
  output.innerHTML = inputArea.value;
});

// when you click the "Add color" button,s the guinea-pig element's text color should change to blue.
color.addEventListener("click", function() {
pig.style.color = "blue";
});

// when you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
large.addEventListener("click", function() {
  pig.style.fontSize = "40px";
});

// when you click the "Capture it" button, the guinea-pig element should have a border added to it.
border.addEventListener("click", function() {
  pig.style.border = "4px solid";
});

// when you click the "Rounded" button, the guinea-pig element's border should become rounded.
round.addEventListener("click", function() {
  pig.style.borderRadius = "30px";
});

// the first section's text should be bold.
// the last section's text should be bold and italicized.
// make the buttons stop appearing next to each other as inline elements. Change them into block elements.
