var redCount = 0;
var greenCount = 0;
var blueCount = 0;
var yellowCount = 0;

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
  $('#blockBox').on('click', '.block', removeBlock);
  refreshCount();
});

function refreshCount () {
  $('#redCount').text(redCount);
  $('#greenCount').text(greenCount);
  $('#blueCount').text(blueCount);
  $('#yellowCount').text(yellowCount);
}

function addBlock(color) {
  $('#blockBox').append(createBlock(color));
  var colorBlock = $('#blockBox').children().last();
  colorBlock.data("blockColor", color);
  window[color+"Count"]++;
  refreshCount();
}

function removeBlock () {
  var blockColor = $(this).data("blockColor");
  window[blockColor + "Count"]--;
  $(this).remove();
  refreshCount();
}

function createBlock(color) {
  return "<div class=\"block " + color + "\"></div>";
}
