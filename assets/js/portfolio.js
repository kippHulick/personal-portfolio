projects = [
    {
        "name": "Beauti Bodega",
        "pictures": ["./assets/img/portfolio/beautibodega.png"],
        "description": ["This is an instagram style e-commerce app designed to allow influencers to promote products and brands. Brands can list products that can be added to a shopping cart.",
        "This project was built for a startup that needed a demo product to present to investors. I worked on this project with a UI/UX designer and a team of three other developers, my main role was on the back end but I helped all throughout the project. I handled authentication with different tiers of users, as well as designing the database. It was built using TypeScript for the front and back end, Nodejs, React, Tailwind CSS, Redux and Passport.",
        "This project was my capstone project for the bootcamp I attended, because of that we wanted to push ourselves and make something we were proud of so we taught ourselves TypeScript over the span of a weekend which was one of the biggest challenges of the whole bootcamp. Some other challenges for this specific project included working with a UI/UX designer and making their vision come to life. We also had only a two week time frame to build this project which meant we were working non stop the whole time."],
        "icons": ['typescript', 'nodejs', 'html5', 'css3', 'react', 'postgresql', 'tailwindcss', 'sequelize'],
        "technologies": ['TypeScript', 'Node.js', 'HTML', 'CSS', 'React', 'PostgreSQL', 'Tailwind CSS', 'Sequelize'],
        "github": "https://github.com/sharnee/beautibodega-v0",
        "hosted": "",
        "date": "October 2022",
        "client": "Beauti Bodega LLC",
    },
    {
        "name": "What's in my Drink",
        "lightmode": true,
        "pictures": ["./assets/img/portfolio/drink.png", "./assets/img/portfolio/drink2.png", "./assets/img/portfolio/drink3.png"],
        "description": ["This is a front end app written in vanilla JavaScript and HTML using Bootstrap CSS built by myself and a team of three other developers.",
        "My main role for this project was writing the api calls and handling the recieved data. I also helped build a few of the main pages.",
        "One of the largest challenges of this project was how the API data was not a standard structure so we had to write a function to standardize all the data for the drinks. The modal was also a challenge because we had to make a multiple API calls every time the modal appeared and display the received data."],
        "icons": ['javascript', 'html5', 'css3', 'bootstrap'],
        "technologies": ['JavaScript','HTML', 'CSS', 'Bootstrap'],
        "github": "https://github.com/kippHulick/front-end-project",
        "hosted": "https://coctail-picker.netlify.app/",
        "date": "August 2022",
        "client": "DigitalCrafts",
    },
    {
        "name": "CryptoGraph",
        "pictures": ["./assets/img/portfolio/cryptograph1.png", "./assets/img/portfolio/cryptograph2.png"],
        "description": ["This app displays historical data of the most popular cryptocurrencies.",
        "This is a personal project built with React, Bootstrap and ChartJs and uses the CoinGeko API.",
        "The biggest challenge with this project was making ChartJs work with the API I used."],
        "icons": ['javascript', 'html5', 'css3', 'bootstrap', 'react'],
        "technologies": ['JavaScript','HTML', 'CSS', 'Bootstrap', 'React', 'ChartJs'],
        "github": "https://github.com/kippHulick/crypto-graph",
        "hosted": "https://cryptographkh.netlify.app/",
        "date": "September 2022",
        "client": "DigitalCrafts",
    },
    {
        "name": "Weather App",
        "lightmode": true,
        "pictures": ["./assets/img/portfolio/weather.png"],
        "description": ["This app will show you the current weather of anywhere you search and change the background according to the location searched.", "This was a solo project written in vanilla JavaScript and CSS that consumes the Open Weather Map API. This is a simple project but I think it displays my coding style well."],
        "icons": ['javascript', 'html5', 'css3'],
        "technologies": ['JavaScript','HTML', 'CSS'],
        "github": "https://github.com/kippHulick/Weather-App",
        "hosted": "https://kipps-weatherapp.netlify.app/",
        "date": "July 2022",
        "client": "DigitalCrafts",
    },
    {
        "name": "Backend Budget App",
        "pictures": ["./assets/img/portfolio/backendbudget.png"],
        "description": ["With this app you can log in to your personal dashboard where you can track different purchases you make. This app will also show you your spending habits by month using ChartJs.", "This is a full stack app built by myself a team of three other developers built using Nodejs, Bootstrap and ChartJs. I handled the authentication as well as building and consuming an API written in Nodejs"],
        "icons": ['javascript', 'nodejs', 'express',  'html5', 'css3', 'bootstrap', 'react'],
        "technologies": ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS', 'Bootstrap', 'React'],
        "github": "https://github.com/kippHulick/Backend-A-Team",
        "hosted": "https://backendbudgetapp.herokuapp.com/",
        "date": "August 2022",
        "client": "DigitalCrafts",
    }
]

