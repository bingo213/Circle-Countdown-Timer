import React from 'react';
import { CircleProgressProps } from '../CircleProgress';

export interface CoundownTimeProps {
  time: Date;
  circleProgress: CircleProgressProps;
}

export const CoundownTime: React.FC<CoundownTimeProps> = ({
  time,
  circleProgress,
}: CoundownTimeProps) => {
  return <>
  
  </>;
};
