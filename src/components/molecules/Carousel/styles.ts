import styled from 'styled-components';
import { colors, typography, radii, space } from '@/design-tokens';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[2]};
  width: 100%;
`;

export const Control = styled.button`
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: ${radii.round};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  cursor: pointer;
  font-family: ${typography.heading};
  font-size: 20px;
  transition: background 0.16s, color 0.16s;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const Viewport = styled.div`
  overflow: hidden;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  gap: ${space[2]};
  will-change: transform;
`;

export const Slide = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: ${radii.medium};
  background-color: ${colors.background};
  display: block;
`;
