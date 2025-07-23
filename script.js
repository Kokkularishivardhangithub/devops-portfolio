let currentSlide = 0;
const slides = ["project1.png", "project2.png", "project3.png"];
const slideImg = document.getElementById("slide");

function showSlide(index) {
  slideImg.classList.remove("active");
  setTimeout(() => {
    slideImg.src = slides[index];
    slideImg.classList.add("active");
  }, 200);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function showProjects() {
  document.getElementById("projectBox").classList.add("active");
  document.getElementById("aboutBox").classList.remove("active");
  document.querySelector(".tab-btn:nth-child(1)").classList.add("active");
  document.querySelector(".tab-btn:nth-child(2)").classList.remove("active");
}

function showAbout() {
  document.getElementById("projectBox").classList.remove("active");
  document.getElementById("aboutBox").classList.add("active");
  document.querySelector(".tab-btn:nth-child(1)").classList.remove("active");
  document.querySelector(".tab-btn:nth-child(2)").classList.add("active");
  typeText();
}

function typeText() {
  const text = `# Hello, I’m Rishivardhan, a passionate DevOps Engineer.
  \n➜ Passionate about automation, infrastructure as code, and CI/CD pipelines.
  \n➜ EC2, S3, VPC, IAM, RDS, Route 53, CloudWatch, CloudFormation, ECS, Lambda, and Auto Scaling.
  \n➜ Solid understanding of Linux systems, networking, and scripting (Bash, Python).
  \n➜ Hands-on experience with Docker, Kubernetes, Jenkins, Git, Ansible, and Terraform.
  \n ...........................

  \n➜ Let’s connect and collaborate!`;
  const typedTextElement = document.getElementById("typedText");
  typedTextElement.innerHTML = "";

  let index = 0;
  const speed = 15;

  function type() {
    if (index < text.length) {
      const char = text[index] === "\n" ? "<br/>" : text[index];
      typedTextElement.innerHTML += char;
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  showProjects();
});
