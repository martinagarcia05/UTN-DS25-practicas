import React from "react";
import { Crear, CrearAutor } from "../components/devolverTodosLibros";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function AgregarLibro() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nomYapAutor, setNomYapAutor] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const handleAgregarLibro = async (e) => {
    e.preventDefault();
    const nuevoLibro = await Crear(titulo, descripcion, nomYapAutor);
    if (nuevoLibro) {
      alert("Libro agregado exitosamente");
    }
  };

  const handleAgregarAutor = async (e) => {
    e.preventDefault();
    const nuevoAutor = await CrearAutor(nomYapAutor, nacimiento);
    if (nuevoAutor) {
      alert("Autor agregado exitosamente");
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="titulo"
            defaultValue=""
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="descripcion"
            defaultValue=""
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nombre y Apellido del Autor</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese el nombre y apellido del autor.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="descripcion"
            defaultValue=""
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
        </Form.Group>
        
       
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default AgregarLibro;
