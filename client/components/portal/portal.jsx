/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../store/storeComponents/getMessages';

function Portal(props) {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const roomMessages = await props.getMessages(props.roomId);
    setMessages(roomMessages);
  }, []);

  return (
    <ul>
      {messages?.map((message) => (
        <li key={message.id}>
          {`${message.fromUser.name} ${message.message}`}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getMessages: (roomId) => dispatch(getMessages(roomId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
