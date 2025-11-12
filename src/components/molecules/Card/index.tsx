import { styled } from '@stitches/react';
import { colors, space, radii, fonts } from '@/design-tokens';
import { ReactNode } from 'react';

const CardContainer = styled('div', {
  backgroundColor: colors.white,
  borderRadius: radii.large,
  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  padding: space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: space[3]
});

const CardTitle = styled('h3', {
  fontFamily: fonts.heading,
  fontSize: '18px',
  color: colors.text,
  margin: 0
});

const CardBody = styled('div', {
  fontFamily: fonts.body,
  fontSize: '14px',
  color: colors.text
});

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};
