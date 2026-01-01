import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Sessão
  app.use(
    session({
      secret: 'segredo',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // PASTA PUBLIC (NA RAIZ DO PROJETO)
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // CONFIGURAR EJS
  app.setViewEngine('ejs');

  // PASTA DAS VIEWS (DENTRO DE src/views)
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));

  await app.listen(4000);
  console.log('Servidor rodando em http://localhost:4000');
}
bootstrap();