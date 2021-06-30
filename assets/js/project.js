/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  
  {
    title: "Windows 11",
    cardImage: "assets/images/project-page/win11.jpg",
    description: "Windows 11 with just HTML, CSS, & JavaScript",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_codewitharry-html-css-activity-6815665471359213568-uV8-",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_codewitharry-html-css-activity-6815665471359213568-uV8-",
  },
  {
    title: "Analogue Clock",
    cardImage: "assets/images/project-page/analogue-clock.jpg",
    description: "Built using Python.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_codewitharry-html-css-activity-6815665471359213568-uV8-",
    Githublink: "#",
  },
  {
    title: "Face Recognition",
    cardImage: "assets/images/project-page/face-recog-guvi.jpg",
    description: "Built using Python libraries and Google Colab.",
    tagimg: "https://www.linkedin.com/posts/shashwat-pattanayak_python-programming-coding-activity-6791781658015207424-G0Mp",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_python-programming-coding-activity-6791781658015207424-G0Mp",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_python-programming-coding-activity-6791781658015207424-G0Mp",
  },
  {
    title: "Build Actions for Google Assistant",
    cardImage: "assets/images/project-page/google-assistant-action-badge.jpg",
    description: "Learned to build basic and intermediate actions for Google Assistant and also to create advanced features and engage users.",
    tagimg: "https://developers.google.com/profile/badges/playlists/actions-on-google/",
    Previewlink: "https://developers.google.com/profile/badges/playlists/actions-on-google/",
    Githublink: "https://developers.google.com/profile/badges/playlists/actions-on-google/",
  },
  {
    title: "Netflix Recommendation - How do they know what you like?",
    cardImage: "assets/images/project-page//netflix-recommendation.jpg",
    description: "It was really a great session by TechLearn.live providing me with knowledge on the types of recommendation algorithms and a hands on session of the implementation of algorithms used in different OTT platforms.",
    tagimg: "https://www.linkedin.com/posts/shashwat-pattanayak_python-programming-coding-activity-6791781658015207424-G0Mp",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_datascience-algorithms-data-activity-6808564523721621504-0TQ-",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_datascience-algorithms-data-activity-6808564523721621504-0TQ-",
  },
  {
    title: "How Flipkart is using NLP to help Small Businesses GROW",
    cardImage: "assets/images/project-page/flipkart-nlp.jpg",
    description: "I attended a very informative session by TechLearn.live on how Flipkart is using NLP (Natural Language Processing) to help small businesses grow. In this session, I understood what is NLP and its applications, learned the basics of topic modeling, using NLP to review text, #SWOT analysis, how to make things understandable, and also got an insight into the online business war. <li>What is NLP?</li> Natural Language Processing (NLP) is a subfield of #CS, & #AI concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data <li>?> The main objectives of NLP is to<li> <li>-> Understand the sentiment of natural text data (#Sentiment_Analysis)</li> <li>-> Extract the topics or focus points from a bunch of data (#Topic_Modelling & #Text_Summarization)</li> <li>?> Some interesting applications on NLP</li> <li>-> Conversational #Chatbots</li> <li>-> Google Duplex - #AI for everyone</li>",
    tagimg: "https://www.linkedin.com/posts/shashwat-pattanayak_python-programming-coding-activity-6791781658015207424-G0Mp",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_connections-swot-cs-activity-6808949921803227136-PHhp",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_connections-swot-cs-activity-6808949921803227136-PHhp",
  },
  {
    title: "How Uber Saves your time",
    cardImage: "assets/images/project-page/uber-cluster.jpg",
    description: "Got a lot to learn from the TechLearn.live session on 'How Uber Saves our time!' Uber is a $75 billion technology company founded in 2009. It is present in 71 countries and 890 cities. The name Uber is a German word meaning 'above all the rest'. It offers land, water as well as air transport. I was really astonished to know that in NY, the choppers are cheaper than taxis to commute between certain places due to traffic and other constraints. I got a good idea of how Uber uses unsupervised machine learning and data science technologies to decrease commute time, determine the optimal position of cabs & create more supplies.",
    tagimg: "https://www.linkedin.com/posts/shashwat-pattanayak_machinelearning-datascience-ai-activity-6811476355809718272-qTxF",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_machinelearning-datascience-ai-activity-6811476355809718272-qTxF",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_machinelearning-datascience-ai-activity-6811476355809718272-qTxF",
  },
  {
    title: "NASA Image Auto Colouriser with Deep Learning",
    cardImage: "assets/images/project-page/nasa-image-colouriser.jpg",
    description: "NASA - National Aeronautics and Space Administration Image #Auto_Colourise with Deep Learning session by TechLearn.live",
    tagimg: "https://www.linkedin.com/posts/shashwat-pattanayak_autoabrcolourise-deeplearning-aiforall-activity-6815641685436059648-sC_A",
    Previewlink: "https://www.linkedin.com/posts/shashwat-pattanayak_autoabrcolourise-deeplearning-aiforall-activity-6815641685436059648-sC_A",
    Githublink: "https://www.linkedin.com/posts/shashwat-pattanayak_autoabrcolourise-deeplearning-aiforall-activity-6815641685436059648-sC_A",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
            <div class="content">
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <span>${description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
