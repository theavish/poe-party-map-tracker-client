import React from 'react';
import { Cell, Column, ColumnInstance, HeaderGroup, Row, TableOptions, useTable } from 'react-table';

export const MapDashboard: React.FC<{ columns: Array<Column>, data: object }> = ({
    columns,
    data,
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: data as any,
    });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup: HeaderGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: ColumnInstance) => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row: Row, i: number) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell: Cell) => (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        ))}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};
