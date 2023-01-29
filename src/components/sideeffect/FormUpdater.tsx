import { useRouter } from 'next/router';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useShallowCompareEffect } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { Query } from '../../lib/query';
import { appState } from '../../store/state';

const FormUpdater: React.FC = () => {
  const { watch, setValue } = useFormContext();
  const urlQuery = new Query(useRouter().query);
  const setState = useSetRecoilState(appState);

  useShallowCompareEffect(() => {
    const formQuery = new Query(watch());
    if (!formQuery.equals(urlQuery)) {
      setState((state) => ({ ...state, pagenum: 1 }));
      Object.entries(urlQuery).forEach(([key, value]) => setValue(key, value));
    }
  }, [urlQuery]);

  return null;
};
export default FormUpdater;
