$(document).ready(()=>{
  $('#calculate').click((e)=>{
      e.preventDefault();
      let gender = $('#gender').val();
      let age = $('#age').val();
      let weight = $('#weight').val();
      let height = $('#height').val();
  if(age != '' && weight != '' && height != ''){
      let BMR = 0;
      if(gender == 'female'){
          BMR = 10*weight + 6.25*height - 5*age -161;
      }else{
         BMR = 10*weight + 6.25*height - 5*age + 5; 
      }
      $('.adp-alert').slideUp();
      $('.bmr-result').slideDown();
      $('#result').text(BMR);
  }else{
      $('.adp-alert').slideDown();
  }
  })
})