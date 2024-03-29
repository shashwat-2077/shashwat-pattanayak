/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "I haven't started any Research works YET!",
        authors : "Shashwat Pattanayak",
        conferences : "VIT Bhopal University",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/still-learning.jpg",
        citation: {
            vancouver: "All this will get filled soon!"
        },
        abstract: "All this will get filled soon!",
        absbox: "absPopup1"
    },
    // {
    //     title : "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
    //     authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "popup1",
    //     image : "assets/images/research-page/inteferenceNetwork.png",
    //     citation: {
    //         vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 1",
    //     absbox: "absPopup1"
    // },

    // {
    //     title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
    //     authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "popup2",
    //     image : "assets/images/research-page/crossLingual.png",
    //     citation: {
    //         vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 2",
    //     absbox: "absPopup2"
    // },

    
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

