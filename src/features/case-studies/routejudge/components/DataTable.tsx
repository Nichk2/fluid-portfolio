import { useTranslation } from "react-i18next";

type DataTableProps = {
  caption: string;
  columns: string[];
  rows: (string | number)[][];
};

/**
 * Table twin of a chart, behind a native <details> toggle.
 * Every chart on the page has one: tooltips enhance a chart, they never gate
 * a value, and screen readers and keyboard users get the exact numbers.
 */
export const DataTable = ({ caption, columns, rows }: DataTableProps) => {
  const { t } = useTranslation("routejudge");

  return (
    <details className="mt-6 group">
      <summary className="cursor-pointer text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 w-fit">
        {t("chart.viewData")}
      </summary>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm font-body tabular-nums">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border">
              {columns.map((column) => (
                <th key={column} scope="col" className="text-left font-medium text-muted-foreground py-2 pr-6">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border/40">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-2 pr-6 text-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
};

export default DataTable;
