// 'use strict';



// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }
'use strict';

// Validation script
var nameError = document.getElementById('name_error');
var emailError = document.getElementById('mail_error');
var phoneError = document.getElementById('phone_error');
var subjectError = document.getElementById('subject_error');
var submitError = document.getElementById('submit_error');

function validateName() {
  var name = document.getElementById('c_name').value;
  if (name.toString().trim() === "") {
    nameError.innerHTML = 'Please enter a Name. This field cannot be left empty.';
    return false;
  }
  if (name.length === 0) {
    nameError.innerHTML = 'Enter Name';
    return false;
  }
  if (!name.match(/^[a-zA-Z ]*$/)) {
    nameError.innerHTML = 'Enter Your Valid Name';
    return false;
  }
  nameError.innerHTML = ''; // Clear any previous error messages
  return true;
}

function validateEmail() {
  var email = document.getElementById('c_mail').value;
  if (email.length === 0) {
    emailError.innerHTML = 'Enter valid email';
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com|yahoo\.com)$/)) {
    emailError.innerHTML = 'Your email is invalid';
    return false;
  }
  emailError.innerHTML = ''; // Clear any previous error messages
  return true;
}

function validatePhone() {
  var phone = document.getElementById('c_phone').value;
  if (phone.toString().trim() === "") {
    phoneError.innerHTML = 'Please enter a phone number. This field cannot be left empty.';
    return false;
  }
  if (phone.length > 0 && !phone.match(/^\d{10}$/)) {
    phoneError.innerHTML = 'Enter a valid 10-digit phone number';
    return false;
  }
  phoneError.innerHTML = ''; // Clear any previous error messages
  return true;
}

function validateSubject() {
  var subject = document.getElementById('c_subject').value;
  if (subject.toString().trim() === "") {
    subjectError.innerHTML = 'Please enter a subject. This field cannot be left empty.';
    return false;
  }

  if (subject.length === 0) {
    subjectError.innerHTML = 'Enter the subject';
    return false;
  }
  subjectError.innerHTML = ''; // Clear any previous error messages
  return true;
}

function validateForm() {
  // Clear any previous error messages
  nameError.innerHTML = '';
  emailError.innerHTML = '';
  phoneError.innerHTML = '';
  subjectError.innerHTML = '';
  submitError.innerHTML = '';

  if (!validateName() || !validateEmail() || !validatePhone() || !validateSubject()) {
    submitError.innerHTML = 'Enter correct credentials';
    return false;
  }
  return true;
}

// Script for form and other functionalities
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Case Study Modal
const caseStudyBtns = document.querySelectorAll("[data-case-study-btn]");
const caseStudyModalContainer = document.querySelector("[data-case-study-modal-container]");
const caseStudyModalCloseBtn = document.querySelector("[data-case-study-close-btn]");
const caseStudyOverlay = document.querySelector("[data-case-study-overlay]");

// modal content variables
const modalCaseTitle = document.querySelector("[data-modal-case-title]");
const modalCaseTech = document.querySelector("[data-modal-case-tech]");
const modalCaseContent = document.querySelector("[data-modal-case-content]");

// modal toggle function
const caseStudyModalFunc = function () {
  caseStudyModalContainer.classList.toggle("active");
  caseStudyOverlay.classList.toggle("active");
  
  // Prevent body scroll on mobile when modal is open
  if (caseStudyModalContainer.classList.contains("active")) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
}

// add click event to all case study buttons
for (let i = 0; i < caseStudyBtns.length; i++) {
  caseStudyBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Find the case study data within the same project item
    const projectItem = this.closest("[data-project-item]");
    const caseStudyData = projectItem.querySelector("[data-case-study]");

    if (caseStudyData) {
      const title = caseStudyData.querySelector("[data-case-title]").innerHTML;
      const tech = caseStudyData.querySelector("[data-case-tech]").innerHTML;
      const content = caseStudyData.querySelector("[data-case-content]").innerHTML;

      modalCaseTitle.innerHTML = title;
      modalCaseTech.innerHTML = tech;
      modalCaseContent.innerHTML = content;

      caseStudyModalFunc();
    }
  });
}

