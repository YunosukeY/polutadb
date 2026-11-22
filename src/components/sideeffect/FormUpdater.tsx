import { useSetAtom } from 'jotai';
import type * as React from 'react';
import { Query } from '../../lib/query';
import { useRouterReady } from '../../lib/useRouterReady';
import type { Form } from '../../pages';
import { initPageAtom } from '../../store/pageAtom';

type FormUpdaterProps = {
  form: Form;
  setForm: (f: Form) => void;
};

const FormUpdater: React.FC<FormUpdaterProps> = ({ form, setForm }) => {
  const init = useSetAtom(initPageAtom);

  useRouterReady((query) => {
    const formQuery = new Query(form);
    const urlQuery = new Query(query);
    if (!formQuery.equals(urlQuery)) {
      init();
      setForm(urlQuery.asForm());
    }
  });

  return null;
};
export default FormUpdater;
