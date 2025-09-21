// Menu Button
let ul = document.getElementById("ul");
let btn = document.getElementById("btn");
let boolean = true;
btn.addEventListener("click", () => {
  boolean = !boolean;
  if (boolean) {
    ul.classList.toggle("toggle");
    btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    ul.classList.toggle("toggle");
    btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
});
// Menu Button

// IntersectionObserver Entry
let sections = document.querySelectorAll("section");
let nav = document.querySelectorAll("nav a");

let observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries)
    entries.forEach((entry) => {
      // console.log("cutttt")
      // console.log(entry)
      if (entry.isIntersecting) {
        nav.forEach((element) => {
          element.classList.remove("active");
        });
        document
          .querySelector(`nav a[href="#${entry.target.id}"]`)
          .classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sections) => observer.observe(sections));

// IntersectionObserver Entry

// Form
let submit = document.getElementById("submit");
let name = document.getElementById("name");
let mail = document.getElementById("email");
let msg = document.getElementById("message");
let pop = document.getElementById("pop-up");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value != "" && msg.value != "") {
    validate();
    name.value = "";
    mail.value = "";
    msg.value = "";
  }
});

function validate() {
  pop.style.visibility = "visible";
  pop.style.transform = "translateY(0px)";
  setTimeout(() => {
    pop.style.transform = "translateY(600px)";
    pop.style.visibility = "hidden";
  }, 2000);
}
// Form

// Scroll
let animate = document.querySelectorAll(".animate");
let scrol = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("show");
        scrol.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animate.forEach((div) => scrol.observe(div));
// Scroll

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