// add click event to modal close button
if (caseStudyModalCloseBtn) {
  caseStudyModalCloseBtn.addEventListener("click", caseStudyModalFunc);
}
if (caseStudyOverlay) {
  caseStudyOverlay.addEventListener("click", caseStudyModalFunc);
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('.lazy-load');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      
      if (src) {
        img.setAttribute('src', src);
        img.classList.add('loaded');
        
        // Hide skeleton loader when image loads
        img.addEventListener('load', function() {
          const projectItem = this.closest('[data-project-item]');
          const skeleton = projectItem?.querySelector('[data-skeleton]');
          if (skeleton) {
            setTimeout(() => {
              skeleton.classList.add('hidden');
            }, 300);
          }
        });
        
        observer.unobserve(img);
      }
    }
  });
}, {
  rootMargin: '50px'
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// FETCH GITHUB STATISTICS
// ============================================
async function fetchGitHubStats(repo, element) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) throw new Error('Failed to fetch');
    
    const data = await response.json();
    
    const starsElement = element.querySelector('[data-github-stars] .stat-value');
    const forksElement = element.querySelector('[data-github-forks] .stat-value');
    
    if (starsElement) {
      starsElement.textContent = data.stargazers_count || '0';
      starsElement.parentElement.classList.remove('loading');
    }
    
    if (forksElement) {
      forksElement.textContent = data.forks_count || '0';
      forksElement.parentElement.classList.remove('loading');
    }
  } catch (error) {
    console.log('GitHub stats unavailable for', repo);
    const starsElement = element.querySelector('[data-github-stars] .stat-value');
    const forksElement = element.querySelector('[data-github-forks] .stat-value');
    if (starsElement) starsElement.textContent = '--';
    if (forksElement) forksElement.textContent = '--';
  }
}

// Load GitHub stats for all projects
const projectsWithGitHub = document.querySelectorAll('[data-github-repo]');
projectsWithGitHub.forEach(project => {
  const repo = project.getAttribute('data-github-repo');
  if (repo) {
    // Mark as loading
    const statsItems = project.querySelectorAll('[data-github-stars], [data-github-forks]');
    statsItems.forEach(item => item.classList.add('loading'));
    
    fetchGitHubStats(repo, project);
  }
});

// ============================================
// SOCIAL SHARING
// ============================================
const shareButtons = document.querySelectorAll('[data-share-btn]');
let activeShareModal = null;

