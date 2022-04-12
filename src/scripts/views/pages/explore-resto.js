import RestoApiSource from '../../data/restoapi-source';

const ExploreResto = {
  async render() {
    return `
        <h2>Explore Restaurants</h2>
      `;
  },

  async afterRender() {
    const resto = await RestoApiSource.exploreResto();
    console.log(resto);
  },
};

export default ExploreResto;
