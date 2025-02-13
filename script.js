// Mock Mentor Data (replace with Firebase later)
// const mentors = [
//     {
//         name: "Anika Sharma",
//         university: "Stanford University",
//         course: "MS Computer Science",
//         price: 1500,
//         photo: "CEO.png",
    
//     },
//     {
//         name: "Rahul Verma",
//         university: "MIT",
//         course: "MBA",
//         price: 2000,
//         photo: "assets/mentor2.jpg",
       
//     },
//     {
//         name: "Priya Patel",
//         university: "Harvard University",
//         course: "PhD Neuroscience",
//         price: 1800,
//         photo: "assets/mentor3.jpg",
       
//     },
//     {
//         name: "Arjun Singh",
//         university: "University of Toronto",
//         course: "BSc Computer Engineering",
//         price: 1200,
//         photo: "assets/mentor4.jpg",
       
//     },
//     {
//         name: "Neha Gupta",
//         university: "ETH Zurich",
//         course: "Masters in Robotics",
//         price: 1700,
//         photo: "assets/mentor5.jpg",
       
//     },
//     {
//         name: "Siddharth Rao",
//         university: "University of Cambridge",
//         course: "MA Economics",
//         price: 1900,
//         photo: "assets/mentor6.jpg",
       
//     },
//     {
//         name: "Meera Desai",
//         university: "University of Melbourne",
//         course: "BArch",
//         price: 1400,
//         photo: "assets/mentor7.jpg",
     
//     },
//     {
//         name: "Vikram Joshi",
//         university: "Imperial College London",
//         course: "MSc Data Science",
//         price: 2100,
//         photo: "assets/mentor8.jpg",
      
//     },
//     {
//         name: "Ananya Reddy",
//         university: "University of Chicago",
//         course: "LLM",
//         price: 1600,
//         photo: "assets/mentor9.jpg",
        
//     }
// ];

// // Render Mentors
// function renderMentors() {
//     const container = document.getElementById('mentorContainer');
//     let html = '';
    
//     mentors.forEach(mentor => {
//         html += `
//             <div class="col-md-4">
//                 <div class="mentor-card card h-100">
//                     <img src="${mentor.photo}" class="card-img-top" alt="${mentor.name}">
//                     <div class="card-body">
//                         <h5 class="card-title">${mentor.name}</h5>
//                         <p class="text-muted">${mentor.university}</p>
//                         <p class="text-primary fw-bold">₹${mentor.price}/session</p>
                        
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
    
//     container.innerHTML = html;
// }

// Booking Function
function bookSession(calendlyLink) {
    window.open(calendlyLink, '_blank'); // Replace with Calendly modal
}

// Initialize
// document.addEventListener('DOMContentLoaded', renderMentors);


const scriptURL = 'https://script.google.com/macros/s/AKfycbxCKGRQQKnRXQXxTDU8eC0V_2kk6Zo3LqNN41TQO3rufyActmdT2hc0sKHzrgVDe7Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = fetch(scriptURL, { method: 'POST', body: new FormData(form) });

    // Redirect after a very short delay (even if fetch isn’t done yet)
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 300); // 300ms delay

    await response;
  } catch (error) {
    console.error('Error!', error.message);
  }
});


// Add event listeners to all FAQ questions
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});
// Scroll Animation Logic
document.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('.scroll-animation');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Optional: Remove if you don't want animations to reset
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value to control when the animation triggers
    }
  );

  scrollElements.forEach((el) => observer.observe(el));
});


function checkOtherUniversity() {
  var universityDropdown = document.getElementById("university");
  var otherUniversityGroup = document.getElementById("other-university-group");
  if (universityDropdown.value === "Others") {
    otherUniversityGroup.style.display = "block";
    document.getElementById("other-university").required = true;
  } else {
    otherUniversityGroup.style.display = "none";
    document.getElementById("other-university").required = false;
  }
}
document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('university');
  if (event.target !== dropdown) {
      dropdown.size = 1; // Collapse the dropdown
  }
});

document.getElementById('university').addEventListener('click', function () {
  this.size = 7; // Expand to show 5 options
});
document.addEventListener("DOMContentLoaded", function () {
  const universityDropdown = document.getElementById("university");

  universityDropdown.addEventListener("focus", function () {
    // Add a class to the parent form-group to add extra margin
    this.closest(".form-group").classList.add("dropdown-open");
  });

  universityDropdown.addEventListener("blur", function () {
    // Remove the class when the dropdown loses focus
    this.closest(".form-group").classList.remove("dropdown-open");
  });
});