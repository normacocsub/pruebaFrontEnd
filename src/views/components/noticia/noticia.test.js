import { render, screen } from '@testing-library/react';
import Noticia from './index';

test('renders learn react link', () => {
    render(<Noticia />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });