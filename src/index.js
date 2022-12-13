import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughImage from './assets/Laughing-Smiley.svg';

const laughing = document.getElementById('laugh')
laughing.src = laughImage

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()