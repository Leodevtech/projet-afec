// Nous avont selectionner les elements du dom (document HTML) button et sidebar

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

// on va afficher et cacher via le bouton

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // empeche le click d'etre propager au document
  sidebar.classList.toggle("active");
});

//gestion du click a l'exterieur de la side bar

document.addEventListener("click", (event) => {
  const isClickInSidebar = sidebar.contains(event.target);
  const isClickOnbutton = menuBtn.contains(event.target);
  if (!isClickInSidebar && !isClickOnbutton) {
    sidebar.classList.remove("active");
  }
});
