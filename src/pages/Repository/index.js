import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataRepositor();
  }, []);

  const getDataRepositor = async () => {
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    setRepository(repository);
    setIssues(issues);
    setLoading(false);
  };

  return <div>Repository: {decodeURIComponent(match.params.repository)}</div>;
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }),
};
