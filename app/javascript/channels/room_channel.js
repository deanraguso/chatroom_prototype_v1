import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Hello");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    $('#message_holder').append("<div class='message'>" + data.content + "</div>")

    // Called when there's incoming data on the websocket for this channel
  }
});

$(document).on("turbolinks:load", ()=>{
  submit_messages();
})

const submit_messages = () => {
  $("#message_content").on("keydown", (event)=> {
    if(event.keyCode === 13){
      $('input').click()
      event.target.value = '';
      event.preventDefault();
      
    }
  })
}