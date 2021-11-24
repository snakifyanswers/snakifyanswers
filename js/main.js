var isDisplayingLesson = false;
var isDisplayingAnswer = false;
var currentModule = 0;
var currentAnswer = 0;

function createModule(num){
    if(isDisplayingLesson && currentModule == num){
        var lessonSelector = document.getElementById("lesson-selector");
        lessonSelector.remove();
        var answerDiv = document.getElementById("answerDiv");
        if(answerDiv != null){
            answerDiv.remove();
        }
        isDisplayingLesson = false;
        isDisplayingAnswer = false;
        currentAnswer = 0;
        currentModule = num;
    }else if(isDisplayingLesson && currentModule != num){
        var lessonSelector = document.getElementById("lesson-selector");
        lessonSelector.remove();
        var answerDiv = document.getElementById("answerDiv");
        if(answerDiv != null){
            answerDiv.remove();
        }
        isDisplayingLesson = false;
        isDisplayingAnswer = false;
        currentModule = 0;
        currentAnswer = 0;
        createModule(num);
        return;
    }
    else{
        var lessonSelector = document.createElement("div");
        lessonSelector.classList.add("lesson-selector")
        lessonSelector.id = "lesson-selector";

        switch(num){
            case 1:
                createLesson(lessonSelector, "Sum of three numbers", "2d526d30bfdaddc3b1853f96456e0947",0);
                createLesson(lessonSelector, "Hi John", "2c0d54de9f97b7afb8f8781b92b96cea",1);
                createLesson(lessonSelector, "Square", "c0f7a581927c06c0db43d904d61d1ea7",2);
                createLesson(lessonSelector, "Area of right-angled triangle", "8cb0083a4b07d098db5b49ee4b4359c0", 3);
                createLesson(lessonSelector, "Hello, Harry!", "68b6a68f0615f2c4ba640934ddeac8d8", 4);
                createLesson(lessonSelector, "Apple sharing", "0f2c17cea733fe88d1bc6d270af7f38c", 5);
                createLesson(lessonSelector, "Previous and next", "99ad92fa38e7b9eaf711c8b58b5bec37", 6)
                createLesson(lessonSelector, "Two timestamps", "c6cb076c96e3c5615e741c6fbaddda82", 7);
                createLesson(lessonSelector, "School desks", "c0238adf693a63a5ba77dd4c9966c5f7", 8);
                break;
            case 2:
                createLesson(lessonSelector, "Example 2","bd10e846c6eae4419c3041f3da1b82a0",0);
                break;
            }


        var main = document.getElementById("main");
        main.appendChild(lessonSelector);
        isDisplayingLesson = true;
        currentModule = num;
    }
}

function createLesson(lessonSelector, text, gistId = "bd10e846c6eae4419c3041f3da1b82a0", id=-1){
    var lessonDiv = document.createElement("div");
    lessonDiv.innerText = text;
    lessonDiv.id = id;
    lessonDiv.onclick = function() {
        createGist(gistId, id);
        
    }
    lessonSelector.appendChild(lessonDiv);
}

function createGist(gistId = "bd10e846c6eae4419c3041f3da1b82a0", id = -1){
    if(isDisplayingAnswer && id == currentAnswer){
        var answerDiv = document.createElement("div");
        answerDiv.remove();
        return;
    } else if(isDisplayingAnswer && id != currentAnswer){
        var answerDiv = document.getElementById("answerDiv");
        answerDiv.remove();
    }
    var answerDiv = document.createElement("div");
    answerDiv.classList.add("answerDiv");
    answerDiv.id = "answerDiv";
    document.body.appendChild(answerDiv);
    
    postscribe(answerDiv, "<script src=\"https://gist.github.com/snakifyanswers/" + gistId + ".js\"></script>");

    isDisplayingAnswer = true;
    currentAnswer = id;
}
