
// Booking Function
function bookSession(calendlyLink) {
  window.open(calendlyLink, "_blank"); // Replace with Calendly modal
}


const scriptURL =
  "https://script.google.com/macros/s/AKfycbxCKGRQQKnRXQXxTDU8eC0V_2kk6Zo3LqNN41TQO3rufyActmdT2hc0sKHzrgVDe7Y/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    // Redirect after a very short delay (even if fetch isn’t done yet)
    setTimeout(() => {
      window.location.href = "thank-you.html";
    }, 300); // 300ms delay

    await response;
  } catch (error) {
    console.error("Error!", error.message);
  }
});

// Add event listeners to all FAQ questions
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});
// Scroll Animation Logic
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Optional: Remove if you don't want animations to reset
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value to control when the animation triggers
    }
  );

  scrollElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".table-row");
  rows.forEach(row => {
      row.addEventListener("mouseenter", () => {
          row.style.transform = "scale(1.02)";
      });
      row.addEventListener("mouseleave", () => {
          row.style.transform = "scale(1)";
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let scrollBox = document.querySelector(".table-wrapper");
  scrollBox.scrollLeft = (scrollBox.scrollWidth - scrollBox.clientWidth) / 2;
});
const universities = [
  "Acharya Institute of Technology, Bengaluru",
  "Amity University, Noida",
  "Amrita School of Engineering, Bengaluru",
  "Amrita Vishwa Vidyapeetham, Coimbatore",
  "Banasthali Vidyapeeth, Banasthali",
  "Bharati Vidyapeeth Deemed University College of Engineering, Pune",
  "Bharath Institute of Higher Education and Research, Chennai",
  "Birla Institute of Technology and Science, Pilani",
  "Birla Institute of Technology, Mesra",
  "BMS College of Engineering, Bengaluru",
  "Chaitanya Bharathi Institute of Technology, Hyderabad",
  "Chandigarh Group of Colleges (CGC), Landran",
  "Chandigarh University, Mohali",
  "Chitkara University, Punjab",
  "CMR University, Bengaluru",
  "Dayananda Sagar College of Engineering, Bengaluru",
  "Dr. DY Patil University, Navi Mumbai",
  "Galgotias University, Greater Noida",
  "GITAM University, Visakhapatnam",
  "GNA University, Phagwara",
  "Graphic Era University, Dehradun",
  "International Institute of Information Technology, Hyderabad",
  "Jain University, Bangalore",
  "Jaypee Institute of Information Technology, Noida",
  "JSS Academy of Higher Education and Research, Mysore",
  "Kalasalingam Academy of Research and Education, Virudhunagar",
  "Kalinga Institute of Industrial Technology, Bhubaneswar",
  "KLE Academy of Higher Education and Research, Belgaum",
  "Koneru Lakshmaiah Education Foundation, Guntur",
  "Lovely Professional University, Phagwara",
  "Maharishi Markandeshwar University, Mullana",
  "Manipal Academy of Higher Education, Manipal",
  "Manav Rachna International Institute of Research and Studies, Faridabad",
  "Narsee Monjee Institute of Management Studies, Mumbai",
  "NITTE University, Mangalore",
  "Noida International University, Greater Noida",
  "Parul University, Waghodia",
  "Saveetha Institute of Medical and Technical Sciences, Chennai",
  "Sathyabama Institute of Science and Technology, Chennai",
  "Shiv Nadar University, Greater Noida",
  "Shoolini University, Solan",
  "Siksha 'O' Anusandhan, Bhubaneswar",
  "Sri Sathya Sai Institute of Higher Learning, Prasanthi Nilayam",
  "SRM Institute of Science and Technology, Chennai",
  "Symbiosis International University, Pune",
  "Thapar Institute of Engineering and Technology, Patiala",
  "University of Petroleum and Energy Studies, Dehradun",
  "Vellore Institute of Technology, Vellore",
  "Others",
];

function populateDropdown() {
  let dropdown = document.getElementById("university-options");
  dropdown.innerHTML = "";
  universities.forEach((uni) => {
    let option = document.createElement("div");
    option.textContent = uni;
    option.onclick = function () {
      document.getElementById("search-university").value = uni;
      dropdown.style.display = "none";
      checkOtherUniversity();
    };
    dropdown.appendChild(option);
  });
}

function showDropdown() {
  let dropdown = document.getElementById("university-options");
  dropdown.style.display = "block";
  populateDropdown();
}

function filterUniversities() {
  let input = document.getElementById("search-university").value.toLowerCase();
  let options = document.getElementById("university-options").children;
  for (let i = 0; i < options.length; i++) {
    let uni = options[i].textContent.toLowerCase();
    options[i].style.display = uni.includes(input) ? "block" : "none";
  }
}

function checkOtherUniversity() {
  let selectedValue = document.getElementById("search-university").value;
  let otherUniversityGroup = document.getElementById("other-university-group");
  let otherUniversityInput = document.getElementById("other-university");

  if (selectedValue === "Others") {
    otherUniversityGroup.style.display = "block";
    otherUniversityInput.required = true;
  } else {
    otherUniversityGroup.style.display = "none";
    otherUniversityInput.required = false;
  }
}

document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("university-options");
  let searchBox = document.getElementById("search-university");
  if (!searchBox.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

window.onload = populateDropdown;
