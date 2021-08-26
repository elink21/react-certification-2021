import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';
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
  color: ${(props) => props.theme.cardFontColor};
  font-size: 20px;
  cursor: pointer;
`;

const Description = styled.p`
  color: ${(props) => props.theme.cardFontColor};
  font-size: 14px;
`;

export const VideoCard = ({ imageUrl, title, description, video }) => {
  const globalContext = useContext(GlobalContext);

  Title.defaultProps = {
    theme: globalContext.theme,
  };

  Description.defaultProps = {
    theme: globalContext.theme,
  };

  const handleVideoClicked = (video) => {
    globalContext.setSelectedVideo(video);
    globalContext.getVideos('related', video.id.videoId);
  };


  return (
    <Card>
      <Link
        to="/watchVideo"
        style={{ textDecoration: 'none' }}
        onClick={() => handleVideoClicked(video)}
      >
        <CardImg src={imageUrl} alt="" />
          <Title>{title}</Title>
        <Description>{description?.substring(0, 200)}</Description>
      </Link>
    </Card>
  );
};
