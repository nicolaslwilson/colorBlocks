$(document).ready(function() {
  $('#redButton').on('click', function() {
    addBlock("red");
  });
  $('#greenButton').on('click', function() {
    addBlock("green");
  });
  $('#blueButton').on('click', function() {
    addBlock("blue");
  });
  $('#yellowButton').on('click', function() {
    addBlock("yellow");
  });
});

function addBlock(color) {
  $('#blockBox').append(createBlock(color));
}

function createBlock(color) {
  return "<div class=\"" + color + " block\"></div>";
}
