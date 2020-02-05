import * as express from 'express'
import * as path from 'path';
import expressApiVersioning from 'express-api-versioning';

class App {
  public express

  constructor () {
    this.express = express()
    this.setupRoutes()
  }

  private setupRoutes (): void {

    const config = {
      apiPath: path.join(__dirname, './api'),
      test: /\/api\/(v[0-9]+).*/,
      entryPoint: 'index.js',
      instance: this.express
    };

    this.express.use(express.json())
    
    this.express
      .use(expressApiVersioning(config, (error, req, res, next) => {
        if(error)
          console.log(error);
        next(); // calls the next middleware
      }));
  }
}

export default new App().express
