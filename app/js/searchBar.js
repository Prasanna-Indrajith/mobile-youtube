import { myModule } from "./functions/videoTemplate.js";

const videoRenderElement = document.getElementById("video-render-element");
const searchBar = document.getElementsByClassName("search-bar");
let searchFeild;

function navBtnAction(event, btnName) {
  console.log("hbhjbhjbhjb");
  if (btnName == "search") {
    searchBar[0].classList.remove("hide");
    return (searchFeild = document.getElementById("search-feild"));
  }
}

const back = () => {
  searchBar[0].classList.add("hide");
  searchFeild.value = "";
};

const search = (event, name) => {
  //   console.log(event.keyCode); keyCode = 13 is "Enter" button
  if (event.keyCode === 13 || name == "searchBtn") {
    console.log("Searching...");
    searchBar[0].classList.add("hide");
    //   in here we wanna serchFeild's text  into api, before clear the search feild
    //   videoRenderElement.innerHTML = videoTemplate(1, 1, 1, 1, 1, 1, 1);
    myModule.videoRenderElement.innerHTML = "";
    searchFeild.value = "";
  }
};
