const doc = window.document;

const mainNavEls = {};

mainNavEls.header = doc.querySelector("#nav__main h1");
mainNavEls.itemCont = doc.querySelector("#nav__main ul");
mainNavEls.items = [...mainNavEls.itemCont.children];

const sections = [...doc.querySelectorAll("section")];

mainNavEls.header.textContent = mainNavEls.items.find(item =>
  item.hasAttribute("data-cur")
).textContent;

// #############################################################################################

//                     MAIN

// #############################################################################################

mainNavEls.itemCont.addEventListener("click", mainNav);

function mainNav(e) {
  const clicked = e.target;

  const openMain = () => (clicked.className = "open");

  const closeMain = () => mainNavEls.itemCont.removeAttribute("class");

  const navigate = () => {
    const prevLoc = mainNavEls.items.find(navItem =>
      navItem.hasAttribute("data-cur")
    );
    prevLoc.removeAttribute("data-cur");
    clicked.setAttribute("data-cur", "true");

    const prevSection = sections.find(section => section.hasAttribute("class")),
      nextSection = sections.find(
        section => section.id === clicked.getAttribute("data-sect")
      );

    prevSection.removeAttribute("class");
    nextSection.className = "current";

    mainNavEls.header.textContent = clicked.textContent;

    closeMain();
  };

  if (clicked.hasAttribute("data-sect")) {
    navigate();
    return;
  }

  if (!clicked.hasAttribute("class")) {
    openMain();
  } else {
    closeMain();
  }
}
