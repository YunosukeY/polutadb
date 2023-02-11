import { useRouter } from 'next/router';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMount } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { Query } from '../../lib/query';
import { initPageSelector } from '../../store/pageAtom';

const FormUpdater: React.FC = () => {
  const { watch, setValue } = useFormContext();
  const urlQuery = new Query(useRouter().query);
  const init = useSetRecoilState(initPageSelector);

  useMount(() => {
    const formQuery = new Query(watch());
    if (!formQuery.equals(urlQuery)) {
      init();
      Object.entries(urlQuery).forEach(([key, value]) => setValue(key, value));
    }
  });

  return null;
};
export default FormUpdater;
