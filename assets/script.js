var DateTime = luxon.DateTime   //alias class as per Luxon suggestion

var today = DateTime.now();

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

var keyList = ["nine", "ten", "eleven", "twelve", "one", "two"];

function setMemo(){
    let i = parseInt(this.value); 
    let timeblock = $(".content");
    let key = keyList[i];
    memo[key] = timeblock[i].textContent;
    localStorage.setItem("memoData", JSON.stringify(memo));
    console.log(memo);
}

(function getMemo() {
    switch (localStorage.getItem("memoData")){
        case null:
            break;
        default:
            let saveMemo = JSON.parse(localStorage.getItem("memoData"));
            let timeblock = $(".content");
            console.log(saveMemo);
            for (let i = 0; i < keyList.length; i++){
                let key = keyList[i];
                if (saveMemo[key]){
                    timeblock[i].textContent = saveMemo[key];
                    memo[key] = saveMemo[key];
                }
            }
    }
})();

(function whatDay(){
    $("#today").text(today.toLocaleString(DateTime.DATE_HUGE));
})();


(function colorBlocks() {
    
    let timeblock = $(".content");
    
    for (let i = 0; i < 8; i++){
        let adjHour = today.hour - 9;
        
        if (adjHour > i){
            timeblock[i].style.backgroundColor = "lightgray";
        }
        else if (adjHour < i){
            timeblock[i].style.backgroundColor = "lightgreen";
        }
        else {
            timeblock[i].style.backgroundColor = "pink";
        }
    }
})();

$(".saveBtn").on("click", setMemo);
$(".content").on("focus", function(){this.textContent = "";});
$(".content").on("blur", function(){if (!this.textContent){this.textContent = "Open timeslot."}});
