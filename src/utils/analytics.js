import ReactGA from 'react-ga';

class Analytics {
  constructor(gaTrackingId = null) {
    if (gaTrackingId === null) {
      return;
    }
    ReactGA.initialize(gaTrackingId, this.getOptions());
  }

  getOptions = () => ({
    cookieDomain: 'none'
  });

  init = gaTrackingId => {
    this.constructor(gaTrackingId);
  };

  logPageView = url => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };

  logNewBookAdded = () => {
    ReactGA.event({ category: 'Book', action: 'Added' });
  };
}

const analytics = new Analytics();

export default analytics;
