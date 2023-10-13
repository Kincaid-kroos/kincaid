import portfolio from '../images/Portfolio.jpeg';
import greenhubsoko from '../images/greenhubsoko.png';
import greenhubsokovideo  from '../videos/greenhubsoko.mp4';
import greenhubnews from '../images/greenhubnews.png';
import greenhubvideo from '../videos/greenhubnews.mp4';
import notebookvideo from '../videos/Notebookkincaid.mp4'
import tos from '../images/Kincaid.jpg';
import notebookimg from '../images/notebookkincaid.png';
import toastify from '../images/toastify.png';

const projects = [
    {
        id: 1,
        label: 'greenhubsoko web app',
        image: greenhubsoko,
        github: 'https://github.com/Kincaid-kroos/GreenHub-Soko',
        server: 'https://greenhubsoko.vercel.app/',
        tech: 'ReactJs, Vite, Bootstrap, HTML, CSS, (Backend under dvpt with Python Django)',
        status: 'Deployed + video',
        video: greenhubsokovideo,
        describtion:'Get the latest item in town now with GreenHubSoko'

    },
    {
        id: 2,
        label: 'Portfolio Web',
        image: portfolio,
        github: 'https://github.com/Kincaid-kroos/kincaid',
        server: 'https://kiprotichkincaid.vercel.app/',
        tech: 'JavaScript ReactJs, Vite, HTML, CSS',
        status: 'Deployed'

    },
    {
        id: 3,
        label: 'GreenHubNews web app', 
        image: greenhubnews,
        github: 'https://github.com/Kincaid-kroos/GreenHubNews_Full-stack',
        tech: 'ReactJs, HTML, CSS, Bootstrap, Django & Postgresql',
        status: 'localhost, click the video for Demo',
        video: greenhubvideo ,
        describtion:'This is a web application that allows users to access latest news and trends accross the globe, It uses Postgresql and Django for Backend in retrieving the latest post, the admin dashboard for adding articles, authentication etc, and ReactJS frontend with other frontend technologies,  '

    },
    
    {
        id: 4,
        label: 'react-toastify website',
        image: toastify,
        github: 'https://github.com/Kincaid-kroos/react-toaster',
        tech: 'ReactJs, Tailwind CSS',
        server: 'http://kincaid-toastify.vercel.app/',
        status: 'Deployed'
    },
    {
        id: 5,
        label: 'Takin Safaris website',
        image: tos,
        github: 'https://github.com/Kincaid-kroos/TakinSafaris',
        server: 'https://takin-safaris.vercel.app/',
        tech: 'ReactJs, Bootstrap, Tailwind, JavaScript, vite',
        status: 'Under development'
    },
    {
        id: 6,
        label: 'Notebook web application',
        image: notebookimg,
        github: 'https://github.com/Kincaid-kroos/NotebookFullstack',
        tech: 'ReactJs, HTML, CSS, Django & Postgresql',
        status: 'localhost, click the video',
        video: notebookvideo,
        describtion:'This is a simple crud web application that allows a user to add, delete, post or update an stuff. It was the most perfect start to learn full stack crud operations with python Django. It utilizes Django for Backend, PostgreSQl database and ReactJs frontend'
    },
    {
        id: 7,
        label: 'recipes-kincaid website',
        image: tos,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        server: 'https://recipes-kincaid.vercel.app/',
        tech: 'ReactJs, API , Bootstrap , Tailwind',
        status: 'Under development'

    },


    {
        id: 8,
        label: 'Dustin BNB reservation system',
        image: tos,
        github: 'https://github.com/Kincaid-kroos/Dustin-reservation-system',
        tech: 'Django, Tailwind, PostgreSQL, ReactJs',
        status: 'Under development'
    },
    {
        id: 9,
        label: 'Vegee`s Ecommerce',
        image: tos,
        github: 'https://github.com/Kincaid-kroos/Dustin-reservation-system',
        tech: 'Django, Tailwind, PostgreSQL, ReactJs',
        status: 'Under development'
    },

]

export default projects