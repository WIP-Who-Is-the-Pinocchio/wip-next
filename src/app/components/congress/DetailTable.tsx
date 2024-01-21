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
  const commonCellStyle =
    'border-[1px] border-solid border-[#EDEDED] p-[3px] text-center';

  return (
    <table className="mb-[24px] w-[100%]">
      <thead>
        <tr>
          <th className={`${commonCellStyle} bg-[#F6F6F6]`}></th>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`${commonCellStyle} bg-[#F6F6F6] p-[10px] text-center font-medium text-[#6D6D6D]`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className={`${commonCellStyle} text-center`}>{colName1}</td>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className={`${commonCellStyle} text-center`}>
                {row[column.key]} / {100}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className={`${commonCellStyle} text-center`}>{colName2}</td>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className={`${commonCellStyle} text-center`}>
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailTable;
