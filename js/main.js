var isDisplaying = false
var currentModule = 0;
var module1 = document.getElementById("module1");

function createModule1(){
    console.info("create module");
    //var lessonSelector = document.getElementById("lesson-selector")
    //lessonSelector.remove();
    if(isDisplaying){
        var lessonSelector = document.getElementById("lesson-selector");
        lessonSelector.remove();
        isDisplaying = false;
        currentModule = 0;
    } else{
        var main = document.getElementById("main");

        var lessonSelector = document.createElement("div");
        lessonSelector.classList.add("lesson-selector")
        lessonSelector.id = "lesson-selector";

        for (let i = 0; i < 9; i++) {
            var lessonDiv = document.createElement("div");
            lessonDiv.id = "lesson1";
            lessonDiv.innerText = i + 1;
            lessonSelector.appendChild(lessonDiv);
        }

        main.appendChild(lessonSelector);
        isDisplaying = true;
        currentModule = 1;
    }
}

function openScriptPopup(url){
    
}
