import React, {useState} from 'react';
import * as S from './styled';
import Truncate from 'components/Truncate';
export default function Home() {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <S.WrapperTruncate>
        {isShow ? (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, non ipsam! Facere necessitatibus ea vel quidem ratione
            unde suscipit atque amet obcaecati excepturi accusantium magnam
            incidunt quos, error deleniti laboriosam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Perferendis, non ipsam! Facere
            necessitatibus ea vel quidem ratione unde suscipit atque amet
            obcaecati excepturi accusantium magnam incidunt quos, error deleniti
            laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis, non ipsam! Facere necessitatibus ea vel quidem
            ratione unde suscipit atque amet obcaecati excepturi accusantium
            magnam incidunt quos, error deleniti laboriosam.
          </p>
        ) : (
          <Truncate line="2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, non ipsam! Facere necessitatibus ea vel quidem
              ratione unde suscipit atque amet obcaecati excepturi accusantium
              magnam incidunt quos, error deleniti laboriosam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Perferendis, non
              ipsam! Facere necessitatibus ea vel quidem ratione unde suscipit
              atque amet obcaecati excepturi accusantium magnam incidunt quos,
              error deleniti laboriosam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Perferendis, non ipsam! Facere necessitatibus ea
              vel quidem ratione unde suscipit atque amet obcaecati excepturi
              accusantium magnam incidunt quos, error deleniti laboriosam.
            </p>
          </Truncate>
        )}
        <S.Btn onClick={handleShow}>{isShow ? 'Thu gọn' : 'Xem thêm  '}</S.Btn>
      </S.WrapperTruncate>
    </>
  );
}
