import { useEffect, useState } from 'react';
import { getProblem } from '@/services/Api/ProblemController';

export default () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProblem().then((res) => {
      setProblems(res);
      setLoading(false);
    });
  }, []);

  return { problems, loading };
};
