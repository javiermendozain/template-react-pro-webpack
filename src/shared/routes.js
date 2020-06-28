// Components
import Home from '../app/pages/Home/container/Home';
import NotFound from '../app/pages/NotFount/NotFound';
import HelloWord from '../app/pages/HelloWord/Hello_word';


// Containers
import Blog from '../app/pages/blog';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/hello',
    component: HelloWord
  },
  {
    path:'/blog',
    component: Blog,
    exact: true
  },
  {
    path: null,
    component: NotFound
  }
];

export default routes;
