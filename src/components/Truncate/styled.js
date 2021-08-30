import styled, {css} from 'styled-components';

export const Text = styled.div`
  ${({$line}) =>
    $line &&
    css`
      -webkit-line-clamp: ${$line} !important;
    `};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
