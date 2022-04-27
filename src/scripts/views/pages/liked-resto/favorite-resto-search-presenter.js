class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();

    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);

    this._showFoundResto(foundResto);
  }

  _showFoundResto(resto) {
    const html = resto.reduce(
      (carry, restraurant) => carry.concat(`<li class="resto"><span class="resto__title">${restraurant.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.restaurant').innerHTML = html;

    document.getElementById('resto-search-container')
      .dispatchEvent(new Event('restaurant:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
