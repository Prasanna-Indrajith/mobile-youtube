// const myModule = require('./keyGen');
// console.log(myModule.apiKey);

// import * as dotenv from 'dotenv'

// dotenv.config({ path: '.env' });
// const apiKey = process.env.API_KEY;

// console.log(key())
// import dotenv from '../../node_modules/dotenv/lib/main.js';
// dotenv.config({ path: '.env' });
// import path from 'path';

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// export const key = () => {
//   return process.env.API_KEY;
// };

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': myModule.apiKey,
//         'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
//     }
// };

// fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=computer%2Bgaming', options)
//     .then(response => response.json())
//     .then(response => {
//         for (item in response.items) {
//             if (response.items[item].type == "video") {
//                 let renderItem = response.items[item]
//                 videoRenderElement.innerHTML += (videoTemplate(renderItem.title, renderItem.author.name, renderItem.views, renderItem.duration, renderItem.uploadedAt, renderItem.bestThumbnail.url, renderItem.author.bestAvatar.url))

//             }
//         }
//     })
//     .catch(err => console.error(err));

import { myModule } from "./functions/videoTemplate.js";

let videos = [
  {
    title: "The Science of Sleep: How Your Brain Rests and Recovers",
    userName: "ScienceGeek101",
    views: 585,
    duration: "10.00",
    ago: "8 Days",
    thumbnailSrc:
      "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    title: "The Amazing World of Microbes: How They Shape Our Lives",
    userName: "MicrobeMania",
    views: 999,
    duration: "08.00",
    ago: "4 Days",
    thumbnailSrc:
      "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    title: "The Physics of Roller Coasters: How They Thrill and Excite Us",
    userName: "RollerCoasterFanatic",
    views: 14,
    duration: "12.00",
    ago: "1 Month",
    thumbnailSrc:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    title:
      "The Chemistry of Cooking: How Heat and Chemical Reactions Transform Food",
    userName: "ChefScience",
    views: 452,
    duration: "10.00",
    ago: "5 Months",
    thumbnailSrc:
      "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel",
  },
  {
    title: 'The Biology of Aging: How Our Cells Change Over Time"',
    userName: "AgelessWonderScience",
    views: 894,
    duration: "20.00",
    ago: "2 Days",
    thumbnailSrc:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    title: "How to Build a Gaming PC:Step-by-Step Guide for Beginners",
    userName: "PCMasterRace101",
    views: 268,
    duration: "20.00",
    ago: "8 Days",
    thumbnailSrc:
      "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel",
  },
  {
    title:
      "The Future of Artificial Intelligence: How It Will Change Our Lives",
    userName: "AIEnthusiast2021",
    views: 195,
    duration: "15.00",
    ago: "9 Days",
    thumbnailSrc:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300",
    dpSrc: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
];

window.addEventListener("load", () => {
  // videoRenderElement = document.getElementById("video-render-element");

  for (let video in videos) {
    myModule.videoRenderElement.innerHTML += myModule.videoTemplate(
      videos[video].title,
      videos[video].userName,
      videos[video].views,
      videos[video].duration,
      videos[video].ago,
      videos[video].thumbnailSrc,
      videos[video].dpSrc
    );
  }
});
