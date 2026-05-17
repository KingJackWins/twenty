'use client';

import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import { theme } from '@/theme';

type EmptyStateProps = {
  onClearFilters: () => void;
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  padding: ${theme.spacing(12)} ${theme.spacing(4)};
  text-align: center;
`;

const Heading = styled.h2`
  color: ${theme.colors.primary.text[100]};
  font-family: ${theme.font.family.serif};
  font-size: ${theme.font.size(6)};
  font-weight: ${theme.font.weight.light};
  letter-spacing: -0.02em;
  line-height: ${theme.lineHeight(7)};
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${theme.colors.primary.text[60]};
  font-family: ${theme.font.family.sans};
  font-size: ${theme.font.size(4)};
  line-height: ${theme.lineHeight(5.5)};
  margin: 0;
`;

const ClearButton = styled.button`
  background-color: rgba(0, 0, 0, 0.08);
  border: 1px solid ${theme.colors.primary.border[40]};
  border-radius: ${theme.radius(1)};
  color: ${theme.colors.primary.text[100]};
  cursor: pointer;
  font-family: ${theme.font.family.mono};
  font-size: ${theme.font.size(3)};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: 0.08em;
  line-height: ${theme.lineHeight(4)};
  margin-top: ${theme.spacing(3)};
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  text-transform: uppercase;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary.border[40]};
    outline-offset: 2px;
  }
`;

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  const { i18n } = useLingui();

  return (
    <Wrapper>
      <Heading>{i18n._(msg`No partners match your filters`)}</Heading>
      <Subtitle>
        {i18n._(msg`Try removing some filters or browse all partners.`)}
      </Subtitle>
      <ClearButton type="button" onClick={onClearFilters}>
        {i18n._(msg`Clear filters`)}
      </ClearButton>
    </Wrapper>
  );
}
