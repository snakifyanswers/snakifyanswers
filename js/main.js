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
                createLesson(lessonSelector, "Last digit of integer","d41c3de0d5e589bbdb69df70b0e191a9",0);
                createLesson(lessonSelector, "Tens digit", "b5f09ac0f93f88c452ff98071100560f",1);
                createLesson(lessonSelector, "Sum of digits", "bcaf27c55d150eb1965c03963dd64a88", 2);
                createLesson(lessonSelector, "Fractional Part", "095150ef3e177f5d351f43cf7a91f47e", 3);
                createLesson(lessonSelector, "First digit after decimal point", "d2b75ba8f545eb7850f224db08808ce7", 4);
                createLesson(lessonSelector, "Car route", "b2344f3630604234b87c5eed77a18ce3", 5);
                createLesson(lessonSelector, "Digital Clock", "9c5390656207c3d88dafdb1417b683c4", 6);
                createLesson(lessonSelector, "Total cost", "48e783127e8645215dd0e1018bbf278e", 7);
                createLesson(lessonSelector, "Clock face - 1", "256dddcba28362aa2a3307791cf2a8b3", 8);
                createLesson(lessonSelector, "Clock face - 2", "8b888e4833bee0828e3b00040b8c8c9f");
                break; 
            case 3:
               createLesson(lessonSelector, "Minimum of two numbers", "2be5b6a98fc2ccf93e85a3276348881f", 0);
               createLesson(lessonSelector, "Sign function", "5452f6103c0484b07715df3ea08a3eb0", 1);
               createLesson(lessonSelector, "Minimum of three numbers", "189226775bfcafea60f557a22c0fa6b9", 2);
               createLesson(lessonSelector, "Equal numbers", "c7158e4c20be228ceadc5455d8b67d47", 3);
               createLesson(lessonSelector, "Rook Move", "a2b5e67c61ff92312956bb7eeca6e6c9", 4);
               createLesson(lessonSelector, "Chess board - same color", "47ad6d691966a459b035de1e69a512ec", 5);
               createLesson(lessonSelector, "King move", "44d8ab817a323c957b7dd292323e69d3", 6);
               createLesson(lessonSelector, "Bishop moves", "c545a7e6ce6f88155a349706c3839b77", 7);
               createLesson(lessonSelector, "Queen move", "67ac272e3bfbffd471fed54d9ad650fd", 8);
               createLesson(lessonSelector, "Knight move", "fa0a5a01146543321fb0d391e21d06c5", 9);
               createLesson(lessonSelector, "Chocolate bar", "637ced3d3a9caf9115064258b05771f7", 10);
               createLesson(lessonSelector, "Leap year", "0e466d9dc0bdc06a72fa2df9cd0497b7", 11);
               break;
            case 4:
                createLesson(lessonSelector, "Series - 1", "e209476a0ea1c482ce027833a65b4291", 0);
                createLesson(lessonSelector, "Series - 2", "959254291d9454f70ba78d7b98313376", 1);
                createLesson(lessonSelector, "Sum of ten numbers", "be18f6f5f6a732bcbc3737c94ef98fa9", 2);
                createLesson(lessonSelector, "Sum of N numbers", "b40a6c50bf52da92c191f2c19da66f4e", 3);
                createLesson(lessonSelector, "Sum of cubes", "f4928734bc7f843b4170d02e70c2d705", 4);
                createLesson(lessonSelector, "Factorial", "ae1fec70ccbae1b88e06c5350d22ff1f", 5);
                createLesson(lessonSelector, "The number of zeros", "068dfb17f2d0748cd433299b773d3d75", 6);
                createLesson(lessonSelector, "Adding factorials", "961e7f045b254524f8c8a3d22638f71e", 7);
                createLesson(lessonSelector, "Ladder", "5b246a966692451481c05c3cbe598169", 8);
                createLesson(lessonSelector, "Lost card", "6f5d92ec45c3f6f89163c4badc9ecf98", 9);
                break;
            case 5:
                createLesson(lessonSelector, "Slices", "23054bb01e6d0d63531567230d94f01c", 0)
                createLesson(lessonSelector, "The number of words", "cf1e044cebbeabbc1b48c8dfa6331c7f", 1);
                createLesson(lessonSelector, "The two halves", "da3371da3cd322b504217c12ee4e6cd9", 2);
                createLesson(lessonSelector, "To swap the two words", "8c2687bda9737cf9f632fff8c99a135d", 3);
                createLesson(lessonSelector, "The first and last occurrence", "45111f7b60ee3de8b46471e37feab033", 4);
                createLesson(lessonSelector, "The second occurrence", "28646e7835d88f2e2d3d7b545adceae4", 5);
                createLesson(lessonSelector, "Remove the fragment", "bf9e17902e2b093e663aea95cf663c87", 6);
                createLesson(lessonSelector, "Reverse the fragment", "3a1ef98691d2a5997472815fb9e10374", 7);
                createLesson(lessonSelector, "Replace the substring", "9cda70ae48b0d3085739e9a96c9beeff", 8);
                createLesson(lessonSelector, "Delete a character", "3aff79c87c40de7b20abb6ac468eb6c8", 9);
                createLesson(lessonSelector, "Replace within the fragment", "ad3a4588694a8bb6a4610677e1541f99", 10);
                createLesson(lessonSelector, "Delete every third character", "097980beb2544cc66bb98669d96aa25b", 11);
                break;
            case 6:
                createLesson(lessonSelector, "List of squares", "ce3e74c8863cecbe2f8823bebf7db90b", 0);
                createLesson(lessonSelector, "Least divisor", "29fac93ea94b9290a0b4a9a79b6b9352", 1);
                createLesson(lessonSelector, "The power of two", "5e0c6c8c5960b38c3ef1db18b8ed95b2", 2);
                createLesson(lessonSelector, "Morning jog", "c18aada603a3b1b6a707a6897ff8d175", 3);
                createLesson(lessonSelector, "The length of the sequence", "239a2f10d00c6d1828e2ae99a55da7f7", 4);
                createLesson(lessonSelector, "The sum of the sequence", "17a790a16c3ada697219099fa41efb10", 5)
                createLesson(lessonSelector, "The average of the sequence", "e8d5fc1ba2d64051aa77b92cfba8e387", 6);
                createLesson(lessonSelector, "The maximum of the sequence", "ca08ee254e0513b46b1ff913695692b7", 7);
                createLesson(lessonSelector, "The index of the maximum of a sequence", "19036e927ce895e08ee76bb40ecae9a5",8);
                createLesson(lessonSelector, "The number of even elements of the sequence", "719296df685d9943ae69caa77b7a7d59", 9);
                createLesson(lessonSelector, "The number of elements that are greater than the previous one", "030d9e0d855d47397a28d52cafc3cc2d", 10);
                createLesson(lessonSelector, "The second maximum", "e17d6ab2c4d3d709154624f237d687a9", 11);
                createLesson(lessonSelector, "The number of elements equal to the maximum", "315106136d85acfcb10fd7cf8ee0913a", 12);
                createLesson(lessonSelector, "Fibonacci numbers \n", "c76e44287e3532486cb682cd41d7061b", 13);
                createLesson(lessonSelector, "The index of a Fibonacci number", "8c7bcbc0585fe08c6375973fc3e9e7e1", 14);
                createLesson(lessonSelector, "The maximum number of consecutive equal elements", "85e0c14c78f9aac02cc08a649cfc01f9", 15);
                break;
            case 7:
                createLesson(lessonSelector, "Even indices", "27ac68985b93059342e5751cff76314b", 0);
                createLesson(lessonSelector, "Even elements", "4bff04c288ee6ed16b7b12057027a2ae", 1);
                createLesson(lessonSelector, "Greater than previous", "ebf7f52dae48a71c781c11ea3fbff2d4", 2);
                createLesson(lessonSelector, "Neighbours of the same sign", "160950f3831c02e0c9ce7c642c49dd63", 3);
                createLesson(lessonSelector, "Greater than neighbours", "5ee42424418794af4a87165e6f99f9aa", 4);
                createLesson(lessonSelector, "The largest element", "bd99859b9b6d3d6eb34acd30436f77dd", 5);
                createLesson(lessonSelector, "The number of distinct elements", "f100376cabb490cabeda7896e304c58c", 6);
                createLesson(lessonSelector, "Swap neighbours", "31d1dd732fb7ce38d2136db0d21c5865", 7);
                createLesson(lessonSelector, "Swap min and max", "293de38ccbc27f2dfce6f13c0a9a0038", 8);
                createLesson(lessonSelector, "The number of pairs of equal", "41fc7d911acfbe14cec9d48ca403cc00", 9);
                createLesson(lessonSelector, "Unique elements", "75511398074f0e4e9eda9ab79bb3c0bc", 10);
                createLesson(lessonSelector, "Queens", "364432fcd6643786b15d6dc63868a696", 11);
                createLesson(lessonSelector, "The bowling alley", "2fb0840b6b43ec5f974e9199ca18008b", 12);
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
    //console.info(document.getElementById("lesson-selector"));
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