// Create share modal HTML
const createShareModal = () => {
  const modal = document.createElement('div');
  modal.className = 'share-modal';
  modal.innerHTML = `
    <div class="share-modal-header">
      <h3 class="share-modal-title">Share Project</h3>
      <button class="share-close-btn">
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
    <div class="share-options">
      <a href="#" class="share-option twitter" data-share-platform="twitter">
        <ion-icon name="logo-twitter"></ion-icon>
        <span class="share-option-label">Twitter</span>
      </a>
      <a href="#" class="share-option linkedin" data-share-platform="linkedin">
        <ion-icon name="logo-linkedin"></ion-icon>
        <span class="share-option-label">LinkedIn</span>
      </a>
      <a href="#" class="share-option facebook" data-share-platform="facebook">
        <ion-icon name="logo-facebook"></ion-icon>
        <span class="share-option-label">Facebook</span>
      </a>
      <a href="#" class="share-option whatsapp" data-share-platform="whatsapp">
        <ion-icon name="logo-whatsapp"></ion-icon>
        <span class="share-option-label">WhatsApp</span>
      </a>
      <button class="share-option email" data-share-platform="email">
        <ion-icon name="mail-outline"></ion-icon>
        <span class="share-option-label">Email</span>
      </button>
      <button class="share-option copy" data-share-platform="copy">
        <ion-icon name="copy-outline"></ion-icon>
        <span class="share-option-label">Copy Link</span>
      </button>
    </div>
    <div class="copy-link-section">
      <input type="text" class="copy-link-input" readonly>
      <button class="copy-link-btn">Copy</button>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
};

const shareModal = createShareModal();
const shareOverlayElement = caseStudyOverlay; // Reuse existing overlay

// Share button click handlers
shareButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const title = this.getAttribute('data-share-title');
    const url = this.getAttribute('data-share-url');
    
    openShareModal(title, url);
  });
});

function openShareModal(title, url) {
  const shareText = `Check out ${title}!`;
  
  // Update copy link input
  const copyInput = shareModal.querySelector('.copy-link-input');
  copyInput.value = url;
  
  // Update share links
  const twitterLink = shareModal.querySelector('[data-share-platform="twitter"]');
  const linkedinLink = shareModal.querySelector('[data-share-platform="linkedin"]');
  const facebookLink = shareModal.querySelector('[data-share-platform="facebook"]');
  const whatsappLink = shareModal.querySelector('[data-share-platform="whatsapp"]');
  
  twitterLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
  linkedinLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
  
  // Show modal
  shareModal.classList.add('active');
  if (shareOverlayElement) {
    shareOverlayElement.classList.add('active');
  }
  
  // Prevent body scroll on mobile
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}

function closeShareModal() {
  shareModal.classList.remove('active');
  if (shareOverlayElement) {
    shareOverlayElement.classList.remove('active');
  }
  
  // Restore body scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

// Close button
shareModal.querySelector('.share-close-btn').addEventListener('click', closeShareModal);

// Email share
shareModal.querySelector('[data-share-platform="email"]').addEventListener('click', function() {
  const url = shareModal.querySelector('.copy-link-input').value;
  const title = 'Check out this amazing project!';
  window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
});

// Copy link functionality
const copyLinkBtn = shareModal.querySelector('.copy-link-btn');
const copyLinkInput = shareModal.querySelector('.copy-link-input');

copyLinkBtn.addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(copyLinkInput.value);
    
    // Visual feedback
    const originalText = this.textContent;
    this.textContent = 'Copied!';
    this.classList.add('copied');
    
    setTimeout(() => {
      this.textContent = originalText;
      this.classList.remove('copied');
    }, 2000);
  } catch (err) {
    // Fallback for older browsers
    copyLinkInput.select();
    document.execCommand('copy');
    
    const originalText = this.textContent;
    this.textContent = 'Copied!';
    this.classList.add('copied');
    
    setTimeout(() => {
      this.textContent = originalText;
      this.classList.remove('copied');
    }, 2000);
  }
});

// Copy on clicking input
copyLinkInput.addEventListener('click', function() {
  this.select();
  copyLinkBtn.click();
});

// Close share modal when clicking overlay (but not case study modal)
if (shareOverlayElement) {
  const originalOverlayHandler = shareOverlayElement.onclick;
  shareOverlayElement.addEventListener('click', function(e) {
    if (shareModal.classList.contains('active')) {
      closeShareModal();
      e.stopPropagation();
    }
  });
}

// ============================================
// VIEW COUNTER (LocalStorage)
// ============================================
function updateViewCounts() {
  const projects = document.querySelectorAll('[data-project-item]');
  
  projects.forEach(project => {
    const projectTitle = project.querySelector('.project-title')?.textContent;
    const viewCountElement = project.querySelector('[data-view-count]');
    
    if (projectTitle && viewCountElement) {
      const storageKey = `project-views-${projectTitle.replace(/\s+/g, '-').toLowerCase()}`;
      let views = localStorage.getItem(storageKey);
      
      if (!views) {
        // Initialize with a random count between 500-2000
        views = Math.floor(Math.random() * 1500) + 500;
        localStorage.setItem(storageKey, views);
      } else {
        // Increment view count
        views = parseInt(views) + 1;
        localStorage.setItem(storageKey, views);
      }
      
      // Format number (e.g., 1.2k, 2.5k)
      const formattedViews = views >= 1000 
        ? (views / 1000).toFixed(1) + 'k' 
        : views;
      
      viewCountElement.textContent = formattedViews;
    }
  });
}

// Update view counts on page load
updateViewCounts();

// ============================================
// KEYBOARD NAVIGATION
// ============================================
// Escape key to close modals
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (caseStudyModalContainer && caseStudyModalContainer.classList.contains('active')) {
      caseStudyModalFunc();
    }
    if (shareModal && shareModal.classList.contains('active')) {
      closeShareModal();
    }
  }
});

// Tab trap in modals
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });
}

if (caseStudyModalContainer) {
  trapFocus(caseStudyModalContainer);
}
if (shareModal) {
  trapFocus(shareModal);
}

// ============================================
// MEDIA LIGHTBOX / GALLERY
// ============================================

let currentMediaIndex = 0;
let mediaItems = [];
let lightboxElement = null;

// Create Lightbox HTML
function createLightbox() {
  if (document.querySelector('.media-lightbox')) return;
  
  const lightbox = document.createElement('div');
  lightbox.className = 'media-lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close lightbox">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <img class="lightbox-media" src="" alt="" style="display:none;">
      <video class="lightbox-media video" controls style="display:none;">
        <source src="" type="video/mp4">
      </video>
      <p class="lightbox-caption"></p>
      <button class="lightbox-nav prev" aria-label="Previous media">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button class="lightbox-nav next" aria-label="Next media">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <div class="lightbox-counter"></div>
    </div>
  `;
  
  document.body.appendChild(lightbox);
  lightboxElement = lightbox;
  
  // Event Listeners
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
  const nextBtn = lightbox.querySelector('.lightbox-nav.next');
  
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });
  
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPreviousMedia();
  });
  
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextMedia();
  });
}

