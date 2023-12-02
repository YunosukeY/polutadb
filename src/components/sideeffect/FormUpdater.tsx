import { useRouter } from 'next/router';
import * as React from 'react';
import { useMount } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { Query } from '../../lib/query';
import { initPageSelector } from '../../store/pageAtom';
import { Form } from '../../pages';

type FormUpdaterProps = {
  form: Form;
  setForm: (f: Form) => void;
};

const FormUpdater: React.FC<FormUpdaterProps> = ({ form, setForm }) => {
  const urlQuery = new Query(useRouter().query);
  const init = useSetRecoilState(initPageSelector);

  useMount(() => {
    const formQuery = new Query(form);
    if (!formQuery.equals(urlQuery)) {
      init();
      setForm(urlQuery.asForm());
    }
  });

  return null;
};
export default FormUpdater;
