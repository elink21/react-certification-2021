import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  padding: 2px;
  text-align: center;
  border-radius: 3px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
  max-width: 100%;
`;

const Title = styled.p`
  font-weight: bold;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const Description = styled.p`
  color: gray;
  font-size: 14px;
`;

export const VideoCard = ({
  imageUrl,
  title,
  description,
  video,
  updateActualVideo,
  toggleFunction,
  updateVideoList,
}) => {
  const handleVideoClicked = (video) => {
    updateActualVideo(video);
    updateVideoList('videoId', video.id.videoId);
    toggleFunction(true);
  };

  return (
    <Card onClick={() => handleVideoClicked(video)}>
      <CardImg src={imageUrl} alt="" />
      <Title>{title}</Title>
      <Description>{description.substring(0,200)}</Description>
    </Card>
  );
};