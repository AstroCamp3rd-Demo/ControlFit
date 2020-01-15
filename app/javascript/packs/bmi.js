import $ from 'jquery'

$(document).on('turbolinks:load',function(){
  console.log('123')
  $('.bmi-submit').on('click',function(event){
    event.preventDefault();
    let h = $(".cm").val();
    let w = $(".kg").val();
    if(h === ""){
      $('.box').html("不能是空的唷")
    }else if(w === ""){
      $('.box').html("不能是空的唷")
    }else{
      h = parseFloat(h) / 100;
      w = parseFloat(w);
      let bmi = w / (h * h);
      bmi = bmi.toFixed(2);
      let range = bmi
      if(range < 18.5){
        range =  "體重輕到要飄起來了"
      }else if(range >= 18.5 && range < 24 ){
        range = "體位正常"
      }else if(range >= 24 && range <= 27){
        range = "有點胖"
      }else if(range <= 30 && range <= 35){
        range = "有點肥胖"
      }else{
        range = "重度肥胖了啦"
      }
      console.log('123')
      $(".box").html("\n BMI = " + `<div class="d-inline-block bmi-jquery">${bmi}</div>` + `<div>${range}</div>` + '<br> 想更加認識自己嗎？ <a class="text-primary" href="http://localhost:5000/blogs">加入我們</a>')
    }
  })
})