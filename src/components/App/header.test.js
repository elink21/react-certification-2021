import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import videoList from '../../json/videoList.json';

import React from 'react';

import { Header } from './Header';

beforeEach(() => {
  render(<Header></Header>);
});
describe('header', () => {
  test('should contain dark mode tag', () => {
    const darkModeTag = screen.queryByText(/Dark mode/i);
    expect(darkModeTag).toBeInTheDocument();
  });

  test('should have a search bar for looking for terms', () => {
    const searchBarTag = screen.queryByPlaceholderText(/Search.../i);
    expect(searchBarTag).toBeInTheDocument();
  });

  test('Data for videos shouldnt be null', () => {
    expect(videoList).toBeDefined();
  });

  test('Data for videos must be an array of objects with title, description and an url for image displaying', () => {
    expect(videoList.items.length > 0).toBe(true);

    let hasCorrectShape = true;
    for (let video of videoList.items) {
      for (let prop of ['title', 'description', 'thumbnails']) {
        if (!video.snippet.hasOwnProperty(prop)) {
          hasCorrectShape = false;
        }
      }
    }
    //Matching object shape

    expect(hasCorrectShape).toBe(true);
  });
});
