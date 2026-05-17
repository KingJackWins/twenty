import type { MessageDescriptor } from '@lingui/core';
import { getServerI18n } from '@/lib/i18n/utils/get-server-i18n';
import { theme } from '@/theme';
import { styled } from '@linaria/react';

const Row = styled.dl`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  margin: 0;

  @media (min-width: ${theme.breakpoints.md}px) {
    align-items: center;
    flex-direction: row;
    gap: ${theme.spacing(4)};
  }
`;

const RowLabel = styled.dt`
  color: ${theme.colors.primary.text[60]};
  font-family: ${theme.font.family.mono};
  font-size: ${theme.font.size(3)};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: 0.08em;
  line-height: ${theme.lineHeight(4)};
  margin: 0;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.md}px) {
    flex-shrink: 0;
    width: 80px;
  }
`;

const ChipListWrapper = styled.dd`
  margin: 0;
`;

const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Chip = styled.li`
  border: 1px solid ${theme.colors.primary.border[10]};
  border-radius: ${theme.radius(4)};
  color: ${theme.colors.primary.text[80]};
  font-family: ${theme.font.family.mono};
  font-size: ${theme.font.size(3)};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: 0.04em;
  line-height: ${theme.lineHeight(4)};
  padding: ${theme.spacing(1)} ${theme.spacing(2.5)};
  text-transform: uppercase;
`;

type PartnerChipRowProps<TValue extends string> = {
  label: MessageDescriptor;
  values: readonly TValue[];
  valueLabels: Record<TValue, MessageDescriptor>;
};

export function PartnerChipRow<TValue extends string>({
  label,
  values,
  valueLabels,
}: PartnerChipRowProps<TValue>) {
  const i18n = getServerI18n();

  return (
    <Row>
      <RowLabel>{i18n._(label)}</RowLabel>
      <ChipListWrapper>
        <ChipList>
          {values.map((value) => (
            <Chip key={value}>{i18n._(valueLabels[value])}</Chip>
          ))}
        </ChipList>
      </ChipListWrapper>
    </Row>
  );
}
