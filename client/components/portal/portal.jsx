/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../store/storeComponents/getMessages';

function Portal(props) {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const roomMessages = await props.getMessages(roomId);
  }, []);

  return (
    <ul>
      {props.message.map((message) => (
        <li key={message.id}>{message.message}</li>
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
