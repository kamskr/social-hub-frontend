import { rest } from 'msw';
import { typesData } from 'helpers/tests/mocks/typesData';
import { heroesData } from './heroesData';

/**
 * Defines API routes that should be intercepted by msw/server and mocked data returned by them
 */
export const apiHandlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/heroes/:heroId`, (req, res, ctx) => {
    const { heroId } = req.params;
    const hero = heroesData.data.find((hero) => hero.id === heroId);
    return res(ctx.json(hero));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/types`, (req, res, ctx) => {
    return res(ctx.json(typesData));
  }),
];
