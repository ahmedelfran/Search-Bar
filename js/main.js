let searchBar = document.querySelector(".search-bar");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".auto-com");

let searchBtn = document.querySelector(".search-btn");
let classBtn = document.querySelector(".class-btn");

inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase
            // and
            // return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchBar.classList.add("active"); // show auto complete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        };
    } else {
        searchBar.classList.remove("active"); // hide auto complete box
    }
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchBar.classList.remove("active"); // hide auto complete box
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

/////////////// Animated ////////////////////

searchBtn.onclick = () => {
    searchBar.classList.add("activeBtn");
}

classBtn.onclick = () => {
    searchBar.classList.remove("activeBtn");
    searchBar.classList.remove("active");
}




