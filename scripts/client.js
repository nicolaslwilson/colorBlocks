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
  $('body').on('click', '.block', removeBlock);
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
  window[color+"Count"]++;
  refreshCount();

}

function removeBlock () {
  if ($(this).hasClass("red")) {
    redCount--;
  }
  if ($(this).hasClass("green")) {
    greenCount--;
  }
  if ($(this).hasClass("blue")) {
    blueCount--;
  }
  if ($(this).hasClass("yellow")) {
    yellowCount--;
  }
  $(this).remove();
  refreshCount();
}

function createBlock(color) {
  return "<div class=\"block " + color + "\"></div>";
}
