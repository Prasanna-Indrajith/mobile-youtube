import * as env from 'dotenv'

env.dotenv.config()

console.log(process.env.API_KEY)

let videoRenderElement = document.querySelector("main");


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
};

fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=computer%2Bgaming', options)
    .then(response => response.json())
    .then(response => {
        for (item in response.items) {
            if (response.items[item].type == "video") {
                let renderItem = response.items[item]
                videoRenderElement.innerHTML += (videoTemplate(renderItem.title, renderItem.author.name, renderItem.views, renderItem.duration, renderItem.uploadedAt, renderItem.bestThumbnail.url, renderItem.author.bestAvatar.url))

            }
        }
    })
    .catch(err => console.error(err));




let videos = [
    {
        'title': 'The Science of Sleep: How Your Brain Rests and Recovers',
        'userName': 'ScienceGeek101',
        'views': 585,
        'duration': '10.00',
        'ago': '8 Days',
        'thumbnailSrc': 'https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
        'title': 'The Amazing World of Microbes: How They Shape Our Lives',
        'userName': 'MicrobeMania',
        'views': 999,
        'duration': '08.00',
        'ago': '4 Days',
        'thumbnailSrc': 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=female'
    },
    {
        'title': 'The Physics of Roller Coasters: How They Thrill and Excite Us',
        'userName': 'RollerCoasterFanatic',
        'views': 14,
        'duration': '12.00',
        'ago': '1 Month',
        'thumbnailSrc': 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
        'title': 'The Chemistry of Cooking: How Heat and Chemical Reactions Transform Food',
        'userName': 'ChefScience',
        'views': 452,
        'duration': '10.00',
        'ago': '5 Months',
        'thumbnailSrc': 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=pixel'
    },
    {
        'title': 'The Biology of Aging: How Our Cells Change Over Time"',
        'userName': 'AgelessWonderScience',
        'views': 894,
        'duration': '20.00',
        'ago': '2 Days',
        'thumbnailSrc': 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
        'title': 'How to Build a Gaming PC:Step-by-Step Guide for Beginners',
        'userName': 'PCMasterRace101',
        'views': 268,
        'duration': '20.00',
        'ago': '8 Days',
        'thumbnailSrc': 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=pixel'
    },
    {
        'title': 'The Future of Artificial Intelligence: How It Will Change Our Lives',
        'userName': 'AIEnthusiast2021',
        'views': 195,
        'duration': '15.00',
        'ago': '9 Days',
        'thumbnailSrc': 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
        'dpSrc': 'https://xsgames.co/randomusers/avatar.php?g=female'
    }
]

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    for (let video in videos) {
        // videoRenderElement.innerHTML += (videoTemplate(videos[video]['title'], videos[video]['userName'], videos[video]['views'], videos[video]['duration'], videos[video]['ago'], videos[video].thumbnailSrc, videos[video].dpSrc))
    }
});

function videoMoreOptions(e) {
    // console.log(e)

    e.parentElement.innerHTML += moreOptionMenu
    // e.parentElement.children[1].classList.remove("hide")
    // e.parentElement.children[1].children[0].style.transform = 'translatey(0px)'

}

function moreOptionLink(e, message) {
    // let svg = e.childElement[0]
    // console.log(svg)
    let msgElement =
        `<div class="more-options-msg">
        <p>${message}</p>
        </div>`
    // e.parentElement.parentElement.parentElement.classList.add("hide")
    // console.log(e.parentElement.parentElement.parentElement.parentElement)
    // console.log(message)
    let element = e.parentElement.parentElement.parentElement.parentElement
    e.parentElement.parentElement.parentElement.remove()
    element.innerHTML += msgElement

    const elementAnimation = setTimeout(() => {
        element.lastChild.style.transform = 'translatey(110%)'
        element.lastChild.style.opacity = 0
        // element.lastChild.remove()
        // console.log(element.lastChild.remove),
    }, 2000)

    const elementRemove = setTimeout(() => {
        element.lastChild.remove()
        // console.log(element.lastChild.remove),
    }, 2100)

}


let moreOptionMenu = `<div class="more-options-menu">
<ul>
    <li>
        <span onclick="moreOptionLink(this, 'saved to watch later!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Save to Watch later</p>
        </span>
    </li>
    <li>
        <span onclick="moreOptionLink(this, 'Saved to playlist!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Save to playlist</p>
        </span>
    </li>
    <li>
        <span onclick="moreOptionLink(this, 'Shared!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            <p>Share</p>
        </span>
    </li>
    <li>
        <span onclick="moreOptionLink(this, 'I got it!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <p>Not interested</p>
        </span>
    </li>
    <li>
        <span onclick="moreOptionLink(this, 'No further suggest this channel!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            <p>Don't recommend channel</p>
        </span>
    </li>
    <li>
        <span onclick="moreOptionLink(this, 'Reported!')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
            <p>Report</p>
        </span>
    </li>
</ul>
</div>`

function videoTemplate(title, userName, views, duration, ago, thumbnailSrc, dpSrc) {
    return `
    <div class="video">
        <div class="a-video-container">
            <a href="#">
                <div class="a_video thumbnail">
                    <img class="a_video"
                        src="${thumbnailSrc}"
                        alt="thumbnail">
                </div>
                <span style="font-size: 12px;">${duration}</span>

            </a>
        </div>
        <div class="meta-info">
            <div>
                <a href="/profile.html">
                    <img src="${dpSrc}" alt="profile-img" class="videoDP">
                </a>
                <div class="right-side">
                        <h3 class="video-title">${title}</h3>
                        <span onclick="">
                            <p class="video-user">${userName}</p>
                            <p class="video-views">${views} Views</p>
                            <p class="video-date">${ago} ago</p>
                        </span>
                </div>
            </div>
            <div class="more-options">
                <span onclick="videoMoreOptions(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
    `
}