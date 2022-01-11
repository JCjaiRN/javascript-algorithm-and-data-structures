// Only change code below this line
function urlSlug(title) {
 return title .toLowerCase()
 .trim()
 .split(/\s+/)
 .join("-");

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");