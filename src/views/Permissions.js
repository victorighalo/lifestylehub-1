import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import CreatePermission from "../components/Admin/Permissions/CreatePermission";
import ViewPermissions from "../components/Admin/Permissions/ViewPermissions";

//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'tachyons';

class Permissions extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount() {
        if(!localStorage.getItem('Auth')){
          this.props.history.push('/signin');
        }
      }

    render(){
        return(
            <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Permissions" subtitle="View / Create Permissions" className="text-sm-left" />
            </Row>
        
            <Row>
              {/* Editor */}
              <Col lg="6" md="12">
                <ViewPermissions />
              </Col>
        
              {/* Sidebar Widgets */}
              <Col lg="6" md="12">
                <CreatePermission />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default withRouter(Permissions);