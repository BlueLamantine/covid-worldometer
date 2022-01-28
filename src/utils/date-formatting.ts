import moment from 'moment';

export const formattingDate = (date: Date | undefined): string =>
    moment(date).format('YYYY-MM-DD');

export const formattingDateBefore = (date: Date | undefined): string =>
    moment(date).add(-1, 'days').format('YYYY-MM-DD');

export const dateYesterday = moment().add(-1, 'days').toDate();

export const timer = (date: number) => moment(date).startOf('day').fromNow();
