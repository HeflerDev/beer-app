import React from 'react';

export const Bottle = ({
  size = 24,
  colorPrimary = 'black',
  colorSecondary = 'black',
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill={colorSecondary} d="m160 160l-56 56l-64-64l56-56Z" opacity=".8"/><path fill={colorPrimary} d="m245.7 42.3l-32-32a8.1 8.1 0 0 0-11.4 11.4l1.5 1.4l-55.1 41.4l-38.3 7.7a8.5 8.5 0 0 0-4.1 2.1L21.7 159a23.9 23.9 0 0 0 0 34L63 234.3a23.9 23.9 0 0 0 34 0l84.7-84.6a8.5 8.5 0 0 0 2.1-4.1l7.7-38.3l41.4-55.1l1.4 1.5a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4ZM96 107.3l52.7 52.7l-44.7 44.7L51.3 152ZM74.3 223L33 181.7a8 8 0 0 1 0-11.4l7-7L92.7 216l-7 7a8.1 8.1 0 0 1-11.4 0ZM177.6 99.2a8.3 8.3 0 0 0-1.4 3.2l-7.6 37.7l-8.6 8.6L107.3 96l8.6-8.6l37.7-7.6a8.3 8.3 0 0 0 3.2-1.4l58.4-43.8l6.2 6.2Z"/></svg>
);
