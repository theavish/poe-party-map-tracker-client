import React from 'react';
import {
    Cell,
    Column,
    ColumnInstance,
    HeaderGroup,
    Row,
    useTable,
} from 'react-table';
import { IUser } from '../../models/User';

export const MapDashboard: React.FC<{ columns: Array<Column>, data: Array<object>, user?: IUser }> = ({
    user,
    columns,
    data,
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
    }: any = useTable({
        columns,
        data,
    });

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup: HeaderGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: ColumnInstance) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row: Row, rowIndex: number) => {
                          prepareRow(row);
                          return (
                              <tr {...row.getRowProps()}>
                                  {row.cells.map((cell: Cell) => {
                                      return (
                                          <td {...cell.getCellProps()}>{cell.render('Cell', { user, value: cell.value })}</td>
                                      );
                                  })}
                              </tr>
                          );
                      },
                )}
                </tbody>
            </table>
        </>
    );
};
