import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import ResultTableRow from './ResultTableRow';
import SimpleResultTableRow from './SimpleResultTableRow';
import { Singing } from '../../data/interfaces';
import { useAppState } from '../../lib/AppState';

export default function ResultTable(props: { singings: Singing[] }) {
  const appState = useAppState();

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableBody>
          {props.singings.map((singing, i) => {
            if (appState.displayMode == 0) {
              return <ResultTableRow singing={singing} i={i} key={i} />;
            } else if (appState.displayMode == 1) {
              return <SimpleResultTableRow singing={singing} i={i} key={i} />;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
