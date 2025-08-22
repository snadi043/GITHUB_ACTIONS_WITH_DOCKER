// @ts-check
import { test, expect } from '@playwright/test';

test('test creation', async ({ request }) => {
  const testTitle = 'Testing test';
  const response = await request.post('/', {
    data: {
      title: testTitle,
    },
  });
  expect(response.ok()).toBeTruthy();
  const resDataRaw = await response.body();
  const resData = JSON.parse(resDataRaw.toString());
  expect(resData).toHaveProperty('test.id');
  expect(resData.test.title).toBe(testTitle);
});

test('getting tests', async ({ request }) => {
  const response = await request.get('/');
  expect(response.ok()).toBeTruthy();
  const resDataRaw = await response.body();
  const resData = JSON.parse(resDataRaw.toString());
  expect(resData).toHaveProperty('tests');
  expect(resData.tests.length).toBeGreaterThan(0);
});
