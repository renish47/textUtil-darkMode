let input = document.getElementById('input');
let ucaseBtn = document.getElementById('ucase');
let lcaseBtn = document.getElementById('lcase');
let capBtn = document.getElementById('cap');
let copyBtn = document.getElementById('copy');
let remSpaceBtn = document.getElementById('remove');
let clrBtn = document.getElementById('clear');
let preview = document.getElementById('preview');
let wordCountDisplay = document.getElementById('wordCount');
let charCountDisplay = document.getElementById('charCount');
let minsDisplay = document.getElementById('min');
let approx = document.getElementById('approx');



input.addEventListener('input',liveText);
function liveText(){
  //preview
  preview.innerText = input.value;
  if(input.value==''){
    approx.style.display = 'none';
  }
  else{
    approx.style.display = 'inline';
  }

  let inp = input.value;
  //word count
  let words = inp.split(' ')
  let wordCount = words.length;
  for( let word of words){
    if(word=='' || word==' ')
      wordCount--;
  }
  wordCountDisplay.innerHTML = wordCount;
  
  // char count
  let char = 0
  for(let character of inp){
    if(character !==' ')
      char++
  }
  charCountDisplay.innerText = char;

  //Minute to read
  let minToRead= wordCount/200;
  minsDisplay.innerText = minToRead;
  let sec = (minToRead -parseInt(minToRead))*(0.60);
  let min = parseInt(minToRead) + parseInt(sec);
  let calcSec = Math.round(((sec-parseInt(sec))*100)+1);

  preview.innerText = input.value;
  if(input.value==''){
   calcSec = 0;
  }

  approx.innerHTML = "<i>(Approximately "+min+" minutes "+calcSec+" seconds)</i>";
  
  
}

ucaseBtn.addEventListener('click', upperCase);
function upperCase(){
  preview.innerText = input.value.toUpperCase();
  input.value = input.value.toUpperCase();
}
lcaseBtn.addEventListener('click', lowerCase);
function lowerCase(){
  preview.innerText = input.value.toLowerCase();
  input.value = input.value.toLowerCase();
}

capBtn.addEventListener('click',capitalise);
function capitalise(){
  let temp = input.value.toLowerCase().split(' ');
    let temp2 = []
    for(let word of temp){
      temp2.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    preview.innerText = temp2.join(' ')
    input.value = temp2.join(' ')
}

copyBtn.addEventListener('click', copyText);
function copyText(){
  navigator.clipboard.writeText(input.value);
  setTimeout(()=>{document.getElementById('endStatus').style.display = 'inline'},0);
  setTimeout(()=>{document.getElementById('endStatus').style.display = 'none'},2000);
  

}

remSpaceBtn.addEventListener('click', removeSpace);
function removeSpace(){
  let result = input.value.replace(/ /g,"");
  preview.innerText = result
    input.value = result
}

clrBtn.addEventListener('click',clrScreen);
function clrScreen(){
  input.value ='';
  preview.innerText='';
  wordCountDisplay.innerText='0';
  charCountDisplay.innerText= '0';
  minsDisplay.innerText='0.00';
  approx.style.display = 'none';
}


// ----------------------------------------------------------------------------------------------------- //


let lightSwitch = document.getElementById("switch")

lightSwitch.addEventListener('change',(event)=>{

  if(event.target.checked){
    document.body.style.backgroundColor = "#404953"
    document.getElementById('ucase').classList.add('btn-info')
    document.getElementById('lcase').classList.add('btn-info')
    document.getElementById('cap').classList.add('btn-info')
    document.getElementById('remove').classList.add('btn-info')
    document.getElementById('copy').classList.add('btn-info')
    document.getElementById('clear').classList.add('btn-info')
    document.getElementById('nav').classList.remove('bg-light',"navbar-light")
    document.getElementById('nav').classList.add('bg-dark',"navbar-dark")
    document.getElementById('icon').style.color = 'white'
    document.getElementById('head').style.color = 'white'
    document.getElementById('input').style.color = 'white'
    document.getElementById('charCount').style.color = 'white'
    document.getElementById('wordCount').style.color = 'white'
    document.getElementById('min').style.color = 'white'
    document.getElementById('preview').style.color = 'white'
    document.getElementById('approx').style.color = 'white'
    document.getElementById('endStatus').style.color = 'white'
    document.getElementById('input').style.backgroundColor = '#121212'
    document.getElementById('input').style.border = '1px solid white'
  }
  else{
    document.body.style.backgroundColor = "white"
    document.getElementById('ucase').classList.remove('btn-info')
    document.getElementById('lcase').classList.remove('btn-info')
    document.getElementById('cap').classList.remove('btn-info')
    document.getElementById('remove').classList.remove('btn-info')
    document.getElementById('copy').classList.remove('btn-info')
    document.getElementById('clear').classList.remove('btn-info')
    document.getElementById('nav').classList.add('bg-light',"navbar-light")
    document.getElementById('nav').classList.remove('bg-dark',"navbar-dark")
    document.getElementById('icon').style.color = 'black'
    document.getElementById('head').style.color = 'black'
    document.getElementById('input').style.color = 'black'
    document.getElementById('charCount').style.color = 'black'
    document.getElementById('wordCount').style.color = 'black'
    document.getElementById('min').style.color = 'black'

    document.getElementById('preview').style.color = 'black'
    document.getElementById('approx').style.color = 'black'
    document.getElementById('endStatus').style.color = 'black'
    document.getElementById('input').style.backgroundColor = 'white'
    document.getElementById('input').style.border = '1px solid black'
  }

})
