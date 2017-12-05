'use strict';
const typesOfMessagesComponents = {
  'message': Message,
  'response': Response,
  'typing': Typing
};

function MessageHistory(props) {
  const messagesList = props.list;

  if (!Array.isArray(messagesList) || !messagesList.length) {
    return null;
  }

  let messagesElements = messagesList.map((message) => {
    let MessageComponent = typesOfMessagesComponents[message.type];

    return (MessageComponent ? (<MessageComponent key={message.id} from={message.from} message={message} />) : null);
  });
  
  return <ul>{messagesElements}</ul>;
}

MessageHistory.defaultProps = {
  list: []
};