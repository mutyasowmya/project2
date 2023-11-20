function showDetails(companyName) {
  const companyDetails = getCompanyDetails(companyName);
  if (companyDetails) {
    const popupContainer = document.getElementById('popupContainer');
    const popupContent = document.getElementById('popupContent');
    const companyDetailsPara = document.getElementById('companyDetails');

    companyDetailsPara.textContent = companyDetails;
    popupContainer.style.display = 'block';
  }
}

function hidePopup() {
  const popupContainer = document.getElementById('popupContainer');
  if (popupContainer) {
    popupContainer.style.display = 'none';
  }
}

function getCompanyDetails(companyName) {
  
  if (companyName === 'company1') {
    return "Role Description: I specialize in orchestrating AWS cloud infrastructure for production and development, with expertise in designing web environments using EC2, ELB, and S3. Proficient in DevOps tools like GitHub, Jenkins, and SonarQube, I ensure robust monitoring through CloudWatch. My role encompasses meticulous manual and automation testing, focusing on precise test data and cases. I swiftly identify defects, create Jira tickets for resolution, and ensure on-time delivery. Detailed documentation accompanies each step, aiding UAT understanding. I have automated builds for Maven, mobile, and API  testing, utilizing tools like Cafenext, ConformQ, and Applitools for efficient operations.";
  } else if (companyName === 'company2') {
    return "Role Description: The experience involves an internship at ECIL focusing on embedded systems and the development of an RFID-based attendance system using Embedded C.";
  }
  
}


function toggleMode() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.removeItem("mode");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  }
}

window.onload = function () {
  const mode = localStorage.getItem("mode");
  const body = document.body;
  if (mode === "dark") {
    body.classList.add("dark-mode");
  }
};


    
  
  
  
  
  


  
  