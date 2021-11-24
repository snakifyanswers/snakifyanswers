var isDisplaying = false
var currentModule = 0;

function createModule1(){
    if(isDisplaying){
        var lessonSelector = document.getElementById("lesson-selector");
        lessonSelector.remove();
        isDisplaying = false;
        currentModule = 0;
    } else{
        var lessonSelector = document.createElement("div");
        lessonSelector.classList.add("lesson-selector")
        lessonSelector.id = "lesson-selector";

        createLesson(lessonSelector, "Sum of three numbers", "2d526d30bfdaddc3b1853f96456e0947")
        var main = document.getElementById("main");
        main.appendChild(lessonSelector);
        isDisplaying = true;
        currentModule = 1;
    }
}

function createLesson(lessonSelector, text, gistId){
    var lessonDiv = document.createElement("div");
    lessonDiv.innerText = text;
    lessonDiv.onclick = function(){
        createGist(gistId);
    }
    lessonSelector.appendChild(lessonDiv);
}

function createGist(gistId = "bd10e846c6eae4419c3041f3da1b82a0"){
    var script = document.createElement("script");
    script.src = "https://gist.github.com/snakifyanswers/" + gistId + ".js";
    document.body.appendChild(script)    
}
