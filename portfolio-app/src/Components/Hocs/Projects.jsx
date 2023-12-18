import portfolio from '../images/Portfolio.jpeg';
import Greenhubsoko from '../images/greenhubsoko.png';
import greenhubsokovideo  from '../videos/greenhubsoko.mp4';
import greenhubnews from '../images/greenhubnews.png';
import greenhubvideo from '../videos/greenhubnews.mp4';
import notebookvideo from '../videos/Notebookkincaid.mp4'
import recipe from '../images/recipe.png';
import chaus from '../images/Chaus.png'
import notebookimg from '../images/notebookkincaid.png';
import toastify from '../images/toastify.png';
import Coming from '../images/coming.png';
import cvv from '../images/cvv.png';


const projects = [
    {
        id: 1,
        label: 'CVV Shop web Application',
        image: cvv,
        type:'Client Project',
        server: 'https://cvv-shop.vercel.app/',
        tech: 'Django,PostgreSQL, ReactJs, Vite, Tailwind CSS',
        status: 'Backend almost ready',
    
        

    },
    {
        id: 2,
        label: 'Chaus Barbaque',
        image: chaus,
        github: 'https://github.com/Kincaid-kroos/Chaus-Kitchen',
        server: 'https://chaus-barbaque.vercel.app/',
        tech: 'ReactJs, Vite, Tailwind CSS',
        status: 'Deployed',
        

    },
    
    
    {
        id: 3,
        label: 'Portfolio Web',
        image: portfolio,
        github: 'https://github.com/Kincaid-kroos/kincaid',
        server: 'https://kiprotichkincaid.vercel.app/',
        tech: 'JavaScript ReactJs, Vite, HTML, CSS',
        status: 'Deployed'

    },
    {
        id: 4,
        label: 'GreenHubNews web app', 
        image: greenhubnews,
        github: 'https://github.com/Kincaid-kroos/GreenHubNews_Full-stack',
        tech: 'ReactJs, HTML, CSS, Bootstrap, Django & Postgresql',
        status: 'localhost, click the video for Demo',
        video: greenhubvideo ,
        describtion:'This is a web application that allows users to access latest news and trends accross the globe, It uses Postgresql and Django for Backend in retrieving the latest post, the admin dashboard for adding articles, authentication etc, and ReactJS frontend with other frontend technologies,  '

    },
    {
        id: 5,
        label: 'greenhubsoko web app',
        image: Greenhubsoko,
        github: 'https://github.com/Kincaid-kroos/GreenHub-Soko',
        server: 'https://greenhubsoko.vercel.app/',
        tech: 'ReactJs, Bootstrap, HTML, CSS, (Backend under dvpt with Python Django)',
        status: 'Deployed + video',
        video: greenhubsokovideo,
        describtion:'Get the latest item in town now with GreenHubSoko'

    },
    {
        id: 6,
        label: 'Recipes with Kincaid website',
        image: recipe,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        server: 'https://recipes-kincaid.vercel.app/',
        tech: 'ReactJs, API, Tailwind CSS',
        status: 'Deployed'

    },
    
    {
        id: 7,
        label: 'Notebook CRUD web app',
        image: notebookimg,
        github: 'https://github.com/Kincaid-kroos/NotebookFullstack',
        tech: 'ReactJs, HTML, CSS, Django & Postgresql',
        status: 'localhost, click the video',
        video: notebookvideo,
        describtion:'This is a simple crud web application that allows a user to add, delete, post or update an stuff. It was the most perfect start to learn full stack crud operations with python Django. It utilizes Django for Backend, PostgreSQl database and ReactJs frontend'
    },
    {
        id: 8,
        label: 'react-toastify Contact Landing Page',
        image: toastify,
        github: 'https://github.com/Kincaid-kroos/react-toaster',
        tech: 'ReactJs, Tailwind CSS',
        server: 'http://kincaid-toastify.vercel.app/',
        status: 'Deployed'
    },
    
    {
        id: 9,
        label: 'Takin Safaris',
        image: Coming,
        type: 'Client Project',
        github: 'https://github.com/Kincaid-kroos/TakinSafaris',
        tech: 'ReactJs, Tailwind CSS, Django, PostgreSQL',
        status: 'Under development'
    },
    
   


    {
        id: 10,
        label: 'Dustin BNB reservation system',
        image: Coming,
        type: 'Client Project',
        github: 'https://github.com/Kincaid-kroos/Dustin-reservation-system',
        tech: 'Django, Tailwind CSS, PostgreSQL, ReactJs',
        status: 'Under development'
    },
    //{
       // id: 9,
        //label: 'Vegee`s Ecommerce',
        //image: tos,
        //github: 'https://github.com/Kincaid-kroos/Dustin-reservation-system',
        //tech: 'Django, Tailwind, PostgreSQL, ReactJs',
        //status: 'Under development'
   // },

]

export default projects