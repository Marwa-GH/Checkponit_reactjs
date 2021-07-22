
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div class="card mb-3" style={{width: "600px;"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="data:image/jpeg;base64,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"
       alt="..."
        class="img-fluid"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">welcome to my form</h1>
        <p class="card-text">
        <Row>
          <Col md>
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col md>
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Label>E_mail</Form.Label>
            <Form.Control placeholder="exmple@gmail.com" />
          </Col>
          <Col md>
            <Form.Label>Password</Form.Label>
            <Form.Control type ="password" placeholder="password"/>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Address" />
          </Col>
        </Row>
        <Row>
        <Col md>
        <Form.Label>Choose Career </Form.Label>
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Choose</option>
                <option value="1">responsable</option>
                <option value="2">professor </option>
                <option value="3">student </option>
                <option value="3">entrepreneur </option>
               </select>
          </Col> 
          </Row>
           <Row>
             
           </Row>
         
        </p>
        <p class="card-text">

              

          <small class="text-muted"> <button type="submit" class="btn btn-primary mb-2">Submit</button></small>
        </p>
      </div>
    </div>
  </div>
</div>
      </header>
    </div>
  );
}

export default App;