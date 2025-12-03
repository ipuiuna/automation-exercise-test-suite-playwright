import { Page, TestInfo } from '@playwright/test';
import path from 'path';
import fs from 'fs';

export async function saveAndAttachScreenshot(
  page: Page,
  testInfo: TestInfo,
  fileName: string
) {
  const screenshotDir = path.join(__dirname, '..', 'tests', 'home-page');
  const screenshotPath = path.join(screenshotDir, fileName);

  fs.mkdirSync(screenshotDir, { recursive: true });

  const buffer = await page.screenshot({ fullPage: true });

  if (testInfo.status === 'passed') {
    await fs.promises.mkdir(path.dirname(screenshotPath), { recursive: true });
    await fs.promises.writeFile(screenshotPath, buffer);
    console.log(`Screenshot atualizado: ${fileName}`);
  } else {
    console.log(
      `Teste FALHOU → screenshot mantido (não sobrescrito): ${fileName}`
    );
  }

  await testInfo.attach('screenshot', {
    body: buffer,
    contentType: 'image/png',
  });
}
