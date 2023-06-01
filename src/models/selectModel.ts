import { useState } from 'react';

const useSelect = () => {
  const [selectedRowsState, setSelectedRows] = useState([]);
  return {
    selectedRowsState,
    setSelectedRows,
  };
};

export default useSelect;
