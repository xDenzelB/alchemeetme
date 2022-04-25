import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/layout/Header';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('header', () => {
  it('Should render the header img', () => {

    render(
      <MemoryRouter>
        <Header user={user} />
      </MemoryRouter>
    );

    const img = screen.getByAltText('Alchemy Logo');
    

    expect(img).toBeInTheDocument()

    
  
  });
  it('Should render the header name', async () => {

    render(
      <MemoryRouter>
        <Header user={user} />
      </MemoryRouter>
    );

    const name = await screen.findByText(/vonta/i);
    

    expect(name).toBeInTheDocument();

    
  
  });
});
