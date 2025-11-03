let body = document.querySelector('body');

// Set header
let header = document.createElement('header');
let headerContent = `
    <div class="logo">
      <p>Stephen Ender</p>
    </div>
    <nav>
      <ul class="navList">
        <li class="navItem""><a href="index.html">Overview</a></li>
        <li class="navItem"><a href="src/software.html">Software Engineering and Application Development</a></li>
        <li class="navItem"><a href="src/cyber.html">Cybersecurity and Computer Networking</a></li>
      </ul>

      <button id="mobileNavButton">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </nav>
  `;
header.innerHTML = headerContent;
body.prepend(header);

let mobileDiv = document.createElement('div');
mobileDiv.id = 'mobileNavDiv';
let mobileNavContent = `
  <ul class="mobileNavList">
    <li class="mobileNavItem""><a href="index.html">Overview</a></li>
    <li class="mobileNavItem"><a href="src/software.html">Software Engineering and Application Development</a></li>
    <li class="mobileNavItem"><a href="src/cyber.html">Cybersecurity and Computer Networking</a></li>
  </ul>
`;
mobileDiv.innerHTML = mobileNavContent;
body.append(mobileDiv);

// Style active nav
let allNavLinks = document.querySelectorAll('.navItem a');
let allMobileNavLinks = document.querySelectorAll('.mobileNavItem a');
const path = window.location.pathname;
if (path == '/src/software.html') {
  allNavLinks[1].style.fontWeight = "700";
  allNavLinks[0].setAttribute('href', '../index.html');
  allNavLinks[1].setAttribute('href', 'software.html');
  allNavLinks[2].setAttribute('href', 'cyber.html');
  // allNavLinks[3].setAttribute('href', 'blog.html');
  
  allMobileNavLinks[1].style.fontWeight = "700";
  allMobileNavLinks[0].setAttribute('href', '../index.html');
  allMobileNavLinks[1].setAttribute('href', 'software.html');
  allMobileNavLinks[2].setAttribute('href', 'cyber.html');
  // allMobileNavLinks[3].setAttribute('href', 'blog.html');
} else if (path == '/src/cyber.html') {
  allNavLinks[2].style.fontWeight = "700"; 
  allNavLinks[0].setAttribute('href', '../index.html');
  allNavLinks[1].setAttribute('href', 'software.html');
  allNavLinks[2].setAttribute('href', 'cyber.html');
  // allNavLinks[3].setAttribute('href', 'blog.html');

  allMobileNavLinks[2].style.fontWeight = "700"; 
  allMobileNavLinks[0].setAttribute('href', '../index.html');
  allMobileNavLinks[1].setAttribute('href', 'software.html');
  allMobileNavLinks[2].setAttribute('href', 'cyber.html');
  // allMobileNavLinks[3].setAttribute('href', 'blog.html');
} else {
  allNavLinks[0].style.fontWeight = "700";
  allMobileNavLinks[0].style.fontWeight = "700";
}
// else if (path == '/src/Blog/index.html') {
//   allNavLinks[3].style.fontWeight = "700";
//   allNavLinks[0].setAttribute('href', '../index.html');
//   allNavLinks[1].setAttribute('href', 'software.html');
//   allNavLinks[2].setAttribute('href', 'cyber.html');
//   allNavLinks[3].setAttribute('href', 'blog.html');

//   allMobileNavLinks[3].style.fontWeight = "700";
//   allMobileNavLinks[0].setAttribute('href', '../index.html');
//   allMobileNavLinks[1].setAttribute('href', 'software.html');
//   allMobileNavLinks[2].setAttribute('href', 'cyber.html');
//   allMobileNavLinks[3].setAttribute('href', 'blog.html');
// }

let mobileNavButton = document.getElementById('mobileNavButton');
  mobileNavButton.addEventListener('click', () => {
  // Display links
  let links = document.querySelector('.mobileNavList');
  if (links.style.display === 'block') {
    links.style.display = 'none';
    mobileNavButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    `;
  } else {
    links.style.display = 'block';
    mobileNavButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>
    `;
  }
});

// Set footer
window.addEventListener('load', () => {
  let footer = document.createElement('footer');
  let footerContent = `
      <div id="fNameBox" class="footerBox nameBox">
        <p>Stephen Ender</p>
      </div>
      <div id="fSocialsBox" class="footerBox socialsBox">
        <a href="https://www.linkedin.com/in/stephen-ender/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
        <a href="https://github.com/stephenender02" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
      </div>
      <div id="fCopyBox" class="footerBox">
        <p>&copy; Stephen Ender 2025</p>
      </div>
      <div id="fEmailBox" class="footerBox">
        <a href="mailto:stephenender02@gmail.com">stephenender02@gmail.com</a>
      </div>`;
  footer.innerHTML = footerContent;
  body.append(footer);
});