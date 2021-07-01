document.addEventListener("DOMContentLoaded", () => {
  /* dynamic load */
  const travelSummary = document.querySelector(".main");

  // json variable for injecting html into DOM
  const travel_data = [
    {
      day: "Potrait",
      description: `
      <div>
        <!-- gallery -->
        <div class="container_gallery">
            <div class="item1">
                <div class="item2">
                    <h2>Potr<span style="color: rgb(121, 59, 221)">aits</span></h2>
                </div>
                <div class="imagecontainer" style="
              display: flex;
              flex-direction: row;
              padding: 5px 5px;
              align-items: center;
              justify-content: center;
              margin-top: 10px;
            ">
                    <!-- upper left image carousel  -->

                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/landscape/1.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/landscape/4.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <!-- upper middle image carousel  -->

                    <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/landscape/2.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                        
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <!-- upper right image carousel  -->

                    <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/landscape/3.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                            
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- gallery -->
        <div class="container_gallery">
            <div class="item1">
                <div class="imagecontainer" style="
              display: flex;
              flex-direction: row;
              padding: 5px 5px;
              align-items: center;
              justify-content: center;
              margin-top: 10px;
            ">
                    <!-- lower left image carousel  -->

                    <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/potrait/1.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/4.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/7.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <!-- lower middle image carousel  -->

                    <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/potrait/2.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/5.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/8.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <!-- lower right image carousel  -->

                    <div id="carouselExampleIndicators5" class="carousel slide" data-bs-ride="carousel"
                        style="max-width: 30%; margin: 10px">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/travel/potrait/potrait/3.jpeg" class="d-block w-100"
                                    alt="gallery  image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/6.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/travel/potrait/potrait/9.jpeg" class="d-block w-100"
                                    alt="gallery image" />
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>      
      `,
      // background_image: "assets/images/travel/trip1/national_zoological_park.jpg"
      background_image: "assets/images/travel/trip1/street.jpg"
    },
    {
      day: "Macro",
      description: "description",
      background_image: "assets/images/travel/trip1/qutub_minar.jpg"
    },
    {
      day: "Landscapes",
      description: "description",
      background_image: "assets/images/travel/trip1/lotus_temple.jpg"
    },
    {
      day: "Travel",
      description: "description",
      background_image: "assets/images/travel/trip1/old_fort.jpg"
    },
    {
      day: "Wildlife",
      description: "description",
      background_image: "assets/images/travel/trip1/red_fort.jpg"
    }
  ];

  // AOS.init();
  const fillData = () => {
    let output = "";
    travel_data.forEach(
      ({ day, description, background_image }, index) => {
        output += `
    <div class="el">
    <div class="el__overflow">
        <div class="el__inner">
            <div class="el__bg"></div>
            <div class="el__preview-cont">
                <h2 class="el__heading">${day}</h2>
            </div>
            <div class="el__content">
                <div class="el__text">${description}</div>
                <div class="el__close-btn"></div>
            </div>
        </div>
    </div>
    <div class="el__index">
        <div class="el__index-back">${index + 1}</div>
        <div class="el__index-front">
            <div class="el__index-overlay" data-index="${index + 1}">${index + 1}</div>
        </div>
    </div>
</div>`

        /* adding style to stylesheet */
        document.styleSheets[0].addRule(`.el:nth-child(${index + 1}) .el__bg:before`, `background-image: url("${background_image}");`);

      });

    travelSummary.innerHTML = output;

  };

  fillData();

  // document.addEventListener("DOMContentLoaded", fillData);
  /* dynamic load */

  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(function () {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;

      /* added */
      const mediaQuery = window.matchMedia('(max-width: 700px)')
      // Check if the media query is true
      if (mediaQuery.matches) {
        $cont.style.height = "80vh";
      }
      else {
        $cont.style.height = "120vh";
      }

      document.styleSheets[0].addRule(".el__bg:before", "background-repeat: no-repeat; background-size: contain !important; background-position: center center !important;");
      /* added */

      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {

      /* added */
      $cont.style.height = "70vh";
      document.styleSheets[0].addRule(".el__bg:before", "background-size: 100% 100% !important;");
      /* added */

      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
});
