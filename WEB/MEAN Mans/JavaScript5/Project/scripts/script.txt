ヒシャム = new Date();

let myArray = [], a = [], randomArray = [], flag = 0, colorChanger = 0, flag2 = 0;
let colorsArr = "#098e #101e #2a8e #3c3e #488e #598e #637e #733e #837e #923e #a68e #b18e #c36e #d68e #e28e #f37e".split(' ');

function $(query) {
    let selection = document.querySelectorAll(query);
    return selection.length - 1 && selection.length ? selection : selection[0];
} // my own query selector

function classSplit(HTML_Element) {
//     return HTML_Element.className.split(',').map(function (value) {
//         return parseInt(value)
//     });
    let indexes = HTML_Element.className;
    return [indexes[0], indexes[2]]
} //  split class in the <tr> inputs

function showMessage() {
    let message = $('.message');

    let animation = setInterval(function () {
        if (flag2) {
            clearInterval(animation);
            return flag2--;
        }
        message.style.color = colorsArr[colorChanger++];
        if (colorChanger >= colorsArr.length) colorChanger = 0; // change font color into the message box

        if (flag) {
            flag--;
            message.style.fontSize = "5em";
        }
        else {
            flag++;
            message.style.fontSize = "3em";
        }
    }, 2e3); // resize the message box every two seconds

    if (message.style.display === 'none') message.style.display = 'inline-block';
    setTimeout(function () {
        flag2++;
        message.style.display = 'none';
    }, 17e3)
} // show message the hide it after a while

const allowedGames = {'4x4': {length: 4, disabled: 5, enabled: 11, sqrtLength: 2, startKey: 49, startKeyNum: 97}};

let game = allowedGames['4x4'];

let allowedKeys = Array.from({length: game.length}, function (value, index) {
    return index + game.startKey; // Create allowed key on keyboard for number
}).concat(Array.from({length: game.length}, function (value, index) {
    return index + game.startKeyNum; // Create allowed key on keyboard numbers on NumLock
})).concat([9, 16, 37, 38, 39, 40, 116]);  // Create allowed key for Arrows

myArray = Array.from({length: game.length}, function (number, index) {
    return ++index;
}).map(function (number, index, array) {
    return array.slice(index).concat(array.slice(0, index));
}); // Create a generic array of to show them at the game

function createArray() {
    do {
        if (!myArray.length) {
            myArray = randomArray;
            randomArray = []
        }
        for (let i = 0; i < myArray.length + randomArray.length; i++) {
            randomArray.push(myArray.splice(parseInt(Math.random() * myArray.length), 1)[0]);
        }
        a = randomArray;
    } while (a[0][0] + a[0][1] + a[1][0] + a[1][1] !== a[0][2] + a[0][3] + a[1][2] + a[1][3] ||
    a[2][0] + a[2][1] + a[3][0] + a[3][1] !== a[2][2] + a[2][3] + a[3][2] + a[3][3]);
} // check in all every for 4x4 box are contain [1,2,3,4]

