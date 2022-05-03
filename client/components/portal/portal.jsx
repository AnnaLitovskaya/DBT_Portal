/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { getMessages } from '../../store/storeComponents/getMessages';
import { sendMessage } from '../../store/storeComponents/sendMessage';

function Portal(props) {
  const [messages, setMessages] = useState([]);
  const [roomId, setRoomId] = useState('');
  const [messageToSend, setMessageToSend] = useState('');

  useEffect(() => {
    window.socket.on('send', async (message) => {
      props.dispatch(message);
      const roomMessages = await props.getMessages(roomId);
      setMessages(roomMessages);
    });
  });

  useEffect(async () => {
    const addressArr = window.location.hash.split('/');
    const address = addressArr[addressArr.length - 1];
    setRoomId(address);

    window.socket.emit('join-portal', address);

    const roomMessages = await props.getMessages(address);
    setMessages(roomMessages);
  }, []);

  const send = async () => {
    const token = localStorage.getItem('token');
    const newMessage = {
      token,
      message: messageToSend,
    };
    await props.sendMessage(roomId, newMessage);
    const roomMessages = await props.getMessages(roomId);
    setMessages(roomMessages);
  };

  return (
    <div>
      <ul>
        {messages?.map((message) => (
          <li key={message.id}>
            {`${message.fromUser.name} ${message.message}`}
          </li>
        ))}
      </ul>
      <Form>
        <Form.Control
          type="text"
          onChange={(e) => {
            setMessageToSend(e.target.value);
          }}
        />
        <Button variant="primary" type="button" onClick={send}>
          Send
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getMessages: (roomId) => dispatch(getMessages(roomId)),
  sendMessage: (roomId, messageToSend) =>
    dispatch(sendMessage(roomId, messageToSend)),
  dispatch: (message) => dispatch(message),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