const portfolioSection = document.querySelector('.portfolio-container')

const portfolioBuilder = () => {
    portfolioHTML = ''
    projects.forEach((project, i) => {
        hosted = project.hosted ? '<a href="${project.hosted}" title="Hosted Site"><i class="bx bx-link"></i></a>' : ''
        portfolioHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
                <img src="${project.pictures[0]}" class="img-fluid" alt="">
                <div class="portfolio-links">
                    <a onclick='openModal(${i})' title="Info"><i class="bx bx-plus"></i></a>
                </div>
            </div>
        </div>`
    })

    portfolioSection.innerHTML = portfolioHTML

}

portfolioBuilder()

const modal = document.getElementById("myModal")
const modalContent = document.querySelector(".modal-content")
const close = document.getElementsByClassName("close")[0]

const openModal = (idx) => {
    const project = projects[idx]
    lightmode = project.lightmode ? '' : 'carousel-dark'
    host = project.hosted ? `<li><span class="text-dark fw-600 me-2">URL:</span><a class="btn btn-primary shadow-none rounded-0 px-3 py-1" href="${project.hosted}" target="_blank">${project.hosted}<i class="fas fa-external-link-alt ms-1"></i></a></li>` : ''
    const pictures = () => {
        let str = ''
        project.pictures.forEach((picture, i) => {
            active = i === 0 ? 'active' : ''
            str += `
            <div class="carousel-item ${active}">
                <img class="d-block w-100" src="${picture}">
            </div>`
        })
        return str
    }

    const icons = () => {
        let str = ''
        project.icons.forEach(icon => {
            str += `<i class="devIcon2 devicon-${icon}-plain colored" title="${icon}"></i>`
        })
        return str
    }

    const slides = () => {
        let str = ''
        project.pictures.forEach((pictures, i) => {
            active = i === 0 ? 'class="active" aria-current="true"' : ''
            str += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" ${active} aria-label="Slide ${i}"/>`
        })
        return str
    }

    modalContent.innerHTML = `
<div>
    
    <span class="close" onclick='closeModal()' class="position-relative">&times;</span>
    <div>
        <h2 class="text-6 fw-600 text-center mb-1">${project.name}</h2>
    
        <hr class="mt-1 mb-1"/>
    
        <div class="col-lg-12 d-flex flex-wrap justify-content-center">
                ${icons()}
        </div>
    
        <div class="row g-4">
            <div class="col-md-7 ">
                <div id="carouselExampleIndicators" class="carousel ${lightmode} slide" data-bs-ride="carousel" style="border: solid black; border-radius: 3px;">
                    <div class="carousel-indicators">
                        ${slides()}
                    </div>
                    <div class="carousel-inner">
                        ${pictures()}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
    
            </div>
    
            <div class="col-md-5">
                <h4 class="text-4 fw-600">Project Info:</h4>
                <p>${project.description.join('<br/><br/>')}</p>
    
                <h4 class="text-4 fw-600 mt-4">Project Details:</h4>
                <ul class="list-style-2">
                    <li><span class="text-dark fw-600 me-2">Client:</span>${project.client}</li>
                    <li><span class="text-dark fw-600 me-2">Technologies:</span>${project.technologies.join(', ')}</li>
                    <li><span class="text-dark fw-600 me-2">Date:</span>${project.date}</li>
                    <li><span class="text-dark fw-600 me-2">GitHub:</span><a class="btn btn-primary shadow-none rounded-0 px-3 py-1" href="${project.github}" target="_blank">${project.github}<i class="fas fa-external-link-alt ms-1"></i></a></li>
                    ${host}
                </ul>
            <div/>
        <div/>
    
    </div>
</div>`

    modal.style.display = "block"
}

closeModal = () => {
    modal.style.display = "none";
    modalContent.innerHTML = ''
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalContent.innerHTML = ''
    }
}