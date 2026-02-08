const Icons = {
  logo: `
    <img class="nav__logo-img" src="javascript/layout/img/logo.svg" alt="Logo tutor" />
  `,
hamburger:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`,
close: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="close"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,

home: `

    <svg class=" icon " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"

      width="24" height="24" viewBox="0 0 24 24" fill="none"

      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>

      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

    </svg>

  `,
  chapters: `

   <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" icon"><path d="M16 5H3"/><path d="M16 12H3"/><path d="M16 19H3"/><path d="M21 5h.01"/><path d="M21 12h.01"/><path d="M21 19h.01"/></svg>

  `,
  summary:`

 <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" icon "><path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/><path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/></svg>


`,
  bulb: `
   <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" icon "><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  `,
 user: `

    <svg aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>

  `,
  contact:`

  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" icon "><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>

  `,
  facebook: `

    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"

      width="24" height="24" viewBox="0 0 24 24" fill="none"

      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>

    </svg>

  `,

  instagram:`<svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,

  github:`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,

  moon:`
  <svg class="icon-moon "  aria-hidden="true" xmlns="http://www.w3.org/2000/svg"

      width="24" height="24" viewBox="0 0 24 24" fill="none"

      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>

    </svg>
`,

sun:`<svg class=" hidden icon-sun " aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"

      width="24" height="24" viewBox="0 0 24 24" fill="none"

      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

      <circle cx="12" cy="12" r="4"/>

      <path d="M12 2v2"/>

      <path d="M12 20v2"/>

      <path d="m4.93 4.93 1.41 1.41"/>

      <path d="m17.66 17.66 1.41 1.41"/>

      <path d="M2 12h2"/>

      <path d="M20 12h2"/>

      <path d="m6.34 17.66-1.41 1.41"/>

      <path d="m19.07 4.93-1.41 1.41"/>

    </svg>

  `,

};

// dados Logo
const logoData = [
  { href: "/", icon: "logo" }
];
function logoTutor({ href, icon }) {
  return `
    <li class="nav__logo-item">
      <a href="${href}" aria-label="Ir para a página inicial">
        ${Icons[icon]}
      </a>
    </li>
  `;
}


function toggleClose({ id }) {
  return `
    <li>
      <button 
        id="toggle" 
        type="button" 
        class="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded="false"
      >
        <span class="icon icon-open">
          ${Icons.hamburger}
        </span>

        <span class="icon icon-close hidden">
          ${Icons.close}
        </span>
      </button>
    </li>
  `;
}
const menuMobileToggle = [{ id: "menu-toggle" }];



const navLinks = [
  { id: "home", href: "index.html", text: "Home", icon: "home" },
  { id: "chapters", href: "/index.html#chapters", text: "Chapters", icon: "chapters" },
  { id: "summary", href: "/index.html#summary", text: "Summary", icon: "summary" },
  { id: "takeaways", href: "/index.html#takeaways", text: "Takeaways", icon: "bulb" },
  { id: "author", href: "/index.html#author", text: "Author", icon: "user" },
  { id: "contato", href:  "/index.html?pagina=contato", text: "Contato", icon: "contact" }
];


function menuItemDesktop({href,icon,text}){
    return `
    <li>
        <a  class="linksNavGation" href="${href}"  aria-label="${text}">${Icons[icon]} ${text}</a>
    </li>
`
}

function menuItemMobile({href,icon,text}){
    return `
    <li>
        <a class="linksNavGation" href="${href}"  aria-label="${text}">${Icons[icon]} ${text}</a>
    </li>
`
}

// dados sociais

const socialItems = [
  { href: "https://facebook.com", icon: "facebook", text: "" },

  { href: "https://instagram.com", icon: "instagram", text: "" },

  { href: "https://github.com", icon: "github", text: "" },

]
function socialItem({ href, icon }) {
  const labels = {
    facebook: "Facebook",
    instagram: "Instagram",
    github: "GitHub",
  };

  return `
    <li>
      <a class="social-link ${icon}" href="${href}" aria-label="${labels[icon]}" target="_blank" rel="noopener noreferrer">
        ${Icons[icon]}
      </a>
    </li>
  `;
}



  function socialTheme({ id }) {
  return `
    <li>
      <button 
        class="theme-btn js-theme-toggle" 
        id="${id}" 
        type="button" 
        aria-label="Alternar tema"
      >
        ${Icons.moon}
        ${Icons.sun}
      </button>
    </li>
  `;
}

const socialThemeIconsDesktop = [
  { id: "toggle__desktop" },
];

const socialThemeIconsMobile = [
  { id:"" },
];


class NavBar extends HTMLElement {
  connectedCallback() {
    const logoHTML = logoData.map(logoTutor).join("");
    const desktopLinks = navLinks.map(menuItemDesktop).join("");
   const mobileLinks = navLinks.map(menuItemMobile).join("");
    const socialLinks = socialItems.map(socialItem).join("");
const hamburger = menuMobileToggle.map(toggleClose).join("");
 const themesDesktop = socialThemeIconsDesktop.map(socialTheme).join("")
const themesMobile = socialThemeIconsMobile.map(socialTheme).join("")

    this.innerHTML = `
      <nav class="nav container" aria-label="Navegação principal">
        <ul class="nav__logo-wrapper">
          ${logoHTML}
        </ul>
         <ul>
          ${hamburger}
        </ul>
        

        <ul class="desktopLinks" role="list">
          ${desktopLinks}
        </ul>

        <ul class="socialLinks" role="list">
          ${socialLinks}
        </ul>

        <ul class="themes" role="list">
          ${themesDesktop}
        </ul>

       <aside id="aside">
       <div class="linksMonbile">
       <ul class="mobileLinks">${mobileLinks}</ul>
        
        <ul class="socialLinksMobile" role="list">
          ${socialLinks}
        </ul>
        </div>

        <ul class="" role="list">
          ${themesMobile}
        </ul>
       </aside>
      </nav>
    `;
  }
}
customElements.define("nav-bar", NavBar);






// Footer


class Footer extends HTMLElement {
  connectedCallback() {
    const logoHTML = logoData.map(logoTutor).join("");
    const desktopLinks = navLinks.map(menuItemDesktop).join("");
        const socialLinks = socialItems.map(socialItem).join("");
  
    this.innerHTML = `
      <footer class=" footer container" aria-label="Navegação principal">
   
      
        <ul class="desktopLinksFooter" role="list">
          ${desktopLinks}
        </ul>

         <ul class="nav__logo-wrapperFooter">
          ${logoHTML}
        </ul>
        
 <ul class="socialLinkFooter" role="list">
          ${socialLinks}
        </ul>
       

       
      </footer>
    `;
  }
}
customElements.define("footer-bar", Footer);