//These variables store the number of blocks for each color.
var redCount = 0;
var greenCount = 0;
var blueCount = 0;
var yellowCount = 0;

$(document).ready(function() {
  //Add event handlers for each button, adding a corresponding colored block to the page
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
  //Add an event handler that removes blocks when clicked
  $('#blockBox').on('click', '.block', removeBlock);
  refreshCount();
});

/*
 * Updates the text value of spans on the page tallying the blocks of each color.
 *@function refreshCount
 *@return
*/
function refreshCount () {
  $('#redCount').text(redCount);
  $('#greenCount').text(greenCount);
  $('#blueCount').text(blueCount);
  $('#yellowCount').text(yellowCount);
}

/*
 *Adds a div to the page with a class of block, a color class, and a data.color value
 *Updates the block counter values on the page via the refreshCount function.
 *@function addBlock
 *@param {string} color A string denoting the color of the block.
 *@return
*/
function addBlock(color) {
  $('#blockBox').append(createBlock(color));
  var colorBlock = $('#blockBox').children().last();
  colorBlock.data("blockColor", color);
  window[color+"Count"]++;
  refreshCount();
}

/*
 *Removes a colorBlock div from the page
 *Updates the block counter values on the page via the refreshCount function.
 *@function removeBlock
 *@return
*/
function removeBlock () {
  var blockColor = $(this).data("blockColor");
  window[blockColor + "Count"]--;
  $(this).remove();
  refreshCount();
}

/*
 *Creates a string representing a colorBlock div.
 *@function createBlock
 *@param {string} color A string denoting the color of the block.
 *@return {string}      A string containing a div element with classes of {color} and "block"
*/
function createBlock(color) {
  return "<div class=\"block " + color + "\"></div>";
}
