// Configuration
const API_BASE_URL = 'http://127.0.0.1:8000';

// Global State
let allProjects = [];

// Lucide icon mapping fallback for technologies
const techIconMap = {
  python: 'terminal',
  java: 'coffee',
  cpp: 'binary',
  javascript: 'code-2',
  react: 'atom',
  nodejs: 'server',
  mongodb: 'database',
  mysql: 'database',
  aws: 'cloud',
  azure: 'cloud-lightning'
};

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Main Setup Function
async function initApp() {
  setupMobileMenu();
  setupModal();
  setupFormHandlers();
  
  // Fetch and display backend page data
  await fetchPageData();
  
  // Make sure Lucide icons are initialized for static HTML tags
  lucide.createIcons();
}

/* ==========================================================================
   MOBILE MENU LOGIC
   ========================================================================== */
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (mobileNav.classList.contains('open')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });

    // Close menu when clicking links
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      });
    });
  }
}

/* ==========================================================================
   MODAL LOGIC
   ========================================================================== */
function setupModal() {
  const modal = document.getElementById('application-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  
  // Attach open action to all buttons with open-modal-btn class
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('open-modal-btn')) {
      e.preventDefault();
      openModal(modal);
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    // Close modal on Escape press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal(modal);
      }
    });
  }
}

function openModal(modal) {
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock scroll
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scroll
  }
}

/* ==========================================================================
   DATA FETCH & RENDER
   ========================================================================== */
async function fetchPageData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/page-data/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    renderPartners(data.partners || []);
    renderStats(data.stats || []);
    renderServices(data.services || []);
    renderTechnologies(data.technologies || []);
    
    allProjects = data.projects || [];
    renderFilters(allProjects);
    renderProjects(allProjects);
    
    renderTestimonials(data.testimonials || []);
    renderFAQs(data.faqs || []);
    renderBlogs(data.blogs || []);
    
  } catch (error) {
    console.error('Error fetching page data:', error);
    showToast('Failed to load dynamic data. Please check backend connection.', 'error');
  }
}

// 1. Render Partners
function renderPartners(partners) {
  const track = document.getElementById('partners-track');
  if (!track || partners.length === 0) return;
  
  // Duplicate for seamless infinite marquee flow
  const itemsHTML = partners.map(partner => `
    <div class="partner-item">
      <img src="${partner.logo_url || 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80'}" alt="${partner.name}" class="partner-logo" onerror="this.src='https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80'">
      <span class="partner-name">${partner.name}</span>
    </div>
  `).join('');
  
  // Populate doubled list to create infinite loop
  track.innerHTML = itemsHTML + itemsHTML;
}

