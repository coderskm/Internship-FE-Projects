function display(param) {
    
    document.getElementById('textarea').value += param;
}

function calculate() {
    let val = document.getElementById('textarea').value;
    let answer = eval(val);
    document.getElementById('textarea').value = answer;
}

function clr() {
    document.getElementById('textarea').value = '';
}