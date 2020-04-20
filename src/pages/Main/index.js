import React, { useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, SubmitButton, Form } from './styles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setNewRepo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.get(`/repos/${newRepo}`);
      const { full_name } = await response.data;
      const data = {
        name: full_name,
      };
      setRepositories([...repositories, data]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={isloading}>
          {isloading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
