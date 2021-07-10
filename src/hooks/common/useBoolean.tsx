import { useState } from 'react';

export default function useBoolean(initialState?: boolean) {
  const [data, setData] = useState(!!initialState);

  const setTrue = () => {
    setData(true);
  };

  const setFalse = () => {
    setData(false);
  };

  return {
    data,
    setData,
    setTrue,
    setFalse,
  };
}
