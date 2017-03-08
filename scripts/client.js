$(document).ready(function() {
  $('main').append(createBlock("red"));
  $('main').append(createBlock("blue"));
  $('main').append(createBlock("green"));
  $('main').append(createBlock("yellow"));
});

function createBlock(color) {
  return "<div class=\"" + color + " block\"></div>";
}
