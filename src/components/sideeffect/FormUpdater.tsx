import { useRouter } from 'next/router';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useShallowCompareEffect } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { Query } from '../../lib/query';
import { initPage } from '../../store/pageState';

const FormUpdater: React.FC = () => {
  const { watch, setValue } = useFormContext();
  const urlQuery = new Query(useRouter().query);
  const init = useSetRecoilState(initPage);

  useShallowCompareEffect(() => {
    const formQuery = new Query(watch());
    if (!formQuery.equals(urlQuery)) {
      init();
      Object.entries(urlQuery).forEach(([key, value]) => setValue(key, value));
    }
  }, [urlQuery, watch()]);

  return null;
};
export default FormUpdater;
