import React from 'react';
import * as S from './styled';
export default function Truncate({line, children}) {
  return (
    <>
      <S.Text $line={line}>{children}</S.Text>
    </>
  );
}
