import React from 'react';
import styled from 'styled-components';

export interface CircleProgressProps {
  progressColor?: string;
  backgroundColor?: string;
  radius?: number;
  strokeWidth?: number;
  percentage?: number;
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  progressColor,
  backgroundColor,
  radius = 60,
  strokeWidth = 10,
  percentage = 50,
}: CircleProgressProps) => {
  const cx = radius + strokeWidth;
  const svgWidth = cx * 2;
  const circumference = 2 * radius * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <Svg width={svgWidth} height={svgWidth}>
      <Background
        strokeWidth={strokeWidth}
        stroke={backgroundColor}
        fill="transparent"
        r={radius}
        cx={cx}
        cy={cx}
      />
      <Progress
        strokeWidth={strokeWidth}
        stroke={progressColor}
        fill="transparent"
        r={radius}
        cx={cx}
        cy={cx}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
    </Svg>
  );
};

const Svg = styled.svg``;

const Background = styled.circle``;

const Progress = styled.circle`
  transision: stroke-dashoffset 0.3s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
