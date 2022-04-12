import RestoApiSource from '../../data/restoapi-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Explore Restaurants</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoApiSource.detailResto(url.id);
    console.log(resto);
  },
};

export default Detail;
