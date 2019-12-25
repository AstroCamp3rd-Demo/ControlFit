import $ from 'jquery'

$(document).on('turbolinks:load', function(){
  $('#bmr-box').click(function(evt){
    evt.preventDefault();
    let gender = $('#bmr-gender').val();
    let age = $('#bmr-age').val();
    let height = $('#bmr-height').val();
    let weight = $('#bmr-weight').val();
    if (age != '' && height != '' && weight != ''){
      let BMR = 0
      if(gender == 'male'){
        BMR = (13.7 * weight) + (5 * height) - (6.8 * age) + 66
      }else{
        BMR = (9.7 * weight) + (1.8 * height) - (4.7 * age) + 655
      }
    $('#box').append(`每日需要${BMR} 卡路里`)
    }
  })
});