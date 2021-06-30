AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graphic Designer",
    cardImage: "assets/images/experience-page/ai-club.png",
    place: "AI Club, VIT Bhopal",
    time: "(February, 2021 - present)",
    desp: "<br>AI club is a Tech club of VIT Bhopal, for all the futuristic ones. We promise to make systems adaptive through artificial intelligence. We will be organizing webinars, debates, various competitions to show up your skills and improve the abilities to analyze, and develop computational intelligence. Our main goal is to administer you with the industrial challenges for your better future. Everyone will be given an equal opportunity here.",
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Photographer",
    cardImage: "assets/images/experience-page/e-cell.jpg",
    place: "E-Cell, VIT Bhopal",
    time: "(December, 2020 - Present)",
    desp: "<br>The E-Cell of VIT-B is a non-profit organization aimed at guiding and promoting the rising entrepreneurs all over India."
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Digital Producer",
    cardImage: "assets/images/experience-page/vvp.jpg",
    place: "Vishwa Vaidik Parivaar",
    time: "(March, 2015 - Present)",
    desp: "<br>Vishwa Vaidik Parivaar is a Universal Organisation for Social & Spiritual Reformation."
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Digital Media & Documentary",
    cardImage: "assets/images/experience-page/msf.jpg",
    place: "Mahashakti Foundation",
    time: "(June, 2017 - Present)",
    desp: "<br>'Mahashakti Foundation' is a non-profit NGO developing the livelihoods of poor and tribal people of Odisha. <li>Vision : 'Mahashakti Foundation visualizes an egalitarian society of justice , economic independence, empowerment and peace.'</li><li>Creating opportunities and empowering the poor.</li>"
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Manager",
    cardImage: "assets/images/experience-page/yt-channel.jpg",
    place: "My YouTube Channel",
    time: "(January, 2013 - Present)",
    desp: "<br>A place where you can find all my vlogs, gameplays, explorations, edits etc."
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Manager",
    cardImage: "assets/images/experience-page/the-essence.jpg",
    place: "The Essence",
    time: "(May, 2021 - Present)",
    desp: "<br>On this channel, I upload relaxing music with beautiful nature videos for ultimate relaxation. The videos feature Dreamy Ambient Music that can be used as study music, sleep music, music during work or as background music during the day. "
    // desp: "<li></li> <li></li> <li></li>",
  },
  {
    title: "Videographer",
    cardImage: "assets/images/experience-page/pwi.jpg",
    place: "Peaceful Writers International",
    time: "(February, 2021 - June 2021)",
    desp: "<br>Peaceful Writers International is a Global Writing Community and an Indian-based Publication providing Inscribing Platform to amateur and budding writers for brushing up their Writing Skills globally. It's a Publication working in certain countries like Kenya, Nigeria, Ghana, South Africa, Zimbabwe, Mauritius, etc...apart from India."
    // desp: "<li></li> <li></li> <li></li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "LetsGrowMore Summer of Code",
    cardImage: "assets/images/experience-page/lgm.png",
    description:
      "As a newbie to open source, i explored and dug into some of the projects and tried to contributed all that i Could",
  },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
