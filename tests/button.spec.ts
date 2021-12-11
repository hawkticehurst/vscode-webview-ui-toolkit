import {test, expect} from '@playwright/test';

const url = 'http://localhost:3000/';

test('basic button test', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#primary-btn');
	await expect(button).toHaveText('Hello World');
});

test('primary button test screenshot', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#primary-btn');
	expect(await button.screenshot()).toMatchSnapshot('primary-button.png');
});

test('secondary button test screenshot', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#secondary-btn');
	expect(await button.screenshot()).toMatchSnapshot('secondary-button.png');
});

test('disabled button test screenshot', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#disabled-btn');
	expect(await button.screenshot()).toMatchSnapshot('disabled-button.png');
});

test('start icon button test screenshot', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#with-start-icon-btn');
	expect(await button.screenshot()).toMatchSnapshot(
		'with-start-icon-button.png'
	);
});

test('icon button test screenshot', async ({page}) => {
	await page.goto(url);
	const button = page.locator('#icon-button');
	expect(await button.screenshot()).toMatchSnapshot('icon-button.png');
});
