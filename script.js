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

// form with emailjs javascript
// document.addEventListener('DOMContentLoaded', function () {
//     emailjs.init('Qz1SHWFAJTNzzJyoZ'); // Replace with your EmailJS public key

//     const form = document.getElementById('contact-form');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Send the form data using EmailJS
//         emailjs.sendForm('service_cpwyxbg', 'template_ucvm5au', form)
//             .then(function (response) {
//                 // Redirect to the thank-you page
//                 window.location.href = 'thank-you.html';
//                 form.reset(); // Reset the form after successful submission
//             }, function (error) {
//                 alert('Failed to send the message, please try again.');
//                 console.error('EmailJS error:', error);
//             });
//     });
// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbxCKGRQQKnRXQXxTDU8eC0V_2kk6Zo3LqNN41TQO3rufyActmdT2hc0sKHzrgVDe7Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    const thankYouPageURL = 'thank-you.html'; // Your thank-you page URL
    window.location.href = thankYouPageURL;
  })
  .catch(error => console.error('Error!', error.message))
})

// Add event listeners to all FAQ questions
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});
