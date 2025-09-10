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
    
    // Validar que todos los campos estén llenos
    if (!titulo || !descripcion || !nomYapAutor || !nacimiento) {
      alert("Por favor complete todos los campos");
      return;
    }

    try {
      const nuevoLibro = await Crear(titulo, descripcion, nomYapAutor);
      if (nuevoLibro) {
        alert("Libro agregado exitosamente");
        // Limpiar el formulario
        setTitulo("");
        setDescripcion("");
        setNomYapAutor("");
        setNacimiento("");
      }
    } catch (error) {
      alert("Error al agregar el libro: " + error.message);
    }
  };

  const handleAgregarAutor = async (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!nomYapAutor || !nacimiento) {
      alert("Por favor complete todos los campos");
      return;
    }

    try {
      const nuevoAutor = await CrearAutor(nomYapAutor, nacimiento);
      if (nuevoAutor) {
        alert("Autor agregado exitosamente");
        // Limpiar el formulario
        setNomYapAutor("");
        setNacimiento("");
      }
    } catch (error) {
      alert("Error al agregar el autor: " + error.message);
    }
  };

  return (
    <div>
      <h2>Agregar Libro</h2>
      <Form noValidate validated={validated} onSubmit={handleAgregarLibro}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
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
                value={nomYapAutor}
                onChange={(e) => setNomYapAutor(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese el nombre y apellido del autor.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Fecha de nacimiento del Autor</Form.Label>
            <Form.Control
              required
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Agregar Libro</Button>
      </Form>

      <hr className="my-4" />
      
      <h3>Agregar Autor por separado</h3>
      <Form noValidate validated={validated} onSubmit={handleAgregarAutor}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Nombre y Apellido del Autor</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre y Apellido"
              value={nomYapAutor}
              onChange={(e) => setNomYapAutor(e.target.value)}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              required
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Agregar Autor</Button>
      </Form>
    </div>
  );
}

export default AgregarLibro;
