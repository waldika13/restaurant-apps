import ExploreResto from '../views/pages/explore-resto';
import Detail from '../views/pages/detail';

const routes = {
  '/': ExploreResto,
  '/explore-resto': ExploreResto,
  '/detail/:id': Detail,
};

export default routes;
