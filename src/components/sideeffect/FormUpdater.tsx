import { useSetAtom } from 'jotai/react';
import { useRouter } from 'next/router';
import type * as React from 'react';
import { useMount } from 'react-use';
import { Query } from '../../lib/query';
import type { Form } from '../../pages';
import { initPageAtom } from '../../store/pageAtom';

type FormUpdaterProps = {
  form: Form;
  setForm: (f: Form) => void;
};

const FormUpdater: React.FC<FormUpdaterProps> = ({ form, setForm }) => {
  const urlQuery = new Query(useRouter().query);
  const init = useSetAtom(initPageAtom);

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
