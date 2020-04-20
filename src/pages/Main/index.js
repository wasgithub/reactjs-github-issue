import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, SubmitButton, Form } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
