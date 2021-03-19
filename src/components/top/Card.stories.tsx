import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import Card from './Card';

export default {
  title: 'top/Card',
};

export const showCard = () => <Card link='#' title='hoge' icon={SearchIcon} />;
