const myModule = {
  videoTemplate: function (
    title,
    userName,
    views,
    duration,
    ago,
    thumbnailSrc,
    dpSrc
  ) {
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
            `;
  },
  videoRenderElement: document.getElementById("video-render-element"),
  name: "Prasa",
};

export { myModule };
