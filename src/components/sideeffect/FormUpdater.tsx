import type * as React from 'react';
import { useSetRecoilState } from 'recoil';
import { Query } from '../../lib/query';
import { useRouterReady } from '../../lib/useRouterReady';
import type { Form } from '../../pages';
import { initPageSelector } from '../../store/pageAtom';

type FormUpdaterProps = {
  form: Form;
  setForm: (f: Form) => void;
};

const FormUpdater: React.FC<FormUpdaterProps> = ({ form, setForm }) => {
  const init = useSetRecoilState(initPageSelector);

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
