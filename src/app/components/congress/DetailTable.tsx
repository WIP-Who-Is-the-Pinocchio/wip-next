import React from 'react';

interface CommonColumn {
  label: string;
  key: string;
}

interface TableProps {
  data: { [key: string]: any }[];
  columns: CommonColumn[];
  colName1: string;
  colName2: string;
}

const DetailTable: React.FC<TableProps> = ({
  data,
  columns,
  colName1,
  colName2,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{colName1}</td>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{colName2}</td>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailTable;
