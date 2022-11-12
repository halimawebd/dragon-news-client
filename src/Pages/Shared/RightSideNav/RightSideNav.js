import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
<ButtonGroup vertical>
      <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
</ButtonGroup>
<div>
    <h5>Find us on</h5>
</div>
        </div>
    );
};

export default RightSideNav;