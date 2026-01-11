import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

type TimerProps = {
  startTime: number | null;
  endTime: number | null;
};

export default function Timer({ startTime, endTime }: TimerProps) {
  const [elapsed, setElapsed] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (startTime === null) {
      setElapsed(0);
      return;
    }

    if (endTime !== null) {
      setElapsed((endTime - startTime) / 1000);
      if (requestRef?.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const animate = () => {
      const currentTime = Date.now();
      setElapsed((currentTime - startTime) / 1000);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [startTime, endTime]);

  return (
    <p
      css={css`
        font-variant-numeric: tabular-nums;
        color: #fff;
        font-weight: bold;
        min-width: 60px;
        text-align: right;
      `}
    >
      {elapsed.toFixed(2)}
    </p>
  );
}
