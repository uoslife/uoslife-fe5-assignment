import { css } from '@emotion/react';
import type { CellData } from '../../types';
import { memo } from 'react';

type CellProps = {
  data: CellData;
  isError: boolean;
  onClick: (id: number, value: number) => void;
};

function Cell({ data, isError, onClick }: CellProps) {
  return (
    <button
      onClick={() => data.value !== null && onClick(data.id, data.value)}
      disabled={data.value === null}
      css={css`
        width: 100%;
        height: 100%;
        color: #fff;
        border: none;
        background-color: ${isError
          ? 'red'
          : data.isFront
          ? '#3f71a2'
          : '#0e2c4d'};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: ${data.value === null ? 0 : 1};
      `}
    >
      {data.value}
    </button>
  );
}

export default memo(Cell);