// 2. Render Stats with Counter Animation
function renderStats(stats) {
  const container = document.getElementById('stats-grid');
  if (!container) return;
  
  container.innerHTML = stats.map(stat => `
    <div class="stat-card glass-card">
      <div class="stat-icon">
        <i data-lucide="${stat.icon || 'cpu'}"></i>
      </div>
      <div class="stat-value" data-target="${stat.value}">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
  
  lucide.createIcons({ attrs: { 'data-lucide': true } });
  
  // Trigger counter animations
  const valueElements = container.querySelectorAll('.stat-value');
  valueElements.forEach(el => {
    const rawVal = el.getAttribute('data-target');
    const numericPart = parseInt(rawVal, 10);
    const suffix = rawVal.replace(/[0-9]/g, '');
    
    if (!isNaN(numericPart)) {
      animateCount(el, numericPart, suffix);
    }
  });
}

function animateCount(element, target, suffix) {
  let start = 0;
  const duration = 1500; // 1.5 seconds
  const stepTime = Math.abs(Math.floor(duration / target));
  
  // Minimum speed limit to prevent long delays
  const intervalTime = Math.max(stepTime, 10);
  const increment = Math.ceil(target / (duration / intervalTime));
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = start + suffix;
    }
  }, intervalTime);
}

// 3. Render Services
function renderServices(services) {
  const container = document.getElementById('services-grid');
  if (!container) return;
  
  container.innerHTML = services.map(service => `
    <div class="service-card glass-card">
      <div class="service-icon">
        <i data-lucide="${service.icon || 'code'}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
  
  lucide.createIcons({ attrs: { 'data-lucide': true } });
}

// 4. Render Technologies
function renderTechnologies(technologies) {
  const container = document.getElementById('tech-grid');
  if (!container) return;
  
  container.innerHTML = technologies.map(tech => {
    const icon = techIconMap[tech.icon_name.toLowerCase()] || 'code';
    return `
      <div class="tech-card glass-card">
        <div class="tech-icon-container">
          <i data-lucide="${icon}"></i>
        </div>
        <span>${tech.name}</span>
      </div>
    `;
  }).join('');
  
  lucide.createIcons({ attrs: { 'data-lucide': true } });
}

// 5. Render Project Filter Buttons
function renderFilters(projects) {
  const container = document.getElementById('filters-container');
  if (!container) return;
  
  // Extract unique badges
  const categories = ['All', ...new Set(projects.map(p => p.badge))];
  
  container.innerHTML = categories.map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat}">
      ${cat}
    </button>
  `).join('');
  
  // Event listeners for filters
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-filter');
      filterProjects(category);
    });
  });
}

// 6. Filter Projects logic
function filterProjects(category) {
  if (category === 'All') {
    renderProjects(allProjects);
  } else {
    const filtered = allProjects.filter(p => p.badge === category);
    renderProjects(filtered);
  }
}

// 7. Render Projects Grid
function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  
  if (projects.length === 0) {
    container.innerHTML = `<p class="text-center w-full" style="grid-column: 1/-1; color: var(--text-muted);">No projects found in this category.</p>`;
    return;
  }
  
  container.innerHTML = projects.map(project => {
    const tagsHTML = project.tags.split(',')
      .map(tag => `<span class="project-tag-pill">${tag.trim()}</span>`)
      .join('');
      
    return `
      <div class="project-card glass-card" style="opacity: 0; transform: translateY(15px); animation: fade-in-up 0.4s ease forwards;">
        <div class="project-image-wrapper">
          <img src="${project.image_url || 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=400&q=80'}" alt="${project.title}" class="project-img" onerror="this.src='https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=400&q=80'">
          <span class="project-badge-overlay">${project.badge}</span>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Add animation keyframes for dynamic fade-in projects dynamically
if (!document.getElementById('dynamic-keyframes')) {
  const style = document.createElement('style');
  style.id = 'dynamic-keyframes';
  style.innerHTML = `
    @keyframes fade-in-up {
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

// 8. Render Testimonials
function renderTestimonials(testimonials) {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  container.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card glass-card">
      <span class="quote-icon">“</span>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <img src="${testimonial.author_image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'}" alt="${testimonial.author_name}" class="author-avatar" onerror="this.src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'">
        <div class="author-info">
          <h4>${testimonial.author_name}</h4>
          <p>${testimonial.author_title}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. Render FAQs with Drawer Accordion Animation
function renderFAQs(faqs) {
  const container = document.getElementById('faqs-list');
  if (!container) return;
  
  container.innerHTML = faqs.map(faq => `
    <div class="faq-item glass-card">
      <button class="faq-question-btn">
        <span>${faq.question}</span>
        <i data-lucide="plus" class="faq-toggle-icon"></i>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    </div>
  `).join('');
  
  lucide.createIcons({ attrs: { 'data-lucide': true } });
  
  // Handle accordion logic
  container.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other opened FAQs
      container.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      
      // Toggle current FAQ
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// 10. Render Blogs
function renderBlogs(blogs) {
  const container = document.getElementById('blogs-grid');
  if (!container) return;
  
  container.innerHTML = blogs.map(blog => {
    const dateFormatted = new Date(blog.date).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
    
    return `
      <div class="blog-card glass-card">
        <div class="blog-image-wrapper">
          <img src="${blog.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'}" alt="${blog.title}" class="blog-img" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'">
        </div>
        <div class="blog-body">
          <div class="blog-meta">
            <span>${dateFormatted}</span>
            <span>${blog.read_time}</span>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <a href="${blog.link || '#'}" class="blog-link">
            Read Article <i data-lucide="arrow-right" class="icon-sm"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');
  
  lucide.createIcons({ attrs: { 'data-lucide': true } });
}

/* ==========================================================================
   FORM HANDLING & API SUBMISSIONS
   ========================================================================== */
function setupFormHandlers() {
  const newsletterForm = document.getElementById('newsletter-form');
  const internshipForm = document.getElementById('internship-form');
  
  // Newsletter Signup
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('newsletter-email');
      const submitBtn = document.getElementById('newsletter-submit-btn');
      
      if (!emailInput || !submitBtn) return;
      
      const email = emailInput.value.trim();
      
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      try {
        const response = await fetch(`${API_BASE_URL}/api/subscribe/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          showToast('Thank you for subscribing!', 'success');
          emailInput.value = '';
        } else {
          // Display validation error messages if any
          let errMsg = 'Subscription failed.';
          if (data.email) {
            errMsg = Array.isArray(data.email) ? data.email[0] : data.email;
          }
          showToast(errMsg, 'error');
        }
      } catch (err) {
        console.error(err);
        showToast('Network error, please try again later.', 'error');
      } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
    });
  }
  
  // Internship Application
  if (internshipForm) {
    internshipForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('internship-submit-btn');
      const fullNameInput = document.getElementById('full_name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const interestSelect = document.getElementById('interest');
      const messageInput = document.getElementById('message');
      
      if (!submitBtn || !fullNameInput || !emailInput || !phoneInput || !interestSelect) return;
      
      const payload = {
        full_name: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        interest: interestSelect.value,
        message: messageInput ? messageInput.value.trim() : ''
      };
      
      // Basic local validation
      if (!payload.full_name || !payload.email || !payload.phone || !payload.interest) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }
      
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      try {
        const response = await fetch(`${API_BASE_URL}/api/apply/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        
        if (response.ok) {
          showToast('Application submitted successfully!', 'success');
          closeModal(document.getElementById('application-modal'));
          internshipForm.reset();
        } else {
          // Handle backend validation error response messages
          let errMsg = 'Failed to submit application.';
          if (data.email) {
            errMsg = `Email error: ${Array.isArray(data.email) ? data.email[0] : data.email}`;
          } else if (data.phone) {
            errMsg = `Phone error: ${Array.isArray(data.phone) ? data.phone[0] : data.phone}`;
          } else if (data.full_name) {
            errMsg = `Name error: ${Array.isArray(data.full_name) ? data.full_name[0] : data.full_name}`;
          }
          showToast(errMsg, 'error');
        }
      } catch (err) {
        console.error(err);
        showToast('Network error, please check connection.', 'error');
      } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Decide icon
  const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
  
  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  lucide.createIcons({ attrs: { 'data-lucide': true } });
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 4000);
}
