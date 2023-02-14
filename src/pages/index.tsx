import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { HotColumn, HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.min.css';
import { data } from '../components/constants';
import {
  addClassesToRows,
  alignHeaders,
  changeCheckboxCell,
  drawCheckboxInRowHeaders,
} from '../components/hooksCallbacks';
import { ProgressBarRenderer } from '../components/ProgressBar';
import { StarsRenderer } from '../components/Stars';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <HotTable
      data={data}
      height={450}
      colWidths={[140, 192, 100, 90, 90, 110, 97, 100, 126]}
      colHeaders={['Company name', 'Name', 'Sell date', 'In stock', 'Qty', 'Progress', 'Rating', 'Order ID', 'Country']}
      dropdownMenu={true}
      hiddenColumns={{
        indicators: true,
      }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      rowHeaders={true}
      afterGetColHeader={alignHeaders}
      beforeRenderer={addClassesToRows}
      afterGetRowHeader={drawCheckboxInRowHeaders}
      afterOnCellMouseDown={changeCheckboxCell}
      manualRowMove={true}
      licenseKey='non-commercial-and-evaluation'
    >
      <HotColumn data={1} />
      <HotColumn data={3} />
      <HotColumn data={4} type='date' allowInvalid={false} />
      <HotColumn data={6} type='checkbox' className='htCenter' />
      <HotColumn data={7} type='numeric' />
      <HotColumn data={8} readOnly={true} className='htMiddle'>
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        <ProgressBarRenderer hot-renderer />
      </HotColumn>
      <HotColumn data={9} readOnly={true} className='htCenter'>
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        <StarsRenderer hot-renderer />
      </HotColumn>
      <HotColumn data={5} />
      <HotColumn data={2} />
    </HotTable>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
