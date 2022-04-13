import RestoApiSource from '../../data/restoapi-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <h2>Detail Restaurants</h2><br>
        <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
  },
};

export default Detail;
