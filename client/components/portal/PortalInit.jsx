/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {
  createPortal,
  joinPortal,
} from '../../store/storeComponents/createPortal';

function Portal(props) {
  const [portalValue, setPortalValue] = useState('');

  useEffect(() => {
    const portalId = portalValue;
    const userId = props.user.id;
    window.socket.emit('join-portal', { portalId, userId });
  });

  const create = async () => {
    const portalAddress = await props.createPortal();
    props.history.push(`/api/portal/${portalAddress}`);
    setPortalValue(portalAddress);
    await props.joinPortal(portalAddress);
  };

  return (
    <Form id="signin-form-container">
      <div key="inline-checkbox" className="mb-3">
        <Form.Check
          inline
          label="1"
          name="group1"
          type="checkbox"
          id="inline-checkbox-1"
        />
        <Form.Check
          inline
          label="2"
          name="group1"
          type="checkbox"
          id="inline-checkbox-2"
        />
        <Form.Check
          inline
          label="3"
          name="group1"
          type="checkbox"
          id="inline-checkbox-3"
        />
      </div>
      <Button variant="primary" type="button" onClick={create}>
        Create Portal
      </Button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createPortal: () => dispatch(createPortal()),
  joinPortal: (uuid) => dispatch(joinPortal(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
