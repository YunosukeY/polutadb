import * as React from 'react';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/styles';

import HR from '../layout/HR';
import Searches from '../select/Searches';
import Sort from '../select/Sort';
import { Pane } from '../../lib/style';
import DisplaySetting from '../display/DisplaySetting';

const useStyles = makeStyles({
  h4: {
    marginBottom: 0,
  },
  icon: {
    fontSize: 28,
  },
});

export default function Select(props: { setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  const classes = useStyles();

  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const stickyValue = window.localStorage.getItem('isHidden');
    setIsHidden(stickyValue !== null ? stickyValue === 'true' : false);
  }, []);
  useEffect(() => {
    window.localStorage.setItem('isHidden', String(isHidden));
  });
  const onClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Pane>
      {isHidden && (
        <h4 onClick={onClick} className={classes.h4}>
          <ArrowRightIcon className={classes.icon} />
          Search
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick}>
            <ArrowDropDownIcon className={classes.icon} />
            Search
          </h4>
          <HR />
          <Searches />
          <DisplaySetting setPagenum={props.setPagenum} />
          <Sort />
        </>
      )}
    </Pane>
  );
}
