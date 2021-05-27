import React from 'react'
import { configure, mount} from 'enzyme'
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App'
import NavBar from './components/navBar/NavBar'

configure({adapter: new Adapter()});
 
describe('App', () => {
  let store
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore([]);
  });
    it('NavBar should render on all routes', () => {
      const wrapper = mount(
          <Provider store={store}>
             <MemoryRouter initialEntries={[ `/` ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(NavBar)).to.have.lengthOf(1)
    }) 
  }); 


