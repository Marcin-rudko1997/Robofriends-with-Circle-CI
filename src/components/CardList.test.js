import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

it('renders CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John John',
            email: 'John@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})