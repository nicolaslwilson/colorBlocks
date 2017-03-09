//These variables store the number of blocks for each color.
  var tally = {
  red: 0,
  green: 0,
  blue: 0,
  yellow: 0
};

$(document).ready(function() {
  //Add event handler, adding a corresponding colored block to the button clicked
  $('.button').on('click', addBlock);

  //Add an event handler that removes blocks when clicked
  $('#blockBox').on('click', '.block', removeBlock);

  //Initialize the blockCounts on page load.
  refreshCount();
});

/*
 * Updates the text value of spans on the page tallying the blocks of each color.
 *@function refreshCount
 *@return
*/
function refreshCount () {
  $('#redCount').text(tally.red);
  $('#greenCount').text(tally.green);
  $('#blueCount').text(tally.blue);
  $('#yellowCount').text(tally.yellow);
}

/*
 *Adds a div to the page with a class of block, a color class, and a data.color value
 *Updates the block counter values on the page via the refreshCount function.
 *@function addBlock
 *@param {string} color A string denoting the color of the block.
 *@return
*/
function addBlock () {
  //Get color from the button clicked
  var color = $(this).data("color");
  //Append a colorBlock to the div value returned from createBlock
  $('#blockBox').append(createBlock(color));
  //Increase the count for the corresponding color tally and update the page
  tally[color]++;
  refreshCount();
}

/*
 *Removes a colorBlock div from the page
 *Updates the block counter values on the page via the refreshCount function.
 *@function removeBlock
 *@return
*/
function removeBlock () {
  //Retrieve color property from the block data and decrement the corresponding tally
  var color = $(this).data("color");
  tally[color]--;
  //Remove the clicked block
  $(this).remove();
  //Update the tally on the page
  refreshCount();
}

/*
 *Creates a string representing a colorBlock div.
 *@function createBlock
 *@param {string} color A string denoting the color of the block.
 *@return {string}      A string containing a div element with classes of {color} and "block",
                        and a data-color property also assigned the value {color}
*/
function createBlock(color) {
  return "<div class=\"block " + color + "\" data-color=\"" + color + "\"></div>";
}
