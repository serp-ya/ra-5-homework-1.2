'use strict';
const typesOfMessagesComponents = {
  'message': Message,
  'response': Response,
  'typing': Typing
};

function MessageHistory(props) {
  const messagesList = props.list;

  if (!messagesList && !Array.isArray(messagesList) && !messagesList.length) {
    return null;
  }

  let messagesElements = messagesList.map((message, index) => {
    let MessageComponent = typesOfMessagesComponents[message.type];

    return (MessageComponent ? (<li key={index}><MessageComponent from={message.from} message={message} /></li>) : null);
  });
  
  return <ul>{messagesElements}</ul>;
}

MessageHistory.defaultProps = {
  list: []
};