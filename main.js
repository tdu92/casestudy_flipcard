let e = document.getElementById('myCanvas');
elemLeft=e.offsetLeft;
elemTop=e.offsetTop;
context=e.getContext("2d");

//khai bao mang listCard la mang rong de chua cac objects Card moi sinh ra
let listCard = [];
//khai bao bien rows, column
let rows = 2;
let columns = 7;

let colors = [
    ["red", "green", "blue", "yellow", "brown" , "orange","gray"],
    ["yellow", "orange", "red","gray", "brown", "green", "blue"],
]

//tao ham sinh objects Card
function getListCard() {
    for (let i = 0; i < rows; i++) {
        listCard.push([])
        for (let j = 0; j < columns; j++) {
            listCard[i][j] = new Card(50 + (100 + 20) * j,50 + (200 + 20) * i,100,200, colors[i][j]);
        }
    }
}
getListCard();

//tao ham hien thi mang listCard sau khi da sinh cac objects
function drawListCard() {
    for (let i = 0; i < listCard.length; i++) {
        for (let j = 0; j < listCard[i].length; j++) {
            listCard[i][j].drawCard();
        }
    }
}
drawListCard();

function play() {

        drawListCard();
        check();
        checkWin();
    requestAnimationFrame(play);
}
play();

e.addEventListener('click', function(event) {
    // toa do x cua con chuot
    let xVal = event.clientX;
    //toa do y cua con chuot
    let yVal = event.clientY;
    listCard.forEach(function (ele) {
        ele.forEach(function (card) {
            if (yVal > card.y && yVal < card.y + card.height && xVal > card.x && xVal < card.x + card.width) {
                card.showColor();
            }
        })
    });
}, false);

function check() {
    let arr = []
    for (let i = 0; i < listCard.length; i++) {
        for (let j = 0; j < listCard[i].length; j++) {
            if (listCard[i][j].open === true) {
                if (arr.length < 2) {
                    arr.push([i, j])
                }
            }
        }
    }

    if (arr.length === 2) {
        if (listCard[arr[0][0]][arr[0][1]].color === listCard[arr[1][0]][arr[1][1]].color){
            console.log(listCard[arr[0][0]][arr[0][1]])
            listCard[arr[0][0]][arr[0][1]].reopen = false;
            listCard[arr[1][0]][arr[1][1]].reopen = false;
            arr = []
            console.log(arr)
        }
    }

}

function checkWin() {
    let check = false;
    for (let i = 0; i < listCard.length; i++) {
        for (let j = 0; j < listCard[i].length; j++) {
            if (listCard[i][j].reopen !== true) {
                check = false;
                break;
            }
        }
    }
    if (check==true){
        alert("You win");
    }
    // return check;
}




