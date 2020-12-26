import './style.css';
import PageLoader from './components/PageLoader/index';
import UsersData from './components/UsersData/index';
import UsersFilter from './components/UsersFilter/index';
import getUsersData from './mixins/api';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = document.querySelector('#app');
    const loader = new PageLoader(app);
    const filter = new UsersFilter(app);

    loader.render();

    const usersData = await getUsersData('https://randomuser.me/api/?results=15');

    const data = new UsersData(app, usersData);

    const dataElement = data.render();

    filter.render();
    filter.addFilterHandler(dataElement);

    loader.remove();
  } catch (e) {
    console.error(e, '- Rendering cannot happen because no data was received.');
  }
});
