import portfolio from '../images/Portfolio.jpeg';
import greenhubsoko from '../images/greenhubsoko.png';
import greenhubsokovideo  from '../videos/greenhubsoko.mp4';
import tes from '../images/Kincaid.jpg';
import tos from '../images/Kincaid.jpg';
import tus from '../images/Kincaid.jpg';
import tas from '../images/Frontend.jpeg';

const projects = [
    {
        id: 1,
        label: 'greehhubsoko web app',
        image: greenhubsoko,
        github: 'https://github.com/Kincaid-kroos/GreenHub-Soko',
        server: 'https://greenhubsoko.vercel.app/',
        tech: 'ReactJs, Vite, Bootstrap, HTML, CSS, (Backend under dvpt with Python Django)',
        video: greenhubsokovideo

    },
    {
        id: 2,
        label: 'Portfolio Web',
        image: portfolio,
        github: 'https://github.com/Kincaid-kroos/kincaid',
        server: 'https://kiprotichkincaid.vercel.app/',
        tech: 'JavaScript ReactJs, Vite, HTML, CSS'

    },
    {
        id: 3,
        label: 'recipes-kincaid web app',
        image: tas,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        server: 'https://recipes-kincaid.vercel.app/',
        tech: 'ReactJs, API , Bootstrap , Tailwind'

    },
    {
        id: 4,
        label: 'Instaverse App', 
        image: tes,
        github: 'https://github.com/Festorz/Mern-app-React-',
        server: 'https://instaverse-node.netlify.app/',
        tech: 'Mongo DB, Express, React Js, NodeJS'
    },
    {
        id: 5,
        label: 'Correct Scores Website',
        image: tos,
        github: 'https://github.com/Festorz/football-analysis-application-django',
        server: '',
        tech: 'Django, HTML, CSS, JavaScript'
    },
    {
        id: 6,
        label: 'Farming App Server',
        image: tus,
        github: 'https://github.com/Festorz/Farming-App-Server---Node-Js',
        server: 'https://play.google.com/store/apps/details?id=com.jordandevs.apps.mkulima',
        tech: 'NodeJS, Express, AWS Services'
    },
]

export default projects