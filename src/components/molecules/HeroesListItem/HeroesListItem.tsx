import React from 'react';
import styled from 'styled-components';
import { HeroNameContainer, HeroName, HeroType, HeroTypeDesktop, ImageWithName, ListItem, HeroDescription } from './HeroesListItem.styled';

interface HeroesListItemProps {
  avatarUrl: string;
  name: string;
  type: string;
  description: string;
  [x: string]: any;
}

export const HeroesListItem = ({ avatarUrl, name, type, description, ...rest }: HeroesListItemProps) => {
  return (
    <ListItem {...rest}>
      <ImageWithName>
        <img src={avatarUrl} alt="Hero" />
        <HeroNameContainer>
          <HeroName>{name}</HeroName>
          <HeroType>{type}</HeroType>
        </HeroNameContainer>
      </ImageWithName>

      <HeroTypeDesktop>{type}</HeroTypeDesktop>
      <HeroDescription>{description}</HeroDescription>
    </ListItem>
  );
};
