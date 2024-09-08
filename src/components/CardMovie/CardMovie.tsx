import React from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./CardMovie.styled";
import { CardMovieProps } from "./types";
import { limitString } from "~/utils/limitString";
import { mountLinkImage } from "~/utils/mountLinkImage";

const IMAGE_LINK_DEFAULT = "https://via.placeholder.com/300x200";

const Card = ({
  imagePath,
  title,
  description,
  footerText,
  className,
  onClick,
}: CardMovieProps) => {
  const imageLink = imagePath ? mountLinkImage(imagePath) : IMAGE_LINK_DEFAULT;

  return (
    <CardContainer onClick={onClick} className={className}>
      <CardImage src={imageLink} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{limitString(description)}</CardDescription>
      </CardContent>
      <CardFooter>{footerText}</CardFooter>
    </CardContainer>
  );
};

export default Card;
