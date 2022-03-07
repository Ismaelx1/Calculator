const screenca = document.getElementById('screen')

const buttons = Array.from(document.getElementsByClassName('buttons'))

const random = document.getElementById('randomize')

buttons.map( button => {
    button.addEventListener('click', (evet) => {
        switch(evet.target.innerText) {
            case 'C': screenca.innerText = ''
            break;

        case '←': if (screenca.innerText)    {
            screenca.innerText = screenca.innerText.slice(0, -1);
        }
        break; 
        case '=': try{
            screenca.innerText = Function("return " + screenca.innerText)();
        } catch {
            screenca.innerText = "ERROR!!!"
        } 
        break;

    case '.': if (screenca.innerText.includes('.')) {
        screenca.innerText = "Just one Buddy"
    }
        
        
        

            default: screenca.innerText += evet.target.innerText
        }
    })


})



random.addEventListener('click', function() {
let ranNum = Math.floor(Math.random() * 1000) + 1;
if (screenca.innerText) {
    screenca.innerText += ranNum
} else {
    screenca.innerText = ranNum
}


})



