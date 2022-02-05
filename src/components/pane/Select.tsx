import * as React from 'react';
import { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
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

  const [isHidden, setIsHidden] = useState(true);
  const onClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Pane>
      {isHidden && (
        <h4 onClick={onClick} className={classes.h4} style={{ textAlign: 'center' }}>
          Search
          <ArrowDropDownIcon className={classes.icon} />
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick} style={{ textAlign: 'center' }}>
            Search
            <ArrowDropUpIcon className={classes.icon} />
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
