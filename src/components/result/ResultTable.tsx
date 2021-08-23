import * as React from 'react';
import { useRecoilValue } from 'recoil';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import ResultTableRow from './ResultTableRow';
import SimpleResultTableRow from './SimpleResultTableRow';
import { Singing } from '../../data/interfaces';
import { appState } from '../../lib/AppState';

export default function ResultTable(props: { singings: Singing[] }) {
  const state = useRecoilValue(appState);

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableBody>
          {props.singings.map((singing, i) => {
            if (state.displayMode == 0) {
              return <ResultTableRow singing={singing} i={i} key={i} />;
            } else if (state.displayMode == 1) {
              return <SimpleResultTableRow singing={singing} i={i} key={i} />;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
