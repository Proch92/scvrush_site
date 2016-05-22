// This is where it all goes :)


/********* index  *************/

function liveTournament() {
  console.log('starting');
  /*$.ajax({
    url: 'http://ec2-52-37-36-88.us-west-2.compute.amazonaws.com:4568/live', 
    success: function(res) {
      if (res === '_no_live') {
        $('bracket_container').hide();
        console.log('result is _no_live. hiding bracket');
      }
      else {
        $('bracket_iframe').src('http://challonge.com/'+res+'/module');
        console.log('theres an open tournament!');
      }
    }
  })*/
  $.get(
    'http://ec2-52-37-36-88.us-west-2.compute.amazonaws.com:4568/live',
    function(data) {console.log(data);}
  );
}

$(document).ready(function() {
  liveTournament();
});