// Open Lightbox
function openLightbox(index, items) {
  createLightbox();
  
  currentMediaIndex = index;
  mediaItems = items;
  
  updateLightboxContent();
  lightboxElement.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  
  // Pause all videos in case study modal
  const caseStudyVideos = caseStudyModalContainer.querySelectorAll('video');
  caseStudyVideos.forEach(video => video.pause());
}

// Close Lightbox
function closeLightbox() {
  if (!lightboxElement) return;
  
  lightboxElement.classList.remove('active');
  
  // Restore body scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  
  // Pause video if playing
  const video = lightboxElement.querySelector('video');
  if (video) video.pause();
}

// Update Lightbox Content
function updateLightboxContent() {
  if (!lightboxElement || !mediaItems.length) return;
  
  const currentItem = mediaItems[currentMediaIndex];
  const img = lightboxElement.querySelector('img.lightbox-media');
  const video = lightboxElement.querySelector('video.lightbox-media');
  const caption = lightboxElement.querySelector('.lightbox-caption');
  const counter = lightboxElement.querySelector('.lightbox-counter');
  const prevBtn = lightboxElement.querySelector('.lightbox-nav.prev');
  const nextBtn = lightboxElement.querySelector('.lightbox-nav.next');
  
  // Hide both initially
  img.style.display = 'none';
  video.style.display = 'none';
  
  // Show appropriate media type
  if (currentItem.type === 'image') {
    img.src = currentItem.src;
    img.alt = currentItem.caption;
    img.style.display = 'block';
  } else if (currentItem.type === 'video') {
    video.querySelector('source').src = currentItem.src;
    video.load();
    video.style.display = 'block';
  }
  
  // Update caption
  caption.textContent = currentItem.caption;
  
  // Update counter
  counter.textContent = `${currentMediaIndex + 1} / ${mediaItems.length}`;
  
  // Show/hide navigation buttons
  prevBtn.style.display = mediaItems.length > 1 ? 'flex' : 'none';
  nextBtn.style.display = mediaItems.length > 1 ? 'flex' : 'none';
  counter.style.display = mediaItems.length > 1 ? 'block' : 'none';
}

// Navigate to Previous Media
function showPreviousMedia() {
  currentMediaIndex = (currentMediaIndex - 1 + mediaItems.length) % mediaItems.length;
  updateLightboxContent();
}

// Navigate to Next Media
function showNextMedia() {
  currentMediaIndex = (currentMediaIndex + 1) % mediaItems.length;
  updateLightboxContent();
}

// Initialize Media Gallery
function initMediaGallery() {
  // This will be called when case study modal opens
  const caseStudyModal = document.querySelector('.case-study-modal');
  if (!caseStudyModal) return;
  
  // Wait for modal to be populated with content
  setTimeout(() => {
    const mediaItemElements = caseStudyModal.querySelectorAll('.media-item');
    
    if (mediaItemElements.length === 0) return;
    
    // Convert NodeList to array of media objects
    const items = Array.from(mediaItemElements).map(item => {
      const type = item.getAttribute('data-media-type');
      const img = item.querySelector('img');
      const video = item.querySelector('video');
      const caption = item.querySelector('.media-caption')?.textContent || '';
      
      return {
        type: type,
        src: type === 'image' ? img?.src : video?.querySelector('source')?.src,
        caption: caption
      };
    });
    
    // Add click event to each media item
    mediaItemElements.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        // Don't trigger if clicking on video controls
        if (e.target.tagName === 'VIDEO') return;
        
        openLightbox(index, items);
      });
    });
  }, 100);
}

// Enhanced Case Study Modal Function
const originalCaseStudyModalFunc = caseStudyModalFunc;
caseStudyModalFunc = function() {
  originalCaseStudyModalFunc();
  
  // Initialize media gallery when modal opens
  if (caseStudyModalContainer.classList.contains('active')) {
    initMediaGallery();
  }
};

// Keyboard Navigation for Lightbox
document.addEventListener('keydown', function(e) {
  if (!lightboxElement || !lightboxElement.classList.contains('active')) return;
  
  switch(e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPreviousMedia();
      break;
    case 'ArrowRight':
      showNextMedia();
      break;
  }
});

// Touch Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  if (!lightboxElement || !lightboxElement.classList.contains('active')) return;
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
  if (!lightboxElement || !lightboxElement.classList.contains('active')) return;
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next
      showNextMedia();
    } else {
      // Swipe right - previous
      showPreviousMedia();
    }
  }
}
