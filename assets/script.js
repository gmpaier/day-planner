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
}


function setMemo(){
    let i = parseInt(this.value); 
    let timeblock = $(".content");
    memo[i] = trim(timeblock[i].textContent);
    localStorage.setItem("memoData", JSON.stringify(memo));
}

(function getMemo() {
    switch (localStorage.getItem("memoData")){
        case null:
            break;
        default:
            let saveMemo = JSON.parse(localStorage.getItem("memoData"));
            let timeblock = $(".content");
            for (i in saveMemo){
                if (saveMemo[i]){
                    timeblock[i].textContent = saveMemo[i];
                    memo[i] = saveMemo[i];
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
