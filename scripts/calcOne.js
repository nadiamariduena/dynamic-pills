let sectionMiddle = document.querySelector("#middle");
sectionMiddle.style.backgroundImage = "url(./img/linea-white2png.png)";
// sectionMiddle.style.backgroundAttachment = "fixed";
sectionMiddle.style.backgroundSize = "cover";
sectionMiddle.style.backgroundRepeat = "no-Repeat";
sectionMiddle.style.backgroundPosition = "center";
// -----------------------------------------7
//
//
//__1
function openTab(e, tabId) {
  // Here i think i am adding a variable to Two classes at the same time: tabContent, tabLink.

  // __2 without the bbb
  var i, tabContent, tabLink, bbb;
  // this way of declaring it, economize me time and lines, mostly for the loops

  //
  bbb = document.getElementsByClassName("tabsContent-Wrapper");
  // --------------------------
  // __3
  // Hide all tabContent when tab  button is clicked
  tabContent = document.getElementsByClassName("tabContent");
  //
  //
  //__4
  // create a loop to check on each of them
  // the action below is going to make that the box hide when it turns false. By origin the content is hidden inside the css, but here is where you tell it to hide when you click on another button with another content.
  //
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].style.backgroundColor = "transparent";
  }
  //
  //
  for (i = 0; i < bbb.length; i++) {
    bbb[i].style.backgroundImage = "none";
    // bbb[i].style.backgroundColor = "white";
  }
  //
  //---------------------------
  // Remove active for the tabLinks if its active
  // --------------------------
  //__6
  tabLink = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active", "");
  }
  //
  //
  //---------------------------
  //
  // --------------------------
  //__7
  document.getElementById(tabId).style.display = "block";
  //---------------------------
  // Here i tell that if i am in the box 2 for example, i want the current button highlighted/active.
  // --------------------------
  // e.currentTarget.className += "active";
  //
}
