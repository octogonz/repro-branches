import {createSelector} from 'reselect';
import {IState} from './definitions';

export default class Selectors {
    sliceSelector = (state: IState): IState => state;
    subSelector = createSelector(this.sliceSelector, state => state.test);
}
