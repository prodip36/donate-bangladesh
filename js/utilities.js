//get element by id
function getAttributeValueById(id){
    return document.getElementById(id).innerText;
}
//set element by id
function setAttributeValueById(id1,id2){
     document.getElementById(id1).innerText=id2;
}

//get inputfield value
function getInputFieldValueById(id){
    return document.getElementById(id).value;
}

function showSectionById(id){
    document.getElementById('container-donation').classList.add('hidden');
    document.getElementById('container-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function setButtonColor(id){
    
      document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
      document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
      document.getElementById(id).classList.add('bg-[#B4F461]');

}