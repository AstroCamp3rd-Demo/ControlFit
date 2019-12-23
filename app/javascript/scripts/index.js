// console.log('hi')

// import 'bulma/css/bulma.css'
// import  '@fortawesome/fontawesome-free/css/all.css'

// import  './application.scss'
import './application.js'
import $ from 'jquery'
import axios from 'axios-on-rails'
import moment from "moment";

// const axios = require('axios');
 
 $(document).ready(function (){

 
    // 新增每日食物資料 JQuery  
    $('tr').on('click','button',function(evt){
      $('#query-food').hide();
      let food_name = $(evt.target).parent().siblings('td:first').text()
      let food_calorie = $(evt.target).parent().siblings('td:first').next().text()
      $('#Add_food_record_type').remove()

       $('#Add_food_record').append( `
       <div class="col-md-3 mb-3 ">
       <label for="disabledTextInput">食物名稱</label>
       <input class="form-control" type="text" placeholder="${food_name}" readonly>
       </div>
       <div class="col-md-3 mb-3">
       <label for="disabledTextInput_1">卡洛里</label>
       <input class="form-control" type="text" placeholder="${food_calorie}" readonly>
       </div>
       <div class="col-md-3 mb-3">
            <label for="custom-select">份數</label>
            <select class="custom-select" id="foodqty">
                <option selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
       </div>
       <div class="col-md-3 mb-3">
            <label for="exampleFormControlInput1">型態</label>
            <select class="custom-select" id="foodtype">
            <option selected>早餐</option>
            <option value="1">午餐</option>
            <option value="2">晚餐</option>
            <option value="3">點心/其他</option>
            </select>
       </div>
       <button type="submit" class="fas fa-cloud-upload-alt" id="${evt.target.id}"></button>
       `); // 增加使用者體驗 並接收 食物數量 / 型態
    })
     
    $('#Add_food_record').on('click','button',function(evt){
      evt.stopPropagation();
      let foodqty=$("#foodqty :selected").text();
      let foodtype=$("#foodtype :selected").text();
      let food_hash = {
                food_id : `${evt.target.id}`,
                food_qty: foodqty,
                food_type: foodtype
                 }
      axios.post("http://localhost:3000/food_records", food_hash)
           .then( response => {
                  console.log('response=>',response);
                  $( "#daliy-food" ).load("search_food.html #daliy-food");
      })
    }) // 將資料傳送至後端 傳送 id / qty / type
 
    //----------------------------------------------------------

    $('#Add_food_record_by_user').on('click', function(){
     // $('.table-hover').remove();
     $('#query-food').remove();
     $('#Add_food_record').remove()  
     $('#Add_food_record_type').append(`
     <div class="col-md-3 mb-3 ">
       <label for="exampleFormControlInput1">食物名稱</label>
       <input type="text" class="form-control" id="foodname"  placeholder="食物名稱">
     </div>
     <div class="col-md-3 mb-3">
       <label for="exampleFormControlInput1">卡洛里</label>
       <input type="text" class="form-control" id="foodcalories"  placeholder="卡洛里">
     </div>
     <div class="col-md-3 mb-3">
     <label for="custom-select">份數</label>
     <select class="custom-select" id="foodqty">
         <option selected>1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
     </select>
     </div>
     <div class="col-md-3 mb-3">
     <label for="exampleFormControlInput1">型態</label>
     <select class="custom-select" id="foodtype">
     <option selected>早餐</option>
     <option value="1">午餐</option>
     <option value="2">晚餐</option>
     <option value="3">點心/其他</option>
     </select>
     </div>
     <button type="submit" class="fas fa-cloud-upload-alt" id="Add_food_data_by_user"></button>
   `)

    }) // Create New food record data      
    $('#Add_food_record_type').on('click','button', function(){

       let foodname=$('#foodname').val();
       let foodcalories=$('#foodcalories').val();
       let foodqty=$("#foodqty :selected").text();
       let foodtype=$("#foodtype :selected").text();
       let food_hash = {
          food_id     : 0,
          food_name   : foodname,
          food_calories: foodcalories,
          food_qty    : foodqty,
          food_type   : foodtype
           }
       axios.post("http://localhost:3000/food_records", food_hash)
            .then( response => {
              console.log('response=>',response);
              $( "#daliy-food" ).load( "search_food.html #daliy-food" );
  })

    })
    // Now time and day
    let time = moment().format('lll');
    $('.daytime').html(time);
    // --------------------------------
    // let cc = $('.foodsum').text();

    // console.log(cc )
 
})













