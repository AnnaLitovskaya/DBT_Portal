/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Portal from './Portal';
import {
  createPortal,
  joinPortal,
} from '../../store/storeComponents/createPortal';

function PortalInit(props) {
  const [portalValue, setPortalValue] = useState('');

  const create = async () => {
    // const portalAddress = uuidv4();
    const portalAddress = 1;
    setPortalValue(portalAddress);
    // props.history.push(`/portal/${portalAddress}`);
  };

  return (
    <div>
      {portalValue ? (
        <Portal roomId={portalValue} />
      ) : (
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
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createPortal: () => dispatch(createPortal()),
  joinPortal: (uuid) => dispatch(joinPortal(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortalInit);
