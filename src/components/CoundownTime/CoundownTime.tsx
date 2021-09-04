import styled from 'styled-components';
import { CircleProgress, CircleProgressProps } from '../CircleProgress';

export interface CoundownTimeProps {
  time: number;
  type: string;
  circleProgress: CircleProgressProps;
}

export const CoundownTime: React.FC<CoundownTimeProps> = ({
  time,
  type,
  circleProgress,
}: CoundownTimeProps) => {
  return (
    <Wrapper>
      <CircleProgress {...circleProgress} />
      <Timer>
        <div>{time.toString().padStart(2, '0')}</div>
        <Text>{type}</Text>
      </Timer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Timer = styled.div`
  font-size: 24px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: #d8d8d8;
  font-weight: 200;
`;
