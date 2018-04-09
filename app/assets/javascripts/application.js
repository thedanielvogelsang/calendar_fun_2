// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  $("td").dblclick(function(e){
    var day = $(e.target).text();
    var date = $(".month-name").text().substr(0,3) + ' ' + day;
    $("#event-title").before("<h3 class='event-date'>" + date + "</h3>")
    e.stopPropagation();
    $("#event-form-window").toggle();
  });

  $(document).on("click", function(event){
    var targ = event.target;
    var form = $("#event-form");
    var css = $("#event-form-window").css("display")
    if(css == 'none'){
      return null
    }
    else if(form.has(targ).length > 0 || targ == form[0]){
      //  triggers only if you clicked inside the form
      return null
    }else{
      addEvent();
      $(".event-date").remove()
      $("#event-form-window").css("display","none");
    }
  })

  $("#submit-btn").bind("click", function(e){
    e.preventDefault();
    addEventThroughSubmit();
  })
});


var addEvent = function(){
  console.log("click out add event fired")
  var day = $(".event-date").text()
  day = day.replace(/(\r\n\t|\n|\r\t)/gm,"");
  var title = $("#event-form").children()[1]
  var location = $("#event-form").find("#event-location").val()
  var st = $("#start-time option:selected").val() + ' ' + $("#start-time-am").val()
  var end = $("#end-time option:selected").val() + ' ' + $("#end-time-am").val()
  title = $(title).val();
  $(".event-date").remove()
  if(title === "New Event"){
    null
  }else{
    location === "Add Location" ? location = null : null
    createEvent(title, location, st, end)
  }
}

var addEventThroughSubmit = function(){
  var day = $(".event-date").text()
  day = day.replace(/(\r\n\t|\n|\r\t|\W+)/gm,"");
  var title = $("#event-form").children()[1]
  var location = $("#event-form").find("#event-location").val()
  var st = $("#start-time option:selected").val() + ' ' + $("#start-time-am").val()
  var end = $("#end-time option:selected").val() + ' ' + $("#end-time-am").val()
  var color = $("#event-color").val()
  title = $(title).val();
  if(title === "New Event"){
    alert('New Event has no name!')
  }else if(st === end){
    alert("Start and End times match!")
  }else{
    location === "Add Location" ? location = null : null
    createEvent(day, title, location, st, end, color)
    $(".event-date").remove()
    $("#event-form-window").css("display","none");
  }
}

var createEvent = function(d, t, l, s, e, c){
  var data = {day: d, event_details: {title: t, location: l, start_time: s, end_time: e, color: c}};
  console.log(data)
  $.ajax({
    url: "http://localhost:3000/events",
    type: 'POST',
    data: data,
    dataType: "json",
    success: (results) =>{
      var cell = "." + results['event']['day_id']
      var color = results['event']['color']
      var title = results['event']['title']
      $(cell).append(`<p class=${color}>${title}</p>`)
    },
    error:(bad_results) =>{
      console.log(bad_results)
    }
  })
}
