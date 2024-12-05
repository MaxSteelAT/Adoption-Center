document.addEventListener("DOMContentLoaded", () => {
    // Selecciona los elementos interactivos
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");
    const userMenuButton = document.getElementById("user-menu-button");
    const userMenu = userMenuButton?.nextElementSibling;

    // Controla el menú móvil
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", () => {
        const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
        mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Controla el menú de usuario
    if (userMenuButton && userMenu) {
      userMenuButton.addEventListener("click", () => {
        const isExpanded = userMenuButton.getAttribute("aria-expanded") === "true";
        userMenuButton.setAttribute("aria-expanded", !isExpanded);
        userMenu.classList.toggle("hidden");
      });

      // Opcional: Cierra el menú al hacer clic fuera de él
      document.addEventListener("click", (event) => {
        if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
          userMenu.classList.add("hidden");
          userMenuButton.setAttribute("aria-expanded", "false");
        }
      });
    }
  });
