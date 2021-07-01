AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Machine Learning - GirlScript Scholarsip",
    cardImage: "assets/images/education-page/gsml.jpg",
    moocLink: "https://www.linkedin.com/posts/shashwat-pattanayak_educationfirst-girlscriptfoundation-girlscripteducationoutreach-activity-6791392292965089280-WpMC",
  },
  {
    title: "AWS Machine Learning - Udacity Scholarship",
    cardImage: "assets/images/education-page/aws-machine-learning.jpg",
    moocLink: "https://www.linkedin.com/posts/shashwat-pattanayak_udacityawsscholars-poweredbyaws-activity-6814407071837093888-PEVd",
  },
  {
    title: "HACKON 2.0",
    cardImage: "assets/images/education-page/hack-on2.jpg",
    moocLink: "https://www.linkedin.com/posts/shashwat-pattanayak_hackon-activity-6814398531428843520-_RRT",
  },
  {
    title: "E-Summit 2021 by E-Cell VIT-Bhopal  ",
    cardImage: "assets/images/education-page/e-summit-2021.jpg",
    moocLink: "https://lnkd.in/gy6yjDa",  
  },
  {
    title: "Google Digital Marketing ",
    cardImage: "assets/images/education-page/google-digital-marketing.jpg",
    moocLink: "https://drive.google.com/file/d/1kBB1vYLX7VehYYDqMuKQnta2Dhvsc-vz/view?usp=sharing",  
  },
  {
    title: "Artificial Intelligence on Azure",
    cardImage: "assets/images/education-page/azure-ai.jpg",
    moocLink: "https://docs.microsoft.com/en-us/learn/paths/get-started-with-artificial-intelligence-on-azure/?WT.mc_id=linkedin",
  },
  {
    title: " CallforCode Global Challenge to combat Climate Change",
    cardImage: "assets/images/education-page/call-for-code.jpg",
    moocLink: "https://developer.ibm.com/callforcode/",
  },
  {
    title: "Dekho Apna Desh Pledge",
    cardImage: "assets/images/education-page/apna-desh.jpg",
    moocLink: "https://www.linkedin.com/posts/shashwat-pattanayak_enthusiastic-exploring-ekabrbharatabrshreshthaabrbharat-activity-6809292991178645504-loik",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "  Azure Developer League",
    image: "assets/images/education-page/azure-developer-badge.jpg",
    description: "Earned June 24, 2021",
  },
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/google-developer-profile-badge.jpg",
    description: "Earned May 28, 2021",
  },
  {
    title: "CodeLab",
    image: "assets/images/education-page/first-codelab.jpg",
    description: "Earned May 28, 2021",
  },
  {
    title: "Build Actions for Google Assistant",
    image: "assets/images/education-page/google-assistant-action-badge.jpg",
    description: "Earned July 20, 2020",
  },
  {
    title: "Build Actions for Google Assistant",
    image: "assets/images/education-page/google-assistant-action-badge.jpg",
    description: "Earned July 20, 2020",
  },
  {
    title: "LetGrowMore Summer of Code.",
    image: "assets/images/education-page/lgmsoc-badge.jpg",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section  not added!*/ 

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Vellore Institute of Technology",
    image: "assets/images/education-page/vitb.png",
    subheading: "Masters of Computer Science & Engineering, (2024-2025)",
    description: "<li>India's Best Private University in Madhya Pradesh</li><li>100% Doctoral Faculty</li><li>CalTech Learning</li><li>Fully Flexible Credit System</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);