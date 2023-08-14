import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

  describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
    // snapshot test - assert value comparison
      it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      });
    // emoji test - if emoji is functional
    describe('emoji is visible', () => {
    it('emoji is visible in h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('logo')).toHaveTextContent('👨‍💻');
      });
    })
  })