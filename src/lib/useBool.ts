import { useCallback, useState } from 'react';

export const useBool = (initialState: boolean) => {
  const [state, setState] = useState(initialState);
  const setTrue = useCallback(() => { setState(true); }, []);
  const setFalse = useCallback(() => { setState(false); }, []);

  return [state, setTrue, setFalse] as const;
};
