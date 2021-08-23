import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { Query } from '../../lib/query';

interface QueryStringUpdaterProps {
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
}

const QueryStringUpdater: React.FC<QueryStringUpdaterProps> = ({ setPagenum }) => {
  const watch = useFormContext().watch();
  const router = useRouter();
  const query = new Query(router.query);
  useEffect(() => {
    const q = new Query(watch);
    if (!q.equals(query)) {
      console.log('changed');
      setPagenum(1);
      router.push(`/search?${q}`, undefined, { scroll: false });
    }
  }, [watch]);

  return null;
};
export default QueryStringUpdater;
