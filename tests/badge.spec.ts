import {test, expect} from '@playwright/test';

const url = 'http://localhost:3000/';

test('basic badge test', async ({page}) => {
	await page.goto(url);
	const badge = page.locator('#badge');
	await expect(badge).toHaveText('100');
});

test('badge test screenshot', async ({page}) => {
	await page.goto(url);
	const badge = page.locator('#badge');
	expect(await badge.screenshot()).toMatchSnapshot('badge.png');
});
