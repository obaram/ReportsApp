import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportsState} from '../../shared/interfaces/reports-state';
import {Report} from '../../shared/interfaces/report';

export const getReportsState = createFeatureSelector<ReportsState>('reports');

export const getReports = createSelector(getReportsState, (state: ReportsState) => {
  return state.items;
});

export const getTags = createSelector(getReportsState, (state: ReportsState) => {
  return state.tags;
});

export const getOptions = createSelector(getReportsState, (state: ReportsState) => {
  return Array.from(state.years);
});

export const getFilters = createSelector(getReportsState, (state: ReportsState) => {
  return state.filters;
});


export const filterByTags = ([reports, filter]): Report[] => {
  if (!filter.tags.size) {
    return reports;
  }
  return reports.filter((report) => filter.tags.has(report.category));
};

export const filterByText = ([reports, filter]): Report[] => {
  if (!filter.searchValue) {
    return [reports, filter];
  }
  return [reports.filter((report) => report.title.includes(filter.searchValue) || report.description.includes(filter.searchValue)), filter];
};

export const filterByYear = ([reports, filter]): Report[] => {
  if (!filter.year) {
    return [reports, filter];
  }
  return [reports.filter((report) => new Date(report.date).getFullYear() === +filter.year), filter];
};
