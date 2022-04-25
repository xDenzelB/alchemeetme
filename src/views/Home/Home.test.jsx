import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

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


describe('profile', () => {

  it('Should render the user profile', async () => {

    render(
      <MemoryRouter>
        <Home user={user} />
      </MemoryRouter>
    );

    const { name, color, likes, motto } = user

    const profileName = screen.getByRole('heading', { name });
    const profileColor = screen.getByText(color);
    const profileLikes = screen.getByRole('list');
    const profileHeader = await screen.findByAltText('header');
    const avatar = screen.getByAltText('avatar');

    const profileMotto = screen.getByText(motto);
    const interests = screen.getByRole('heading', { name: /interests/i });

    expect(profileName).toBeInTheDocument();
    expect(profileColor).toBeInTheDocument();
    expect(profileLikes.children.length).toEqual(likes.length);
    expect(profileHeader).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(profileMotto).toBeInTheDocument();
    expect(interests).toBeInTheDocument();

  });
})
