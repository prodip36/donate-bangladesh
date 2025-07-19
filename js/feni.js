
//Noakhali section
document.getElementById('donate-feni').addEventListener('click',function(event){
    event.preventDefault();
    //get main balance
    const main_balance=parseFloat(getAttributeValueById('balance-main'));
    console.log(main_balance);

    const donation_balance=parseFloat(getInputFieldValueById('input-amount-feni'));
    const total_balance=parseFloat(getAttributeValueById('balance-feni'));
    
    //set value
    if(isNaN(donation_balance)||(donation_balance<0)){
        alert('Invalid Amount');
    }
    else if(main_balance<donation_balance){
        alert('Insufficient Balance');
       
    }
    else{
    setAttributeValueById('balance-feni',total_balance+donation_balance);
    setAttributeValueById('balance-main',main_balance-donation_balance);

    //add to history
    const head=getAttributeValueById('donate-feni-heading');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="rounded-sm border border-base-300  justify-center p-5">
     <h3 class="font-bold text-xl">${donation_balance} Taka is Donated for ${head}</h3>
      <p class="text-base text-gray-400">${showCurrentDateTime()}</p>
     </div>
    `
    document.getElementById('container-history').appendChild(div);
    }
})