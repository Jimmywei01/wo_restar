// start:"node server.js"
// import css from "./style.css";
import './css/style.scss';
import $ from "jquery"
import {number} from './util'

console.log(number(123))

$(document).ready(() =>{
  $('.btn').click(() =>{
    alert('click')
  })
})


