'use client';

// 테이블 헤더 타입 정의
export type TableHeader = string;

// 테이블 행 데이터 타입 정의
export interface TableRowData {
  category: string;
  details: (string | number | null | undefined)[];
}

// 테이블 컴포넌트의 props 타입 정의
interface TableProps {
  headers: TableHeader[];
  data: TableRowData[];
}

// 테이블 컴포넌트 정의
export const Table = ({ headers, data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse whitespace-nowrap border border-[#EDEDED] text-[14px]">
        <thead>
          <tr>
            <th className="border border-[#EDEDED] bg-[#F6F6F6] py-2.5 font-medium text-[#6D6D6D]" />
            {headers.map((header) => (
              <th
                key={header}
                className="border border-[#EDEDED] bg-[#F6F6F6] px-1 py-2.5 font-medium text-[#6D6D6D]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-[#EDEDED] px-1 py-2.5 text-center">
                {row.category}
              </td>
              {row.details.map((detail, detailIndex) => (
                <td
                  key={detailIndex}
                  className="border border-[#EDEDED] text-center"
                >
                  {detail}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
