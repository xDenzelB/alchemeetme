import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


describe('App', () => {
  it('Should render the header', () => {

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  
  })
})
