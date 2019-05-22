import React from "react";
import { create } from "react-test-renderer";
import { shallow, mount } from "enzyme";
import ListPage from "./listPage";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from '../../store';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from "redux-mock-store";
const store = configureStore();
configure({ adapter: new Adapter() });






describe("ListPage Component", () => {
  
  it("it shows the expected list data when loaded ", async () => {
    /*mock.onGet('/api/test').reply(200, { data: ['something'] })
    axios.interceptors.request.use((config) => {
            console.log("Request", config) // eslint-disable-line
            return config
    });
    // for testing purposes
    axios.interceptors.response.use((config) => {
            console.log("Response", config)
            return config
    });

    const component = shallow(
      <Provider store={store}>
        <ListPage />
      </Provider>
    );
    //const instance = component.instance();

    console.log(instance.props.news);*/

    const wrapper = mount(
      <Provider store={store}>
        <ListPage />
      </Provider>
    );
    const instance = wrapper.instance();
    //jest.spyOn(instance, 'getNewsList');
    await instance.componentDidMount();
    console.log(instance.props.news);
    //expect(instance.getNewsList).toHaveBeenCalled();


    /*
    const methodNameFake = jest.spyOn(ListPage.prototype, 'componentDidMount');
    const wrapper = mount(
      <Provider store={store}>
        <ListPage />
      </Provider>
    );
    expect(ListPage.prototype.componentDidMount).toHaveBeenCalled();
*/

  });
});
