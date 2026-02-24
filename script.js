const api_URL=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const qrImg=document.querySelector('.QR-img');
const inputBox=document.querySelector('.input-box');
const imgBox=document.querySelector('.img-box');

const generateBtn=document.querySelector('.generate-btn');

generateBtn.addEventListener('click',(e)=>{    
    imgBox.classList.remove('none');
    generateQR();
    
});

inputBox.addEventListener('keydown',(e)=>{
    if(e.key==='Backspace'){
        imgBox.classList.add('none');
    }
});


let timeId;
function generateQR(){
    if(inputBox.value){
        qrImg.src=api_URL+inputBox.value;
        imgBox.classList.add('show-img');
    }else{
        inputBox.classList.remove('error');
        void inputBox.offsetWidth;
        inputBox.classList.add('error');
        
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
            inputBox.classList.remove('error');
        },1000)
    }
}