addEventListener("load", function () {
    let message = $('.message');

    $('div button[value=y]').addEventListener('click', function () {
        $("table tbody").innerHTML = '';
        let audio = $('audio');
        let counter = 120;

        let timer = setInterval(function () {
            let seconds = Math.floor(counter % 60);
            let minutes = Math.floor(counter / 60);
            let timerSelector = $('div span');
            timerSelector[1].innerText = seconds.toString().length - 1 ? seconds : '0' + seconds;
            timerSelector[0].innerText = minutes.toString().length - 1 ? minutes : '0' + minutes;
            counter--;

            if (!counter) {
                timerSelector[0].innerText = '00';
                timerSelector[1].innerText = '00';
                clearInterval(timer);

                message.innerHTML = `<img src='./images/lose.gif'><br>Good luck next time`;
                message.style.backgroundColor = "white";
                showMessage();

                if (audio.autoplay = 'none') audio.autoplay = true;
                audio.src = "./audio/lose.mp3";

                $('.prompt').style.display = 'table';
                $('#game').style.display = 'none';
            } // --------------- Handling with losers -----------------
        }, 1e3); // Timer

        createArray();
        $('#game').style.display = 'block';
        $('.prompt').style.display = 'none';

        randomArray.forEach(function (array, index1) {
            let res = "<tr>";
            array.forEach(function (number, index2) {
                res += `<td><input type="text" class="${index1},${index2}"></td>`
            });
            $("table tbody").innerHTML += res + "</tr>";
        }); // draw game table

        let index1 = Array.from({length: game.length}, function (value, index) {
            return index
        });
        let index2 = Array.from({length: game.length}, function (value, index) {
            return index
        }); // indexes for randomize the disables inputs in the game

        for (let i = 0; i < game.disabled; i++) {
            if (index1.length) { // for unique disable inputs
                let i1 = index1.splice(Math.floor((index1.length - 1)), 1)[0];
                let i2 = index2.splice(Math.floor((index2.length - 1) * Math.random()), 1)[0];
                let currentInput = $('input[type=Text]')[i1 * game.length + i2];
                currentInput.value = randomArray[i1][i2];
                currentInput.disabled = true
            } else { // last random disabled input

                let notDisableInputs = $('input[type=Text]:not([disabled])');
                let notDILength = Math.floor(notDisableInputs.length * Math.random());
                let indexes = classSplit(notDisableInputs[notDILength]);
                notDisableInputs[notDILength].value = randomArray[indexes[0]][indexes[1]];
                notDisableInputs[notDILength].disabled = true;
            }
        } // Add values to inputs & disable some of them

        let changeableInputs = $('input[type=Text]:not([disabled])');
        let allInputs = $('input[type=Text]');

        changeableInputs[0].focus();// focus for first editable input

        $('input[type=Text]').forEach(function (element) {
            element.addEventListener('keydown', function (event) {
                if (allowedKeys.indexOf(event.keyCode) < 0) event.preventDefault();
                else if (event.target.value.length && [9, 16, 37, 38, 39, 40].indexOf(event.keyCode) < 0)
                    event.target.value = '';
            });

            element.addEventListener('keyup', function (event) {
                if ([9, 16, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
                    let index = [].map.call(changeableInputs, function (value, index) {
                        return changeableInputs[index]
                    }).indexOf(event.target); //  convert Array a like to Array

                    if (event.keyCode === 39) {
                        changeableInputs[index > 9 ? 0 : index + 1].focus()
                    } // RIGHT Arrow

                    if (event.keyCode === 37) {
                        changeableInputs[index < 1 ? 10 : index - 1].focus()
                    } // LEFT Arrow

                    if (event.keyCode === 38) {
                        let indexOfUpper = [...allInputs].indexOf(event.target) - 4;
                        let upper = allInputs[indexOfUpper < 0 ? ++indexOfUpper + 15 : indexOfUpper];
                        if (!upper.disabled) upper.focus()
                    } // UP Arrow

                    if (event.keyCode === 40) {
                        let indexOfLower = [...allInputs].indexOf(event.target) + 4;
                        let lower = allInputs[indexOfLower > 15 ? --indexOfLower % 15 : indexOfLower];
                        if (!lower.disabled) lower.focus()
                    } // DOWN Arrow
                }
                let checkArr = [], inputs = $('input[type=Text]');
                for (let i = 0; i < game.length * game.length; i++) {
                    let indexes = classSplit(inputs[i]);
                    if (Number(inputs[i].value) === randomArray[indexes[0]][indexes[1]]) {
                        checkArr.push(true)
                    }
                } // check if the values of all inputs are true

                if (checkArr.length === game.length * game.length) {
                    $('.prompt').style.display = 'table';
                    $('#game').style.display = 'none';

                    message.innerHTML = "<img src='./images/win.gif'/><br>Congratulation! You Win";
                    message.style.backgroundColor = '#594a4acc';
                    showMessage();

                    audio.src = "./audio/win.mp3";
                    if (audio.autoplay = 'none') audio.autoplay = true;

                    clearInterval(timer);
                    let timerSelector = $('div span');
                    timerSelector[0].innerText = '00';
                    timerSelector[1].innerText = '00';
                } // ----------------- handling with winners -----------------
            })
        }); // Listen if all inputs get filled
    }); // handling with user want to play

    $('div button[value=n]').addEventListener('click', function () {
        message.innerText = "Take your Time";
        message.style.backgroundColor = '#594a4acc';
        showMessage();
    }) // handling with no ready users.

});
console.log(`${(new Date() - ヒシャム) / 1e3} second`);