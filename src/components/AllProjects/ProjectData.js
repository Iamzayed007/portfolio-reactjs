import travel from '../../assets/image/projects/travel.jpeg'
import medi from '../../assets/image/projects/medicare.jpeg'
import car from '../../assets/image/projects/car.jpeg'
import hero from '../../assets/image/projects/herojs.jpeg'
import bike from '../../assets/image/projects/bike.jpeg'
import chat from '../../assets/image/projects/chat.png'



export const allProjects={

    mern:[
        {
            name: "Bike Store",
            img:bike,
            description:"An online Bike Store buying website. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.",
            features:[
                "This project is developed by ReactJs,Firebase and Bootstrap5",

"                In this project user can Book Their desire bike by booking procedure" ,               
"                Before Booking bike user must have to Login with their Gmail account",
                
"                User(if Customer) login, user can see a dashboard which has Pay, Review, Myorder option and there has also admin panel if admin login , in dashboard Manage all order, Manage bike, Make Admin, Add a New bike. From bike option user can select bike and purchase it by clicking it",
                
                "admin can also Manage All bike and can delete or can approve the pending status of a adding a new bike and user has my bike option where user can delete the bike if needed",
            ],
            techUsed1:["HTML5","CSS3","Bootstrap5","MongoDB","Firebase"],
            techUsed2:["React Js","Node Js","Express Js","Heroku"],
            clientSite:"https://github.com/Iamzayed007/bike-store-react-js-client-site-",
            serverSite:"https://github.com/Iamzayed007/bike-server-site-nodejs-expressjs",
            liveSite:"https://bike-3c52c.web.app/",
        },
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
        {
            name: "Chat Application",
            img:chat,
            description:"A A  full Realtime Chat Application with Social Auth and dedicated chat APIs/sockets, Developed by ReactJS,Firebase, HTML5, CSS3",
            features:[
                "A  full Realtime Chat Application with Social Auth and dedicated chat APIs/sockets.",
                "Real-time Chat Application",
                "Styled with CSS3"
            ],
            techUsed1:["HTML5","CSS3"],
            techUsed2:["React Js","Firebase"],
            clientSite:"https://github.com/Iamzayed007/chat-box-reactjs",
            serverSite:"",
            liveSite:"https://chat-cd4d6.web.app/chats",
        },
      
    ],
    laravel:[

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