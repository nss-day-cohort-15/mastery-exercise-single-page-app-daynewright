
var Carlot = (function(carlot){
    
     carlot.activateEvents = function() {
        var carBlock = document.querySelectorAll('.car-block');
        var input = document.querySelector('input');
        var descript;

        carBlock.forEach(e => e.addEventListener('click', changeBlock));
        input.addEventListener('keypress', updateDescription);

        function changeBlock(evt){
            document.querySelector('input').removeEventListener('keyup', changeDescript);
            document.querySelectorAll('.car-block').forEach(e => e.style = `border: 3px solid ${e.style.borderTopColor}`);

            this.style.border = `5px solid ${evt.currentTarget.style.borderTopColor}`;
            this.style.background = "#e6e6e6";
            input.focus();
            input.value = "";

            descript = evt.currentTarget.childNodes[11];
        }

        function changeDescript(evt){
            descript.innerHTML = "";
            descript.innerHTML += evt.target.value;
        }

        function updateDescription(descript){
            document.querySelector('input').addEventListener('keyup', changeDescript);
        }
     }

 return carlot;

})(Carlot || {})
