import * as React from 'react';
import { useRecoilValue } from 'recoil';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
              return (
                <TableRow key={i}>
                  <TableCell>
                    <ResultTableRow singing={singing} />
                  </TableCell>
                </TableRow>
              );
            } else if (state.displayMode == 1) {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <SimpleResultTableRow singing={singing} />
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
