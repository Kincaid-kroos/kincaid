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
        label: 'greenhubsoko web app',
        image: greenhubsoko,
        github: 'https://github.com/Kincaid-kroos/GreenHub-Soko',
        server: 'https://greenhubsoko.vercel.app/',
        tech: 'ReactJs, Vite, Bootstrap, HTML, CSS, (Backend under dvpt with Python Django)',
        status: 'Deployed + video',
        video: greenhubsokovideo

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
        label: 'recipes-kincaid website',
        image: tas,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        server: 'https://recipes-kincaid.vercel.app/',
        tech: 'ReactJs, API , Bootstrap , Tailwind',
        status: 'Deployed'

    },
    {
        id: 4,
        label: 'GreenHubNews web app', 
        image: tes,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        tech: 'ReactJs, HTML, CSS, Bootstrap, Django & Postgresql',
        status: 'localhost, click the video for Demo',
        video: greenhubsokovideo
    },
    {
        id: 5,
        label: 'Takin Safaris website',
        image: tos,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        server: 'https://takin-safaris.vercel.app/',
        tech: 'ReactJs, Bootstrap, Tailwind, JavaScript, vite',
        status: 'Deployed'
    },
    {
        id: 6,
        label: 'Notebook Todo web app',
        image: tus,
        github: 'https://github.com/Kincaid-kroos/recipeSearchApi',
        tech: 'ReactJs, HTML, CSS, Django & Postgresql',
        status: 'localhost, click the video',
        video: greenhubsokovideo
    },
]

export default projects