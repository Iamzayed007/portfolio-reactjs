import travel from '../../assets/image/projects/travel.jpeg'
import medi from '../../assets/image/projects/medicare.jpeg'
import car from '../../assets/image/projects/car.jpeg'
import hero from '../../assets/image/projects/herojs.jpeg'


export const allProjects={

    mern:[
        {
            name: "Traventur",
            img:travel,
            description:"An online Traventure- (A tour guide) booking app. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.",
            features:["Easy online booking system","This project user can Book Their desire tour by booking procedure",
            "Respoisive Design"],
           
            techUsed1:["HTML5","CSS3","Bootstrap5","MongoDB","Heroku"],
            techUsed2:["React Js","Node Js","Express Js","Firebase"],
            clientSite:"https://github.com/Iamzayed007/Travel-Client-Site-ReactJs",
            serverSite:"https://github.com/Iamzayed007/Travel-Server-Site-",
            liveSite:"https://traveler-duo.web.app/",
        },
        {
            name: "Car Gallery",
            img:car,
            description:"An online Car Gallery buying website. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.",
            features:["Select your desire car and buy it online",
        "Real-time complete website",
        "Styled with react-bootstrap"
        ], 
            techUsed1:["HTML5","CSS3","Bootstrap5","MongoDB","Firebase"],
            techUsed2:["React Js","Node Js","Express Js","Heroku"],
            clientSite:"https://github.com/Iamzayed007/car-client-site-reactjs",
            serverSite:"https://github.com/Iamzayed007/car-server-site-expressJs",
            liveSite:"https://wheels-59842.web.app/",
        },
        {
            name: "Medi Care",
            img:medi,
            description:"A Hospital Management system for a software limited. Developed by ReactJS, Bootstrap, Firebase ",
            features:["Medi Care Hospital system is created for giving medical services to all users.",
        "Real-time complete website",
        "Styled with bootstrap"
        ],
            techUsed1:["HTML5","CSS3","Bootstrap5"],
            techUsed2:["React Js","Firebase"],
            clientSite:"https://github.com/Iamzayed007/hospital-clientsite-reactJs",
            serverSite:"",
            liveSite:"https://medi-care-14bc7.web.app/",
        },
        {
            name: "Hero Js",
            img:hero,
            description:"This is a Web Development Course website that is only for Js developer where user can enroll their desire courses.",
            features:["Here user can view all the courses ",
        "Here User can Enroll their desire courses ",
        "User can contact with admin"
        ],
            techUsed1:["HTML5","CSS3","Bootstrap5"],
            techUsed2:["React Js","Netlify"],
            clientSite:"https://github.com/Iamzayed007/educational-client-site-react-js",
            serverSite:"",
            liveSite:"https://vibrant-aryabhata-163df8.netlify.app/",
        },
      
    ]
}

// {
//     name: "",
//     img:"",
//     description:"",
//     features:"",
//     techUsed1:"",
//     techUsed2:"",
//     clientSite:"",
//     serverSite:"",
//     liveSite:"",
// },