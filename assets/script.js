//variable declarations

    //alias class as per Luxon suggestion
var DateTime = luxon.DateTime   

    //current datetime variable
var today = DateTime.now();  

    //object to store events listed on the planner;
var memo = {
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: "",
};

    //array which corresponds to the properties of memo object to make looping through object properties easier.
var keyList = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four"];

    //function which stores event text within memo object, and memo object in local storage.
function setMemo(){
    let i = parseInt(this.value); 
    let timeblock = $(".content");
    let key = keyList[i];
    memo[key] = timeblock[i].textContent;
    localStorage.setItem("memoData", JSON.stringify(memo));
}

//runtime          
    //the use of self invoking functions is merely to organize code blocks.

    //loads stored text into planner, keeps default text if no memo data for that timeslot
(function getMemo() {
    switch (localStorage.getItem("memoData")){
        case null:
            break;
        default:
            let saveMemo = JSON.parse(localStorage.getItem("memoData"));
            let timeblock = $(".content");
            for (let i = 0; i < keyList.length; i++){
                let key = keyList[i];
                if (saveMemo[key]){
                    timeblock[i].textContent = saveMemo[key];
                    memo[key] = saveMemo[key];
                }
            }
    }
})();

    //displays today's date above the planner
(function whatDay(){
    $("#today").text(today.toLocaleString(DateTime.DATE_HUGE));
})();

    //colors the timeblocks to indicate whether it is past, present, or future
(function colorBlocks() {
    
    let timeblock = $(".content");
    
    for (let i = 0; i < 8; i++){
        let adjHour = today.hour - 9;
        
        if (adjHour > i){
            timeblock[i].style.backgroundColor = "lightgray";   //past
        }
        else if (adjHour < i){
            timeblock[i].style.backgroundColor = "lightgreen";  //future
        }
        else {
            timeblock[i].style.backgroundColor = "pink";        //present
        }
    }
})();

    //triggers setMemo when the save button is clicked.
$(".saveBtn").on("click", setMemo);
    //removes default text when a timeblock is selected.
$(".content").on("focus", function(){this.textContent = "";});
    //rewrites default text if a timeblock is unselected with empty content.
$(".content").on("blur", function(){if (!this.textContent){this.textContent = "Open timeslot."}});
