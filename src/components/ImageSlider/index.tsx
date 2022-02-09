import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import { Bullet } from "../Bullet";

import * as S from "./styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <S.Container>
      <S.ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={String(index)} active={imageIndex === index} />
        ))}
      </S.ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <S.CarImageWrapper>
            <S.CarImage source={{ uri: item }} resizeMode="contain" />
          </S.CarImageWrapper>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
}
